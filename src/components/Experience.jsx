import { useEffect, useRef, useState } from 'react'

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ── Page-load intro: cartons fly in and assemble into a pallet
      stack, then the curtain lifts into the hero ─────────────────── */
const SPLASH_LEAVE = 2050
const SPLASH_DONE = 2950

export function Preloader() {
  const [phase, setPhase] = useState('loading')
  const sceneRef = useRef(null)
  const pctRef = useRef(null)

  useEffect(() => {
    if (reducedMotion()) {
      setPhase('done')
      return
    }
    document.body.classList.add('is-loading')
    const t1 = setTimeout(() => {
      setPhase('leaving')
      document.body.classList.remove('is-loading')
    }, SPLASH_LEAVE)
    const t2 = setTimeout(() => setPhase('done'), SPLASH_DONE)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.classList.remove('is-loading')
    }
  }, [])

  useEffect(() => {
    if (reducedMotion()) return
    const wrap = sceneRef.current
    if (!wrap) return

    let disposed = false
    let raf = 0
    let dispose = () => {}

    Promise.all([
      import('three'),
      import('three/examples/jsm/geometries/RoundedBoxGeometry.js'),
    ])
      .then(([THREE, { RoundedBoxGeometry }]) => {
        if (disposed || !wrap.isConnected) return

        let renderer
        try {
          renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        } catch {
          return
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
        renderer.setSize(wrap.clientWidth, wrap.clientHeight)
        renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;'
        wrap.appendChild(renderer.domElement)

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
          40,
          wrap.clientWidth / wrap.clientHeight,
          0.1,
          100,
        )
        camera.position.set(4.6, 3.4, 8.6)
        camera.lookAt(0, 0.2, 0)

        scene.add(new THREE.AmbientLight(0x9dbfe4, 0.95))
        const key = new THREE.DirectionalLight(0xffffff, 1.6)
        key.position.set(5, 9, 6)
        scene.add(key)
        const rim = new THREE.DirectionalLight(0x3b8fd9, 0.8)
        rim.position.set(-6, 2, -4)
        scene.add(rim)

        const group = new THREE.Group()
        scene.add(group)

        /* 3×3×3 pallet stack; gold carton tops it off last */
        const geo = new RoundedBoxGeometry(0.94, 0.94, 0.94, 2, 0.08)
        const navies = [0x113b66, 0x15497e, 0x1a5a99, 0x1f6cb5]
        const cells = []
        for (let c = -1; c <= 1; c++)
          for (let r = 0; r <= 2; r++)
            for (let d = -1; d <= 1; d++) cells.push({ c, r, d })
        // assemble bottom-up, shuffled within each layer
        cells.sort((a, b) => a.r - b.r || Math.random() - 0.5)
        const goldCell = cells.findIndex(({ c, r, d }) => c === 0 && r === 2 && d === 0)
        if (goldCell >= 0) cells.push(cells.splice(goldCell, 1)[0]) // gold lands last

        const STAGGER = 0.042
        const FLIGHT = 0.85
        const boxes = cells.map(({ c, r, d }, i) => {
          const gold = c === 0 && r === 2 && d === 0
          const m = new THREE.Mesh(
            geo,
            new THREE.MeshStandardMaterial({
              color: gold ? 0xe8b84b : navies[(Math.random() * navies.length) | 0],
              roughness: 0.5,
              metalness: 0.15,
            }),
          )
          const dir = new THREE.Vector3(
            Math.random() - 0.5,
            Math.random() * 0.7 + 0.15,
            Math.random() - 0.5,
          )
            .normalize()
            .multiplyScalar(6 + Math.random() * 4)
          m.userData = {
            start: dir,
            target: new THREE.Vector3(c * 1.02, r * 1.02 - 1.02, d * 1.02),
            rot: new THREE.Euler(
              (Math.random() - 0.5) * 5,
              (Math.random() - 0.5) * 5,
              (Math.random() - 0.5) * 5,
            ),
            delay: i * STAGGER,
          }
          group.add(m)
          return m
        })

        const easeOut = (t) => 1 - Math.pow(1 - t, 3)
        const clock = new THREE.Clock()
        const started = performance.now()
        let finished = false

        dispose = () => {
          if (finished) return
          finished = true
          cancelAnimationFrame(raf)
          geo.dispose()
          boxes.forEach((b) => b.material.dispose())
          renderer.dispose()
          renderer.domElement.remove()
        }

        const loop = () => {
          if (performance.now() - started > SPLASH_DONE + 300) {
            dispose()
            return
          }
          raf = requestAnimationFrame(loop)
          const t = clock.getElapsedTime()

          boxes.forEach((m) => {
            const { start, target, rot, delay } = m.userData
            const p = easeOut(Math.min(Math.max((t - delay) / FLIGHT, 0), 1))
            m.position.lerpVectors(start, target, p)
            m.rotation.set(rot.x * (1 - p), rot.y * (1 - p), rot.z * (1 - p))
          })

          group.rotation.y = 0.5 - t * 0.12
          if (pctRef.current) {
            const pct = Math.min((t / 1.75) * 100, 100) | 0
            pctRef.current.textContent = `${pct}%`
          }
          renderer.render(scene, camera)
        }
        loop()
      })
      .catch(() => {})

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      dispose()
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`preloader ${phase === 'leaving' ? 'is-leaving' : ''}`} aria-hidden="true">
      <div className="preloader__scene" ref={sceneRef} />
      <div className="preloader__inner">
        <p className="preloader__word">
          <span>DNS</span> <span>International</span>
        </p>
        <div className="preloader__meta">
          <span className="preloader__line" />
          <b className="preloader__pct" ref={pctRef}>
            0%
          </b>
        </div>
      </div>
    </div>
  )
}

/* ── Thin scroll-progress bar under the navbar ─────────────────── */
export function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      if (ref.current) {
        ref.current.style.transform = `scaleX(${max ? doc.scrollTop / max : 0})`
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="scroll-progress" ref={ref} aria-hidden="true" />
}

/* ── Magnetic pull on buttons — desktop pointers only ──────────── */
export function Magnetic() {
  useEffect(() => {
    if (reducedMotion() || !window.matchMedia('(pointer: fine)').matches) return

    const MAX = 6
    const PULL = 0.22

    const onMove = (e) => {
      const btn = e.currentTarget
      const r = btn.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) * PULL
      const dy = (e.clientY - (r.top + r.height / 2)) * PULL
      btn.style.setProperty('--mx', `${Math.max(-MAX, Math.min(MAX, dx))}px`)
      btn.style.setProperty('--my', `${Math.max(-MAX, Math.min(MAX, dy))}px`)
    }
    const onLeave = (e) => {
      e.currentTarget.style.setProperty('--mx', '0px')
      e.currentTarget.style.setProperty('--my', '0px')
    }
    const onOver = (e) => {
      const btn = e.target.closest('.btn')
      if (!btn || btn.dataset.magnet) return
      btn.dataset.magnet = '1'
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
    }

    document.addEventListener('mouseover', onOver, { passive: true })
    return () => document.removeEventListener('mouseover', onOver)
  }, [])

  return null
}

/* ── 3D tilt on [data-tilt] elements — desktop pointers only ───── */
export function Tilt() {
  useEffect(() => {
    if (reducedMotion() || !window.matchMedia('(pointer: fine)').matches) return

    const MAX = 6.5
    const onMove = (e) => {
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(900px) rotateX(${(-py * MAX).toFixed(2)}deg) rotateY(${(px * MAX).toFixed(2)}deg)`
    }
    const onLeave = (e) => {
      e.currentTarget.style.transform = ''
    }
    const onOver = (e) => {
      const el = e.target.closest('[data-tilt]')
      if (!el || el.dataset.tiltBound) return
      el.dataset.tiltBound = '1'
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
    }

    document.addEventListener('pointerover', onOver, { passive: true })
    return () => document.removeEventListener('pointerover', onOver)
  }, [])

  return null
}

/* ── Cursor follower ring — desktop pointers only ──────────────── */
export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const ringRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    if (
      reducedMotion() ||
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(hover: none)').matches
    )
      return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const ring = ringRef.current
    const dot = dotRef.current
    let x = innerWidth / 2
    let y = innerHeight / 2
    let rx = x
    let ry = y
    let raf
    let seen = false

    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (!seen) {
        seen = true
        rx = x
        ry = y
        ring.style.opacity = '1'
        dot.style.opacity = '1'
      }
    }
    const onOver = (e) => {
      const hit = e.target.closest('a, button, [data-cursor], input, select, textarea')
      ring.classList.toggle('is-active', !!hit)
    }
    const onLeave = () => {
      ring.style.opacity = '0'
      dot.style.opacity = '0'
      seen = false
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        <span className="cursor-ring__circle" />
      </div>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  )
}
