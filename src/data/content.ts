export const NAV_LINKS = [
  { href: '#porque', label: 'Por qué Vitalis' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#faq', label: 'FAQ' },
] as const

export const PARTNER_LOGOS = [
  'Farmacia San Pablo',
  'Botica Veracruz',
  'Salud+ Express',
  'Centro Médico Águila',
  'Dr. Genérico',
  'Más Salud',
  'Farmasalud Pro',
  'Hospital Real',
  'Red MediPlus',
  'Farmacias del Sol',
  'Botica La Esquina',
  'Clínica Norte',
] as const

export const VALUE_PROPS = [
  {
    title: 'Margen competitivo',
    body: 'Hasta 22% mejores precios que el promedio mayorista. Listas netas, sin letras chiquitas.',
    icon: 'chart',
    accent: 'coral',
  },
  {
    title: 'Catálogo profundo',
    body: '+12,000 SKUs activos: patente, genérico intercambiable, controlados y especializados.',
    icon: 'package',
    accent: 'teal',
  },
  {
    title: 'Logística 24/48h',
    body: 'Reposición express en 32 estados. Cadena de frío validada bajo norma GDP.',
    icon: 'truck',
    accent: 'primary',
  },
  {
    title: 'Crédito sin papeleo',
    body: 'Línea hasta $500,000 MXN con respuesta en 48h. Términos a 30 o 60 días.',
    icon: 'credit',
    accent: 'accent',
  },
] as const

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Te registras',
    body: '5 minutos en línea. RFC, cédula de farmacia y listo — sin visitas, sin papeleo.',
  },
  {
    step: '02',
    title: 'Cotizas en plataforma',
    body: 'Lista personalizada con tus precios netos, descuentos por volumen y promociones activas.',
  },
  {
    step: '03',
    title: 'Surtimos tu pedido',
    body: 'Doble validación COFEPRIS, cadena de frío monitoreada y empaque con sello de seguridad.',
  },
  {
    step: '04',
    title: 'Llega a tu farmacia',
    body: 'Entrega 24-48h en 32 estados, con seguro de carga y rastreo en tiempo real.',
  },
] as const

export const CATALOG = [
  {
    name: 'Patente',
    tag: 'Fabricante oficial',
    description: 'Marcas registradas directo del laboratorio. Roche, Bayer, Pfizer, Sanofi y más.',
    color: 'primary',
  },
  {
    name: 'Genéricos GI',
    tag: 'Intercambiables',
    description: 'Bioequivalencia certificada COFEPRIS. Margen 18-30% mayor que la patente.',
    color: 'teal',
  },
  {
    name: 'Controlados',
    tag: 'Grupos II-V',
    description: 'Receta, libro de control y trazabilidad COFEPRIS — gestionados sin fricción.',
    color: 'violet',
  },
  {
    name: 'Especializados',
    tag: 'Oncología & biológicos',
    description: 'Terapias dirigidas, oncológicos, hormonales. Cadena de frío 2-8 °C garantizada.',
    color: 'coral',
  },
  {
    name: 'OTC & Consumo',
    tag: 'Mostrador',
    description: 'Vitamínicos, analgésicos, dispositivos médicos y suplementos de alta rotación.',
    color: 'accent',
  },
  {
    name: 'Cadena de frío',
    tag: 'Biológicos',
    description: 'Vacunas, insulinas, biológicos. Termoregistradores activos en cada caja.',
    color: 'primary',
  },
] as const

export const STATS = [
  { value: 850, suffix: '+', label: 'Farmacias activas', sub: 'Pedidos cada mes' },
  { value: 32, suffix: '', label: 'Estados con cobertura', sub: 'Toda la república' },
  { value: 12000, suffix: '+', label: 'SKUs en catálogo', sub: 'Patente · GI · OTC' },
  { value: 24, suffix: 'h', label: 'Tiempo de entrega', sub: 'Promedio nacional' },
  { value: 99.4, suffix: '%', label: 'Tasa de cumplimiento', sub: 'Pedidos sin incidente' },
  { value: 18, suffix: '%', label: 'Margen promedio', sub: 'Reportado por clientes' },
] as const

export const COVERAGE_HUBS = [
  { city: 'Monterrey', tag: 'HQ + CEDIS Norte', zone: 'NL · Coah · Tamps' },
  { city: 'Ciudad de México', tag: 'CEDIS Centro', zone: 'CDMX · Edomex · Mor' },
  { city: 'Guadalajara', tag: 'CEDIS Occidente', zone: 'Jal · Col · Mich' },
  { city: 'Mérida', tag: 'CEDIS Sureste', zone: 'Yuc · QRoo · Camp' },
  { city: 'Tijuana', tag: 'CEDIS Pacífico', zone: 'BC · BCS · Son' },
  { city: 'Puebla', tag: 'CEDIS Sur', zone: 'Pue · Tlax · Ver' },
  { city: 'León', tag: 'CEDIS Bajío', zone: 'Gto · Qro · SLP' },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'Cambiamos 3 distribuidores en 2 años. Con Vitalis llevamos 18 meses sin un solo retraso, y el portal nos ahorra horas en cotización.',
    name: 'Lic. Hugo Mendoza',
    role: 'Propietario, Farmacias Águila (6 sucursales)',
    location: 'Monterrey, N.L.',
  },
  {
    quote:
      'El crédito a 30 días sin garantía hipotecaria fue lo que nos convenció. Y el margen subió 14% sin tocar el precio al cliente.',
    name: 'Andrea Torres',
    role: 'Gerente de Compras, Red Salud+ (28 sucursales)',
    location: 'Guadalajara, Jal.',
  },
  {
    quote:
      'Su línea de cadena de frío es la única en la que confiamos para nuestros biológicos y oncológicos. Los termoregistradores son un game-changer.',
    name: 'Dr. Patricio Vela',
    role: 'Director Médico, Hospital Real',
    location: 'Ciudad de México',
  },
] as const

export const FAQ_ITEMS = [
  {
    q: '¿Cuál es el pedido mínimo?',
    a: '$5,000 MXN. Sin máximo. Descuentos por volumen a partir de $50,000 MXN por orden.',
  },
  {
    q: '¿Manejan crédito?',
    a: 'Sí. Línea hasta $500,000 MXN, términos a 30 o 60 días. Respuesta en 48h sin garantía hipotecaria para clientes con historial limpio.',
  },
  {
    q: '¿Cubren todo México?',
    a: 'Sí, los 32 estados desde 7 centros de distribución (Monterrey, CDMX, Guadalajara, Mérida, Tijuana, Puebla y León). Entrega 24-48h.',
  },
  {
    q: '¿Cómo aseguran la cadena de frío?',
    a: 'Termoregistradores activos en cada caja, empaques calificados GDP, validación 2-8 °C punto a punto, y seguro de carga incluido sin costo.',
  },
  {
    q: '¿Cómo me registro?',
    a: 'Llena el formulario en línea (5 minutos), sube RFC y cédula de farmacia, agenda una llamada de bienvenida y comienza a comprar el mismo día.',
  },
  {
    q: '¿Manejan controlados grupos II-V?',
    a: 'Sí. Tu farmacia debe tener licencia sanitaria vigente y libro de control. Nosotros gestionamos la trazabilidad COFEPRIS de extremo a extremo.',
  },
] as const

export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@vitalis.mx',
    href: 'https://instagram.com/vitalis.mx',
    icon: 'instagram',
    color: 'coral',
  },
  {
    name: 'LinkedIn',
    handle: '/vitalis-mayorista',
    href: 'https://linkedin.com/company/vitalis-mayorista',
    icon: 'linkedin',
    color: 'primary',
  },
  {
    name: 'TikTok',
    handle: '@vitalismexico',
    href: 'https://tiktok.com/@vitalismexico',
    icon: 'tiktok',
    color: 'violet',
  },
  {
    name: 'Facebook',
    handle: '/vitalismx',
    href: 'https://facebook.com/vitalismx',
    icon: 'facebook',
    color: 'teal',
  },
  {
    name: 'WhatsApp',
    handle: '+52 81 0000 0000',
    href: 'https://wa.me/528100000000',
    icon: 'whatsapp',
    color: 'primary',
  },
  {
    name: 'YouTube',
    handle: '@vitalis-mayorista',
    href: 'https://youtube.com/@vitalis-mayorista',
    icon: 'youtube',
    color: 'coral',
  },
] as const
