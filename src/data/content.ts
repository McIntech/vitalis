export const NAV_LINKS = [
  { href: '#producto', label: 'Producto' },
  { href: '#ciencia', label: 'Ciencia' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
] as const

export const VALUE_PROPS = [
  {
    title: 'Calidad farmacéutica',
    body: 'Cada lote auditado bajo norma GMP, con certificado de análisis disponible al instante para tu equipo médico.',
    icon: 'shield',
  },
  {
    title: 'Trazabilidad total',
    body: 'Cadena de suministro verificada de origen a entrega. Sin intermediarios opacos, sin compromisos.',
    icon: 'molecule',
  },
  {
    title: 'Servicio confidencial',
    body: 'Atención personalizada, asesoría 1 a 1 con farmacéuticos titulados y entregas discretas a domicilio.',
    icon: 'leaf',
  },
] as const

export const PRODUCTS = [
  {
    name: 'Línea Cardio',
    tag: 'Cardiovascular',
    description:
      'Formulaciones de liberación controlada para hipertensión y perfil lipídico, optimizadas para adultos activos.',
  },
  {
    name: 'Línea Metabolik',
    tag: 'Metabólico',
    description: 'Soporte glucémico avanzado. Combinaciones farmacológicas y biodisponibilidad reforzada.',
  },
  {
    name: 'Línea Vita Sleep',
    tag: 'Neurológico',
    description: 'Inducción del sueño sin dependencia. Microdosis estudiadas, despertar limpio.',
  },
  {
    name: 'Línea Inmuno',
    tag: 'Defensas',
    description: 'Inmunomoduladores y antivirales de primera línea para temporadas críticas.',
  },
] as const

export const SCIENCE_PILLARS = [
  {
    label: 'Materias primas',
    value: '99.9%',
    detail: 'pureza certificada por HPLC en cada importación',
  },
  {
    label: 'Tiempo de respuesta',
    value: '24 h',
    detail: 'entrega en Monterrey, CDMX y Guadalajara',
  },
  {
    label: 'Auditorías',
    value: '3 anuales',
    detail: 'COFEPRIS, ISO 9001 y auditor independiente',
  },
  {
    label: 'Farmacéuticos',
    value: '12 titulados',
    detail: 'acompañamiento clínico a pacientes y médicos',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'La trazabilidad de Vitalis nos permite recetar con tranquilidad. Es el estándar que la medicina premium en México estaba esperando.',
    name: 'Dra. Mariana Solís',
    role: 'Internista, Hospital Zambrano Hellion',
  },
  {
    quote:
      'Más que un proveedor: un socio clínico. La asesoría farmacéutica eleva la experiencia de mis pacientes VIP.',
    name: 'Dr. Andrés Cárdenas',
    role: 'Cardiólogo, Práctica privada',
  },
] as const
