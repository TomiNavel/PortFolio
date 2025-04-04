import type { Skill } from "@/types/types";

export async function GET() {
    const skills: Skill[] = [
        {
            icon: "RectangleGroupIcon",
            title: "Desarrollo Web y Frontend",
            description:
                "Diseño de interfaces dinámicas y modernas con Next.js y React. Estilización con Tailwind CSS, PostCSS y SCSS (Sass). Código limpio y estructurado con ESLint.",
        },
        {
            icon: "CodeBracketIcon",
            title: "Desarrollo Software y Backend",
            description:
                ".NET Core (C#), Spring Boot (Java), Node.js (JavaScript/TypeScript) y Django (Python). Principios de arquitectura escalable y buenas prácticas.",
        },
        {
            icon: "DevicePhoneMobileIcon",
            title: "Desarrollo de Aplicaciones Móviles",
            description:
                "Aplicaciones nativas para Android con Kotlin y Jetpack Compose. Desarrollo multiplataforma con React Native.",
        },
        {
            icon: "ServerStackIcon",
            title: "Bases de Datos y Gestión de Datos",
            description:
                "Gestión de bases de datos con MySQL, PostgreSQL y SQLite. Desarrollo con bases de datos NoSQL en MongoDB.",
        },
        {
            icon: "FolderOpenIcon",
            title: "Control de Versiones y DevOps",
            description:
                "Uso de Git para control de versiones en proyectos colaborativos. Gestión de pipelines con GitLab CI/CD.",
        },
        {
            icon: "CommandLineIcon",
            title: "Administración de Sistemas",
            description:
                "Configuración y gestión de servidores Linux y Windows, con administración de servicios de red, seguridad y virtualización.",
        },
        {
            icon: "CubeTransparentIcon",
            title: "Contenedores y Virtualización",
            description:
                "Despliegue de aplicaciones con Docker y Kubernetes. Gestión de entornos virtualizados con VMware.",
        },
        {
            icon: "CloudIcon",
            title: "Servicios en la Nube",
            description:
                "Administración de aplicaciones en entornos cloud. Gestión de servidores, almacenamiento y redes.",
        },
        {
            icon: "ShieldCheckIcon",
            title: "Seguridad Informática",
            description:
                "Análisis de vulnerabilidades y seguridad en redes y servidores. Experiencia con herramientas como Nmap, Wireshark, Metasploit o Nessus.",
        },
    ];

    return Response.json(skills);
}