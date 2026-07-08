import { useEffect, useRef, useState } from 'react'

/**
 * Interactive instanced 3D cargo wall.
 *  - Hover a carton: it lifts toward you (cursor turns pointer)
 *  - Click a carton: it dispatches — arcs off-screen and restocks
 *  - Auto-dispatch fires every few seconds; scroll adds parallax
 * three.js is dynamically imported (never blocks first paint); no WebGL
 * or reduced-motion degrades gracefully.
 */
export default function Hero3D() {
  const wrapRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    let disposed = false
    let raf = 0
    const cleanups = []
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    Promise.all([
      import('three'),
      import('three/examples/jsm/geometries/RoundedBoxGeometry.js'),
    ])
      .then(([THREE, { RoundedBoxGeometry }]) => {
        if (disposed) return

        let renderer
        try {
          renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          })
        } catch {
          return
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
        renderer.setSize(wrap.clientWidth, wrap.clientHeight)
        renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;'
        wrap.appendChild(renderer.domElement)
        const canvas = renderer.domElement

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
          38,
          wrap.clientWidth / wrap.clientHeight,
          0.1,
          100,
        )
        camera.position.set(6.2, 3.6, 11.5)
        camera.lookAt(0, 0.3, 0)

        scene.add(new THREE.AmbientLight(0x9dbfe4, 0.9))
        const key = new THREE.DirectionalLight(0xffffff, 1.5)
        key.position.set(6, 10, 7)
        scene.add(key)
        const rim = new THREE.DirectionalLight(0x3b8fd9, 0.7)
        rim.position.set(-7, 2, -4)
        scene.add(rim)

        const group = new THREE.Group()
        group.rotation.y = -0.22
        scene.add(group)

        /* ── The cargo wall ─────────────────────────────────────── */
        const COLS = 10
        const ROWS = 6
        const DEPTH = 3
        const GAP = 1.16
        const geo = new RoundedBoxGeometry(1, 1, 1, 2, 0.07)
        const mat = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.12 })
        const boxes = []
        const navies = [0x113b66, 0x15497e, 0x1a5a99, 0x1f6cb5, 0x0d2f52]

        for (let c = 0; c < COLS; c++) {
          for (let r = 0; r < ROWS; r++) {
            for (let d = 0; d < DEPTH; d++) {
              if (Math.random() < 0.16) continue
              const roll = Math.random()
              const hex =
                roll < 0.045
                  ? 0xe8b84b
                  : roll < 0.13
                    ? 0x3b8fd9
                    : navies[(Math.random() * navies.length) | 0]
              boxes.push({
                x: (c - (COLS - 1) / 2) * GAP,
                y: (r - (ROWS - 1) / 2) * GAP,
                z: -d * GAP,
                s: 0.86 + Math.random() * 0.16,
                phase: Math.random() * Math.PI * 2,
                depth: d,
                hex,
                hide: 0, // 1 while its ghost is flying
                lift: 0, // eased hover lift toward camera
              })
            }
          }
        }

        const mesh = new THREE.InstancedMesh(geo, mat, boxes.length)
        const dummy = new THREE.Object3D()
        const color = new THREE.Color()
        boxes.forEach((b, i) => {
          color.setHex(b.hex).multiplyScalar(1 - b.depth * 0.17)
          mesh.setColorAt(i, color)
        })
        mesh.instanceColor.needsUpdate = true
        group.add(mesh)

        /* ── Dispatch flights (pool of 3 concurrent ghosts) ─────── */
        const flights = []
        const active = new Set()
        const ghosts = Array.from({ length: 3 }, () => {
          const m = new THREE.Mesh(
            geo,
            new THREE.MeshStandardMaterial({
              color: 0xe8b84b,
              roughness: 0.4,
              metalness: 0.2,
              transparent: true,
              opacity: 0,
            }),
          )
          m.visible = false
          group.add(m)
          return m
        })

        const launchDispatch = (idx) => {
          if (flights.length >= ghosts.length) return
          const b = boxes[idx]
          if (!b || b.hide > 0) return
          const ghost = ghosts.find((g) => !g.visible)
          if (!ghost) return
          const start = new THREE.Vector3(b.x, b.y, b.z)
          flights.push({
            idx,
            t: 0,
            scale: b.s,
            ghost,
            curve: new THREE.QuadraticBezierCurve3(
              start,
              new THREE.Vector3(b.x + 3.2, b.y + 3.6, b.z + 2.6),
              new THREE.Vector3(10.5, 6.5, 4.5),
            ),
          })
          active.add(idx)
          b.hide = 1
        }

        const launchRandom = () => {
          const front = boxes
            .map((b, i) => i)
            .filter((i) => boxes[i].depth === 0 && boxes[i].hide === 0)
          if (front.length) launchDispatch(front[(Math.random() * front.length) | 0])
        }

        /* ── Pointer: hover raycast + click-to-dispatch ─────────── */
        const raycaster = new THREE.Raycaster()
        const ndc = new THREE.Vector2()
        let hovered = -1
        const pick = (e) => {
          const r = canvas.getBoundingClientRect()
          ndc.set(
            ((e.clientX - r.left) / r.width) * 2 - 1,
            (-(e.clientY - r.top) / r.height) * 2 + 1,
          )
          raycaster.setFromCamera(ndc, camera)
          const hit = raycaster.intersectObject(mesh, false)[0]
          return hit && hit.instanceId !== undefined ? hit.instanceId : -1
        }
        const onPointerMove = (e) => {
          hovered = pick(e)
          canvas.style.cursor = hovered >= 0 ? 'pointer' : ''
        }
        const onPointerDown = (e) => {
          const idx = pick(e)
          if (idx >= 0) launchDispatch(idx)
        }
        if (!reduced) {
          canvas.addEventListener('pointermove', onPointerMove, { passive: true })
          canvas.addEventListener('pointerdown', onPointerDown, { passive: true })
          cleanups.push(() => {
            canvas.removeEventListener('pointermove', onPointerMove)
            canvas.removeEventListener('pointerdown', onPointerDown)
          })
        }

        /* ── Mouse + scroll parallax ────────────────────────────── */
        let mx = 0
        let my = 0
        let tx = 0
        let ty = 0
        const onMouse = (e) => {
          tx = (e.clientX / window.innerWidth - 0.5) * 2
          ty = (e.clientY / window.innerHeight - 0.5) * 2
        }
        if (!reduced && window.matchMedia('(pointer: fine)').matches) {
          window.addEventListener('mousemove', onMouse, { passive: true })
          cleanups.push(() => window.removeEventListener('mousemove', onMouse))
        }

        let inView = true
        const io = new IntersectionObserver(([e]) => {
          inView = e.isIntersecting
        })
        io.observe(wrap)
        cleanups.push(() => io.disconnect())

        const ro = new ResizeObserver(() => {
          const w = wrap.clientWidth
          const h = wrap.clientHeight
          if (!w || !h) return
          camera.aspect = w / h
          camera.updateProjectionMatrix()
          renderer.setSize(w, h)
        })
        ro.observe(wrap)
        cleanups.push(() => ro.disconnect())

        const clock = new THREE.Clock()
        let elapsed = 0
        let nextDispatch = 2.2

        const renderFrame = (t) => {
          boxes.forEach((b, i) => {
            const isHover = i === hovered && b.hide === 0
            b.lift += ((isHover ? 1 : 0) - b.lift) * 0.14
            if (b.hide > 0 && !active.has(i)) b.hide = Math.max(0, b.hide - 0.02)

            const bob = reduced ? 0 : Math.sin(t * 0.7 + b.phase) * 0.055
            const s = b.s * (1 - b.hide) * (1 + b.lift * 0.12)
            dummy.position.set(b.x, b.y + bob + b.lift * 0.06, b.z + b.lift * 0.5)
            dummy.scale.setScalar(Math.max(s, 0.0001))
            dummy.rotation.set(0, 0, 0)
            dummy.updateMatrix()
            mesh.setMatrixAt(i, dummy.matrix)
          })
          mesh.instanceMatrix.needsUpdate = true

          for (let f = flights.length - 1; f >= 0; f--) {
            const fl = flights[f]
            fl.t += 1 / 95
            if (fl.t >= 1) {
              fl.ghost.visible = false
              active.delete(fl.idx)
              flights.splice(f, 1)
            } else {
              const p = fl.curve.getPoint(fl.t)
              fl.ghost.visible = true
              fl.ghost.position.copy(p)
              fl.ghost.rotation.y = fl.t * 1.4
              fl.ghost.scale.setScalar(fl.scale * (1 - fl.t * 0.55))
              fl.ghost.material.opacity = fl.t < 0.75 ? 1 : 1 - (fl.t - 0.75) * 4
            }
          }

          mx += (tx - mx) * 0.045
          my += (ty - my) * 0.045
          const scroll = window.scrollY * 0.00045
          group.rotation.y = -0.22 + mx * 0.1 + scroll * 0.4
          group.rotation.x = my * 0.05 + scroll * 0.25
          group.position.y = -scroll * 2.2

          renderer.render(scene, camera)
        }

        const loop = () => {
          raf = requestAnimationFrame(loop)
          if (!inView) return
          const dt = clock.getDelta()
          elapsed += dt
          if (!reduced && elapsed > nextDispatch) {
            launchRandom()
            nextDispatch = elapsed + 2.6 + Math.random() * 1.8
          }
          renderFrame(elapsed)
        }

        renderFrame(0)
        setReady(true)
        if (!reduced) loop()

        cleanups.push(() => {
          cancelAnimationFrame(raf)
          geo.dispose()
          mat.dispose()
          ghosts.forEach((g) => g.material.dispose())
          renderer.dispose()
          renderer.domElement.remove()
        })
      })
      .catch(() => {})

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      cleanups.forEach((f) => f())
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      data-cursor
      className={`hero__three ${ready ? 'is-ready' : ''}`}
    />
  )
}
