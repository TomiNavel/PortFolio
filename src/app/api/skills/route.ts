import type { Skill } from '@/types/types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'es';

  const t = (es: string, en: string) => (lang === 'en' ? en : es);

  const skills: Skill[] = [
    {
      icon: 'RectangleGroupIcon',
      title: t('Desarrollo Web y Frontend', 'Web & Frontend Development'),
      description: t(
        'Diseño de interfaces dinámicas y modernas con Next.js y React. Estilización con Tailwind CSS, PostCSS y SCSS (Sass). Código limpio y estructurado con ESLint.',
        'Modern, dynamic interfaces with Next.js and React. Styling with Tailwind CSS, PostCSS, and SCSS. Clean, structured code with ESLint.'
      )
    },
    {
      icon: 'CodeBracketIcon',
      title: t('Desarrollo Software y Backend', 'Software & Backend Development'),
      description: t(
        '.NET Core (C#), Spring Boot (Java), Node.js (JavaScript/TypeScript) y Django (Python). Principios de arquitectura escalable y buenas prácticas.',
        '.NET Core (C#), Spring Boot (Java), Node.js (JavaScript/TypeScript), and Django (Python). Scalable architecture and good practices.'
      )
    },
    {
      icon: 'DevicePhoneMobileIcon',
      title: t('Desarrollo de Aplicaciones Móviles', 'Mobile App Development'),
      description: t(
        'Aplicaciones nativas para Android con Kotlin y Jetpack Compose. Desarrollo multiplataforma con React Native.',
        'Native Android apps with Kotlin and Jetpack Compose. Cross-platform development with React Native.'
      )
    },
    {
      icon: 'ServerStackIcon',
      title: t('Bases de Datos y Gestión de Datos', 'Databases & Data Management'),
      description: t(
        'Gestión de bases de datos con MySQL, PostgreSQL y SQLite. Desarrollo con bases de datos NoSQL en MongoDB.',
        'Database management with MySQL, PostgreSQL, and SQLite. NoSQL development with MongoDB.'
      )
    },
    {
      icon: 'FolderOpenIcon',
      title: t('Control de Versiones y DevOps', 'Version Control & DevOps'),
      description: t(
        'Uso de Git para control de versiones en proyectos colaborativos. Gestión de pipelines con GitLab CI/CD.',
        'Git for version control in collaborative projects. Pipeline management with GitLab CI/CD.'
      )
    },
    {
      icon: 'CommandLineIcon',
      title: t('Administración de Sistemas', 'Systems Administration'),
      description: t(
        'Configuración y gestión de servidores Linux y Windows, con administración de servicios de red, seguridad y virtualización.',
        'Configuration and management of Linux and Windows servers, including network services, security, and virtualization.'
      )
    },
    {
      icon: 'CubeTransparentIcon',
      title: t('Contenedores y Virtualización', 'Containers & Virtualization'),
      description: t(
        'Despliegue de aplicaciones con Docker y Kubernetes. Gestión de entornos virtualizados con VMware.',
        'Application deployment with Docker and Kubernetes. Managing virtual environments with VMware.'
      )
    },
    {
      icon: 'CloudIcon',
      title: t('Servicios en la Nube', 'Cloud Services'),
      description: t(
        'Administración de aplicaciones en entornos cloud. Gestión de servidores, almacenamiento y redes.',
        'Managing applications in cloud environments. Handling servers, storage, and networking.'
      )
    },
    {
      icon: 'ShieldCheckIcon',
      title: t('Seguridad Informática', 'Cybersecurity'),
      description: t(
        'Análisis de vulnerabilidades y seguridad en redes y servidores. Experiencia con herramientas como Nmap, Wireshark, Metasploit o Nessus.',
        'Vulnerability and network/server security analysis. Experience with tools like Nmap, Wireshark, Metasploit, or Nessus.'
      )
    }
  ];

  return Response.json(skills);
}
