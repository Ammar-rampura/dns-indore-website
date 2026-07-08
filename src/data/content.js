/**
 * ─────────────────────────────────────────────────────────────────
 *  CENTRAL CONTENT FILE — ALL MOCK DATA LIVES HERE
 *  Replace the placeholder values below with real company data.
 *  No component code needs to change.
 * ─────────────────────────────────────────────────────────────────
 */

export const company = {
  name: 'Godrej DNS',
  legalName: 'DNS Logistics & Warehousing Pvt. Ltd.', // MOCK — replace
  tagline: 'Authorized CFA & Warehousing Partner — Godrej',
  established: 2003, // MOCK
  headline: 'Precision Warehousing. Reliable Distribution.',
  subheadline:
    'For over two decades, we have operated as a trusted Carrying & Forwarding Agent for Godrej — moving thousands of shipments every month with enterprise-grade accuracy, safety and speed.',
  phone: '+91 98765 43210', // MOCK
  phoneAlt: '+91 731 400 1234', // MOCK
  email: 'operations@godrejdns.in', // MOCK
  address: {
    line1: 'Plot 42–45, Sector C, Industrial Area', // MOCK
    line2: 'Pithampur, Dhar District',
    city: 'Indore, Madhya Pradesh — 454775',
    country: 'India',
  },
  hours: 'Mon – Sat · 8:00 AM – 8:00 PM',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Pithampur+Industrial+Area+Indore&output=embed', // MOCK — replace with exact plus-code / place link
  social: {
    linkedin: '#', // MOCK
    facebook: '#',
    instagram: '#',
  },
}

/* ── Operations at a Glance — animated counters ─────────────────── */
export const stats = [
  { value: 22, suffix: '+', label: 'Years of Experience', sub: 'Serving Godrej since 2003' },
  { value: 185000, suffix: ' sq.ft.', label: 'Warehouse Space', sub: 'Across 3 dedicated facilities', compact: true },
  { value: 1200, suffix: '+', label: 'Daily Dispatches', sub: 'Invoices processed per day' },
  { value: 32000, suffix: '+', label: 'Monthly Shipments', sub: 'Primary & secondary movement', compact: true },
  { value: 240, suffix: '+', label: 'Trained Employees', sub: 'Warehouse, QC & admin staff' },
  { value: 99.7, suffix: '%', label: 'Order Accuracy', sub: 'FIFO / batch-controlled picking', decimals: 1 },
]

/* ── Hero quick-stat chips ──────────────────────────────────────── */
export const heroStats = [
  { value: '1.85L', label: 'sq.ft. warehousing' },
  { value: '1,200+', label: 'dispatches / day' },
  { value: '99.7%', label: 'order accuracy' },
]

/* ── About Us ───────────────────────────────────────────────────── */
export const about = {
  eyebrow: 'Who We Are',
  title: 'A distribution backbone built on two decades of trust',
  paragraphs: [
    'Godrej DNS began operations in 2003 as an authorized Carrying & Forwarding Agent, handling primary distribution for Godrej Consumer Products across Central India. What started as a single 20,000 sq.ft. godown is today a multi-facility logistics operation moving over 32,000 shipments a month.', // MOCK
    'We combine disciplined warehouse management — FIFO stock rotation, batch tracking, cycle counts — with a modern fleet network and a team that treats every carton like it carries our own name. That is why our principal partners have renewed with us, year after year, for over two decades.',
  ],
  pillars: [
    { title: 'Integrity First', text: 'Zero-tolerance policy on stock discrepancies with full audit transparency.' },
    { title: 'Godrej-Grade SOPs', text: 'Operations aligned to principal company SOPs, safety and compliance norms.' },
    { title: 'People-Powered', text: '240+ trained staff with structured induction and safety certification.' },
  ],
  signatory: { name: 'Rajesh Nagar', role: 'Managing Director' }, // MOCK
}

/* ── Company timeline — MOCK milestones, shown in About ─────────── */
export const milestones = [
  { year: '2003', text: 'Appointed Godrej CFA — first 20,000 sq.ft. godown' },
  { year: '2010', text: 'Second facility opens; appliances division added' },
  { year: '2016', text: 'SAP-integrated billing & barcode picking go live' },
  { year: '2021', text: 'Third facility — 1,85,000 sq.ft. total capacity' },
  { year: '2025', text: '32,000+ shipments moved every single month' },
]

/* ── Live-operations ticker — MOCK dispatch events ──────────────── */
export const dispatchTicker = [
  'LR #48213 → Bhopal · departed 06:40',
  'LR #48214 → Indore City · delivered 09:12',
  'GRN #7731 · 412 cartons inward · Facility 1',
  'LR #48215 → Nagpur · in transit',
  'Cycle count · Rack D2 · 100% match',
  'LR #48216 → Ujjain · departed 11:05',
  'POD #48188 · Gwalior · claim settled same day',
  'LR #48217 → Jabalpur · e-way bill generated',
]

/* ── Services ───────────────────────────────────────────────────── */
export const services = [
  {
    icon: 'warehouse',
    title: 'CFA Operations',
    text: 'End-to-end carrying & forwarding for principal companies — receiving, storage, invoicing, dispatch and claims settlement under one disciplined roof.',
  },
  {
    icon: 'boxes',
    title: 'Warehousing & Storage',
    text: '1.85 lakh sq.ft. of racked, ventilated and pest-controlled space with dedicated zones for FMCG, appliances and high-value SKUs.',
  },
  {
    icon: 'truck',
    title: 'Primary & Secondary Distribution',
    text: 'Scheduled line-hauls and last-mile beat plans covering 450+ distributors and direct dealers across the region.',
  },
  {
    icon: 'clipboard',
    title: 'Inventory Management',
    text: 'FIFO / FEFO rotation, batch & expiry tracking, daily stock reconciliation and monthly physical audits with 99.7% accuracy.',
  },
  {
    icon: 'document',
    title: 'Billing & Documentation',
    text: 'SAP / DMS-integrated invoicing, e-way bills, GST-compliant documentation and same-day claim processing.',
  },
  {
    icon: 'shield',
    title: 'Safety & Compliance',
    text: 'Fire-suppression systems, insured stock handling, CCTV-monitored premises and full statutory compliance.',
  },
]

/* ── Infrastructure ─────────────────────────────────────────────── */
export const infrastructure = {
  eyebrow: 'Infrastructure',
  title: 'Facilities engineered for scale, safety and speed',
  intro:
    'Every square foot of our warehousing network is designed around one goal — getting stock in, stored and shipped without error.',
  image:
    'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=70',
  imageAlt: 'Racked warehouse aisles with palletized stock',
  features: [
    'Three facilities totalling 1,85,000 sq.ft. of covered storage', // MOCK
    'Heavy-duty selective racking — 12,500+ pallet positions',
    '14 hydraulic dock levellers for simultaneous loading',
    'CCTV surveillance with 90-day recording & 24×7 security',
    'Fire hydrant network, smoke detectors & sprinkler zones',
    'Dedicated cold-safe and high-value caged storage areas',
  ],
  specs: [
    { label: 'Total Covered Area', value: '1,85,000 sq.ft.' },
    { label: 'Pallet Positions', value: '12,500+' },
    { label: 'Loading Docks', value: '14 bays' },
    { label: 'MHE Fleet', value: '9 forklifts · 22 hand pallet trucks' },
    { label: 'Power Backup', value: '250 kVA DG sets' },
    { label: 'Clear Height', value: '11 metres' },
  ],
}

/* ── Brands / Companies We Serve ────────────────────────────────── */
export const brands = [
  { name: 'Godrej Consumer Products', short: 'GCPL' },
  { name: 'Godrej Appliances', short: 'Appliances' },
  { name: 'Godrej Interio', short: 'Interio' },
  { name: 'Godrej Locks', short: 'Locks' },
  { name: 'Godrej Security Solutions', short: 'Security' },
  { name: 'Godrej Agrovet', short: 'Agrovet' },
  { name: 'Godrej Aer', short: 'Aer' },
  { name: 'Godrej Hershey', short: 'Hershey' },
]

/* ── Why Choose Us ──────────────────────────────────────────────── */
export const whyUs = [
  {
    icon: 'medal',
    title: '22 Years, One Principal',
    text: 'Uninterrupted CFA partnership with Godrej since 2003 — a track record very few agencies can claim.',
  },
  {
    icon: 'target',
    title: '99.7% Dispatch Accuracy',
    text: 'Barcode-assisted picking and double-verification gates keep shortages and damages near zero.',
  },
  {
    icon: 'clock',
    title: 'Same-Day Order Processing',
    text: 'Orders received before 2 PM are invoiced, picked and dispatched the same day — every day.',
  },
  {
    icon: 'network',
    title: '450+ Distributor Network',
    text: 'Established beat plans and transporter tie-ups across Madhya Pradesh and adjoining states.',
  },
  {
    icon: 'chart',
    title: 'Full Digital Visibility',
    text: 'SAP/DMS integration, daily MIS reports and live stock dashboards for principal companies.',
  },
  {
    icon: 'handshake',
    title: 'Audit-Ready, Always',
    text: 'Clean statutory record — GST, labour, fire & insurance compliance maintained continuously.',
  },
]

/* ── Process / Workflow ─────────────────────────────────────────── */
export const processSteps = [
  {
    step: '01',
    title: 'Inward & GRN',
    text: 'Vehicles docked, stock unloaded against STN, physically verified and GRN posted in SAP within 4 hours.',
  },
  {
    step: '02',
    title: 'Put-Away & Storage',
    text: 'Palletized stock moved to mapped rack locations with batch, MRP and expiry captured at bin level.',
  },
  {
    step: '03',
    title: 'Order & Invoicing',
    text: 'Distributor orders validated against credit & schemes, invoiced with e-way bills auto-generated.',
  },
  {
    step: '04',
    title: 'Picking & QC',
    text: 'FIFO-driven pick lists executed and double-checked at the verification gate before packing.',
  },
  {
    step: '05',
    title: 'Dispatch & Delivery',
    text: 'Route-optimized loading, LR generation and GPS-tracked transit to 450+ delivery points.',
  },
  {
    step: '06',
    title: 'POD & Reconciliation',
    text: 'Proof of delivery collected, claims settled and daily stock reconciliation reported to principals.',
  },
]

/* ── Gallery — replace URLs with real facility photos ───────────── */
export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=70',
    caption: 'Racked storage — Facility 1, Pithampur',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=70',
    caption: 'Inventory verification in progress',
  },
  {
    src: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=900&q=70',
    caption: 'Dispatch fleet at loading bays',
  },
  {
    src: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=900&q=70',
    caption: 'Container yard operations',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=70',
    caption: 'Palletized outbound staging',
  },
  {
    src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=70',
    caption: 'Line-haul departure — night shift',
  },
]

/* ── Testimonials ───────────────────────────────────────────────── */
export const testimonials = [
  {
    quote:
      'DNS has been our most dependable CFA in the western region. Stock accuracy is consistently above 99.5% and their claim settlement is the fastest we track across all agencies.',
    name: 'Amit Deshpande', // MOCK
    role: 'Regional Logistics Head, Godrej Consumer Products',
  },
  {
    quote:
      'Order-to-dispatch turnaround is exceptional. Even during festive peak loads of 2,000+ invoices a day, service levels never dropped. Their team simply does not miss.',
    name: 'Priya Raghavan', // MOCK
    role: 'Zonal Sales Manager, Godrej Appliances',
  },
  {
    quote:
      'As a distributor for 15 years, I have never had a delivery dispute that took more than a day to resolve. Documentation is always clean and vehicles always arrive on schedule.',
    name: 'Suresh Khandelwal', // MOCK
    role: 'Distributor Partner, Indore',
  },
]

/* ── FAQ ────────────────────────────────────────────────────────── */
export const faqs = [
  {
    q: 'What areas do you cover for distribution?',
    a: 'We handle primary and secondary distribution across Madhya Pradesh and adjoining districts of Rajasthan and Maharashtra, serving 450+ distributors and direct dealers through scheduled beat plans and dedicated line-hauls.',
  },
  {
    q: 'What is your order-to-dispatch turnaround time?',
    a: 'Orders received before 2:00 PM are invoiced, picked, quality-checked and dispatched the same day. Orders after cut-off are dispatched by the next morning line-haul.',
  },
  {
    q: 'How is stock accuracy maintained?',
    a: 'We follow FIFO/FEFO rotation with batch-level bin mapping, daily cycle counts, barcode-assisted picking and a double-verification gate before loading. Monthly physical audits are reconciled with SAP.',
  },
  {
    q: 'Is stored stock insured?',
    a: 'Yes. All stock is covered under comprehensive transit and storage insurance, and our facilities meet fire-safety norms with hydrant networks, sprinklers and 24×7 monitored surveillance.',
  },
  {
    q: 'Can you integrate with our ERP or DMS?',
    a: 'Our operations already run on SAP and standard DMS platforms used by principal companies. We provide daily MIS, live stock reports and API/portal-based visibility as required.',
  },
  {
    q: 'Do you handle appliance and high-value cargo?',
    a: 'Yes. We operate dedicated zones for appliances and high-value SKUs with caged storage, specialized handling equipment and trained crews for fragile-goods movement.',
  },
]

/* ── Navigation ─────────────────────────────────────────────────── */
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'operations', label: 'Operations' },
  { id: 'process', label: 'Process' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]
