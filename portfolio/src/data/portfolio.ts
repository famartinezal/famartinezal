export const personal = {
  name: 'Fredy Martínez',
  initials: 'FM',
  role: 'Científico de Datos & Desarrollador',
  tagline: 'Procesamiento de imágenes radar, machine learning aplicado al agro y software que transforma datos en decisiones.',
  bio: 'Trabajo en la intersección entre teledetección, machine learning y desarrollo de software. Mi foco principal es el análisis de cultivos de arroz en Colombia usando imágenes SAR y Google Earth Engine. Construyo pipelines de datos robustos y visualizaciones que comunican resultados complejos con claridad.',
  location: 'Colombia · Remoto disponible',
  email: 'fredy@example.com',
  github: 'https://github.com/famartinezal',
  linkedin: 'https://linkedin.com/in/famartinezal',
  available: true,
};

export const projects = [
  {
    id: 1,
    title: 'Monitor de Arroz SAR',
    description: 'Sistema de monitoreo nacional de cultivos de arroz usando imágenes Sentinel-1. Detecta fenología y estima áreas sembradas con ML sobre Google Earth Engine.',
    tags: ['Python', 'Google Earth Engine', 'Sentinel-1', 'scikit-learn'],
    demo: '#',
    github: 'https://github.com/famartinezal',
    featured: true,
    year: '2024',
  },
  {
    id: 2,
    title: 'Pipeline Fenología SAR',
    description: 'Pipeline automatizado para identificar etapas fenológicas de cultivos a partir de series de tiempo de backscatter radar con análisis temporal multitemporal.',
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    demo: '#',
    github: 'https://github.com/famartinezal',
    featured: true,
    year: '2024',
  },
  {
    id: 3,
    title: 'Dashboard Estadísticas Agrícolas',
    description: 'Plataforma de visualización interactiva para estadísticas de producción agrícola nacional. Integra datos geoespaciales con reportes automáticos.',
    tags: ['Python', 'Streamlit', 'Plotly', 'GeoPandas'],
    demo: '#',
    github: 'https://github.com/famartinezal',
    featured: true,
    year: '2023',
  },
  {
    id: 4,
    title: 'Clasificador de Cultivos ML',
    description: 'Modelo de clasificación supervisada para distinguir tipos de cultivos a partir de stacks multitemporales de imágenes radar y ópticas.',
    tags: ['Python', 'Random Forest', 'TensorFlow', 'GDAL'],
    demo: '#',
    github: 'https://github.com/famartinezal',
    featured: false,
    year: '2023',
  },
  {
    id: 5,
    title: 'GEE Script Collection',
    description: 'Librería de scripts reutilizables para procesamiento de imágenes SAR en Google Earth Engine: filtros speckle, índices y exportación masiva.',
    tags: ['JavaScript', 'Google Earth Engine', 'SAR'],
    demo: '#',
    github: 'https://github.com/famartinezal',
    featured: false,
    year: '2022',
  },
  {
    id: 6,
    title: 'API Geoespacial REST',
    description: 'API para consulta y descarga de estadísticas geoespaciales de cultivos. Endpoints optimizados para análisis a escala nacional.',
    tags: ['FastAPI', 'PostGIS', 'Docker', 'PostgreSQL'],
    demo: '#',
    github: 'https://github.com/famartinezal',
    featured: false,
    year: '2022',
  },
];

export const skills = {
  cienciaDatos: [
    'Python', 'scikit-learn', 'TensorFlow', 'NumPy', 'Pandas',
    'Matplotlib', 'Jupyter',
  ],
  teledeteccion: [
    'Google Earth Engine', 'Sentinel-1 SAR', 'GDAL', 'QGIS',
    'GeoPandas', 'Rasterio',
  ],
  desarrollo: [
    'FastAPI', 'Streamlit', 'Docker', 'PostgreSQL',
    'PostGIS', 'Git', 'Linux',
  ],
};

export const experience = [
  {
    org: 'FEDEARROZ / Proyecto Nacional',
    role: 'Científico de Datos Geoespaciales',
    period: '2022 — Presente',
    desc: 'Desarrollo y mantenimiento del sistema de monitoreo satelital de arroz. Estadísticas de área sembrada a nivel municipal para Colombia.',
  },
  {
    org: 'Universidad — Investigación',
    role: 'Investigador en Teledetección',
    period: '2020 — 2022',
    desc: 'Identificación de fenología de cultivos con imágenes SAR multitemporales. Publicación de resultados y metodologías.',
  },
  {
    org: 'Consultoría Independiente',
    role: 'Analista Geoespacial',
    period: '2018 — 2020',
    desc: 'Proyectos de análisis de imágenes satelitales y herramientas para instituciones del sector agrícola colombiano.',
  },
];
