/**
 * ─────────────────────────────────────────────────────────────────
 *  CENTRAL CONTENT FILE — ALL MOCK DATA LIVES HERE
 * ─────────────────────────────────────────────────────────────────
 */

export const company = {
  name: 'DNS International',
  legalName: 'DNS International',
  tagline: 'Delivering Trust. Driving Excellence',
  established: 1995,
  headline: 'Moving Businesses Forward with Reliable Logistics Since 1995.',
  subheadline:
    'A trusted logistics and transportation company established in 1995, specializing in Carrying & Forwarding, Logistics, and Road Transportation Services.',
  phone: '+91 98765 43210', 
  phoneAlt: '+91 731 400 1234', 
  email: 'operations@dnscnf.com', 
  address: {
    line1: 'Corporate Office', 
    line2: 'Logistics Park',
    city: 'Indore, Madhya Pradesh',
    country: 'India',
  },
  hours: 'Mon – Sat · 8:00 AM – 8:00 PM',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Indore&output=embed', 
  social: {
    linkedin: '#', 
    facebook: '#',
    instagram: '#',
  },
}

/* ── Operations at a Glance — animated counters ─────────────────── */
export const stats = [
  { value: 29, suffix: '+', label: 'Years of Experience', sub: 'Since 1995' },
  { value: 26, suffix: '+', label: 'Principal Companies', sub: 'Trusted by leading brands', compact: true },
  { value: 100, suffix: '%', label: 'Commitment to Excellence', sub: 'Operational transparency' },
  { value: 30, suffix: '+', label: 'Industries Supported', sub: 'FMCG, Pharma, Agrochemicals', compact: true },
]

/* ── Hero quick-stat chips ──────────────────────────────────────── */
export const heroStats = [
  { value: '1995', label: 'Established' },
  { value: '26+', label: 'Principal Companies' },
  { value: '100%', label: 'Commitment' },
]

/* ── About Us ───────────────────────────────────────────────────── */
export const about = {
  eyebrow: 'Who We Are',
  title: 'Nearly three decades of industry experience',
  paragraphs: [
    'DNS International is a trusted logistics and transportation company established in 1995. With nearly three decades of industry experience, we provide reliable, safe, and efficient supply-chain solutions tailored to our clients’ needs.',
    'We are backed by modern warehousing, experienced professionals, and a strong transportation network, with a commitment to operational excellence, transparency, customer satisfaction, dependable service, timely delivery, and long-term partnerships.',
  ],
  pillars: [
    { title: 'Operational Excellence', text: 'Dependable service and timely delivery.' },
    { title: 'Transparency', text: 'Commitment to customer satisfaction and long-term partnerships.' },
    { title: 'Modern Infrastructure', text: 'Supported by experienced professionals and strong transport networks.' },
  ],
  signatory: { name: 'Leadership', role: 'DNS International' }, 
}

/* ── Company timeline — Growth milestones ─────────── */
export const milestones = [
  { year: '1995', text: 'Established operations with our first principal partner.' },
  { year: '2004', text: 'Expanded logistics and carrying & forwarding network.' },
  { year: '2010', text: 'Scaled operations to support multiple leading national brands.' },
  { year: '2016', text: 'Enhanced modern warehousing and technology integration.' },
  { year: '2020', text: 'Expanded distribution capabilities across Central India.' },
  { year: '2026', text: 'Trusted by 26+ principal companies and growing.' },
]

/* ── Principal Companies (Logos) ─────────── */
export const principalCompanies = [
  { year: '1995', text: 'Heinz', logo: '/images/image1.png' },
  { year: '1996', text: 'Virbac (formerly Glaxo Veterinary)', logo: '/images/image2.png' },
  { year: '2004', text: 'Nutrigen', logo: '/images/image3.png' },
  { year: '2006', text: 'Desai Brothers', logo: '/images/image4.png' },
  { year: '2007', text: 'Naturo Foods', logo: '/images/image5.png' },
  { year: '2007', text: 'Bilt Paper', logo: '/images/image6.png' },
  { year: '2007', text: 'Dunlop Tyres', logo: '/images/image7.png' },
  { year: '2008', text: 'Chemenova', logo: '/images/image8.png' },
  { year: '2010', text: 'Nippon Paint', logo: '/images/image9.png' },
  { year: '2010', text: 'Amaraja', logo: '/images/image10.png' },
  { year: '2013', text: 'Hershey', logo: '/images/image11.png' },
  { year: '2014', text: 'Namdhari Seeds', logo: '/images/image12.png' },
  { year: '2015', text: 'Zytex', logo: '/images/image13.png' },
  { year: '2016', text: 'ICL', logo: '/images/image14.png' },
  { year: '2016', text: 'Jubilant', logo: '/images/image15.png' },
  { year: '2016', text: 'Prolaboratories Private Limited', logo: '/images/image16.png' },
  { year: '2018', text: 'Tranfarma', logo: '/images/image17.png' },
  { year: '2019', text: 'Wiekefield', logo: '/images/image18.png' },
  { year: '2020', text: 'Natural Fertilizer', logo: '/images/image19.png' },
  { year: '2023', text: 'Underwood', logo: '/images/image20.png' },
  { year: '2024', text: 'Hoescht', logo: '/images/image21.png' },
  { year: '2025', text: 'Mabsy', logo: '/images/image22.png' },
  { year: '2025', text: 'American Pharma Remedies', logo: '/images/image23.png' },
  { year: '2025', text: 'GNX Agro', logo: '/images/image24.png' },
  { year: '2025', text: 'JK Cement', logo: '/images/image25.png' },
  { year: '2026', text: 'Finozen Nutrigen', logo: '/images/image26.png' },
]

/* ── Live-operations ticker ──────────────── */
export const dispatchTicker = [
  'DNS International: Delivering Trust.',
  'Driving Excellence since 1995.',
  'Modern warehousing & storage operations.',
  'Reliable logistics and road transportation.',
]

/* ── Services ───────────────────────────────────────────────────── */
export const services = [
  {
    icon: 'warehouse',
    title: 'CFA Management',
    text: 'End-to-end carrying and forwarding for principal companies including receiving, storage, invoicing, dispatch, and claims settlement.',
  },
  {
    icon: 'boxes',
    title: 'Warehousing & Storage',
    text: 'Racked/palleted warehouses, ventilated and pest-controlled spaces, with dedicated zones for FMCG, appliances, and high-value SKUs.',
  },
  {
    icon: 'document',
    title: 'Billing & Documentation',
    text: 'SAP/DMS-integrated invoicing, e-way bills, GST-compliant documentation, and same-day claim processing.',
  },
  {
    icon: 'clipboard',
    title: 'Inventory Management',
    text: 'Batch and expiry tracking, daily stock reconciliation, and monthly physical audits.',
  },
  {
    icon: 'truck',
    title: 'Primary & Secondary Distribution',
    text: 'Comprehensive transportation covering all of Madhya Pradesh.',
  },
  {
    icon: 'shield',
    title: 'Safety & Compliance',
    text: 'Fire-suppression systems, insured stock handling, CCTV-monitored premises, and full statutory compliance.',
  },
]

/* ── Infrastructure ─────────────────────────────────────────────── */
export const infrastructure = {
  eyebrow: 'Infrastructure',
  title: 'Built for Safety, Scale and Efficiency',
  intro:
    'Our robust infrastructure guarantees that every shipment is stored securely and moved seamlessly.',
  image: '/image3.png',
  imageAlt: 'DNS International Warehouse Infrastructure',
  features: [
    'Heavy-duty lifts with 5–10 ton capacity',
    'Hydraulic lifts for swift operations',
    'Fire-compression & suppression systems',
    'Cold storage facilities',
    'CCTV surveillance for maximum security',
    'Power backup for continuous electricity supply',
  ],
  specs: [
    { label: 'Heavy Lifts', value: '5-10 Ton' },
    { label: 'Security', value: '24/7 CCTV' },
    { label: 'Safety', value: 'Fire-Compression' },
    { label: 'Storage', value: 'Cold Storage' },
    { label: 'Power', value: 'Backup Systems' },
    { label: 'Equipment', value: 'Hydraulic Lifts' },
  ],
}

/* ── Industries We Support (Replaces Brands) ────────────────────── */
export const brands = [
  { name: 'Food & FMCG', short: 'Food/FMCG' },
  { name: 'Beverages', short: 'Beverages' },
  { name: 'Healthcare & Pharmaceuticals', short: 'Pharma' },
  { name: 'Personal Care & Hygiene', short: 'Personal Care' },
  { name: 'Baby Care Products', short: 'Baby Care' },
  { name: 'Home Care & Cleaning Products', short: 'Home Care' },
  { name: 'Fabric Care & Laundry Products', short: 'Fabric Care' },
  { name: 'Animal Health & Veterinary Products', short: 'Vet Health' },
  { name: 'Animal Nutrition & Feed', short: 'Animal Feed' },
  { name: 'Agriculture & Agrochemicals', short: 'Agrochemicals' },
  { name: 'Industrial Chemicals', short: 'Chemicals' },
  { name: 'Paints & Coatings', short: 'Paints' },
  { name: 'Consumer Packaged Goods (CPG)', short: 'CPG' },
  { name: 'Retail & Distribution', short: 'Retail' },
]

/* ── Why Choose Us ──────────────────────────────────────────────── */
export const whyUs = [
  {
    icon: 'medal',
    title: 'Experience Since 1995',
    text: 'Trusted logistics and transportation company established in 1995 with nearly three decades of experience.',
  },
  {
    icon: 'target',
    title: 'Tailored Solutions',
    text: 'Providing reliable, safe, and efficient supply-chain solutions tailored to our clients’ needs.',
  },
  {
    icon: 'clock',
    title: 'Operational Excellence',
    text: 'A commitment to operational excellence, transparency, customer satisfaction, and dependable service.',
  },
  {
    icon: 'network',
    title: 'Strong Network',
    text: 'Backed by modern warehousing, experienced professionals, and a strong transportation network.',
  },
  {
    icon: 'chart',
    title: 'Timely Delivery',
    text: 'Dedicated to timely delivery and long-term partnerships with our principal companies.',
  },
  {
    icon: 'handshake',
    title: 'Comprehensive Coverage',
    text: 'Primary and secondary distribution covering all of Madhya Pradesh.',
  },
]

/* ── Process / Workflow ─────────────────────────────────────────── */
export const processSteps = [
  {
    step: '01',
    title: 'Inward & GRN',
    text: 'Vehicles docked, stock unloaded, physically verified and GRN posted efficiently.',
  },
  {
    step: '02',
    title: 'Put-Away & Storage',
    text: 'Palletized stock moved to mapped rack locations with batch and expiry tracking.',
  },
  {
    step: '03',
    title: 'Order & Invoicing',
    text: 'Orders validated, invoiced with e-way bills and GST-compliant documentation generated.',
  },
  {
    step: '04',
    title: 'Picking & QC',
    text: 'Batch-tracked pick lists executed and double-checked at the verification gate.',
  },
  {
    step: '05',
    title: 'Dispatch & Delivery',
    text: 'Route-optimized loading and distribution covering all of Madhya Pradesh.',
  },
  {
    step: '06',
    title: 'POD & Reconciliation',
    text: 'Proof of delivery collected, claims settled and physical audits reconciled.',
  },
]

/* ── Gallery ───────────── */
export const gallery = [
  { src: '/image1.png', caption: 'Operations Facility 1', tall: true },
  { src: '/image2.png', caption: 'Operations Facility 2' },
  { src: '/image3.png', caption: 'Operations Facility 3' },
  { src: '/image4.png', caption: 'Operations Facility 4', tall: true },
  { src: '/image5.png', caption: 'Operations Facility 5' },
  { src: '/image6.png', caption: 'Operations Facility 6' },
  { src: '/image7.png', caption: 'Operations Facility 7', tall: true },
  { src: '/image8.png', caption: 'Operations Facility 8' },
  { src: '/image2.png', caption: 'Operations Facility 9' },
]

/* ── Testimonials ───────────────────────────────────────────────── */
export const testimonials = [
  {
    quote: 'DNS International has provided unmatched CFA and logistics services for us for years. Their focus on safety, documentation, and compliance is exactly what we need.',
    name: 'Principal Company Partner',
    role: 'Logistics Division',
  },
  {
    quote: 'The warehousing infrastructure and material handling equipment are top-notch. Our stock is always secure and handled with precision.',
    name: 'Supply Chain Manager',
    role: 'FMCG Sector',
  },
  {
    quote: 'We value their transparent operations and zero-compromise attitude towards stock accuracy and timely deliveries across Madhya Pradesh.',
    name: 'Regional Distributor',
    role: 'Healthcare & Pharmaceuticals',
  },
]

/* ── FAQ ────────────────────────────────────────────────────────── */
export const faqs = [
  {
    q: 'What regions do you cover?',
    a: 'We manage comprehensive primary and secondary distribution covering all of Madhya Pradesh.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We support Food & FMCG, Beverages, Healthcare & Pharmaceuticals, Personal Care & Hygiene, Agriculture, Industrial Chemicals, and more.',
  },
  {
    q: 'What kind of infrastructure do you provide?',
    a: 'Our modern warehousing includes heavy-duty and hydraulic lifts, cold storage, fire-compression systems, CCTV surveillance, and full power backup.',
  },
  {
    q: 'How do you ensure stock safety and accuracy?',
    a: 'Through batch and expiry tracking, daily stock reconciliation, insured stock handling, and a zero-tolerance policy on discrepancies.',
  },
  {
    q: 'Do you offer CFA Management services?',
    a: 'Yes, we provide end-to-end carrying and forwarding for principal companies including receiving, storage, invoicing, dispatch, and claims settlement.',
  },
]

/* ── Navigation ─────────────────────────────────────────────────── */
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]
