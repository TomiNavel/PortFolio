export async function GET() {
    const skills = [
        {
            icon: "RectangleGroupIcon",
            title: "Desarrollo Web y Frontend",
            children:
                "Creación de interfaces dinámicas y modernas con Next.js y React. Uso de Tailwind CSS, PostCSS, Autoprefixer y SCSS (Sass), con ESLint para mantener un código limpio.",
        },
        {
            icon: "CodeBracketIcon",
            title: "Desarrollo Software y Backend",
            children:
                "Experiencia en C#, Java, JavaScript y Python. Aplicación de buenas prácticas en programación orientada a objetos y desarrollo de arquitecturas eficientes en backend y escritorio.",
        },
        {
            icon: "BuildingLibraryIcon",
            title: "Frameworks y Librerías",
            children:
                "Uso de .NET (C#), Spring Boot (Java), Express.js (JavaScript) y FastAPI/Django (Python) para el desarrollo backend. Desarrollo frontend con Next.js y React.",
        },
        {
            icon: "DevicePhoneMobileIcon",
            title: "Desarrollo de Aplicaciones Móviles",
            children:
                "Desarrollo de apps nativas para Android con Kotlin y Jetpack Compose, integradas con APIs y bases de datos mediante Retrofit y Room.",
        },
        {
            icon: "ServerStackIcon",
            title: "Bases de Datos y Gestión de Datos",
            children:
                "Manejo de SQL y T-SQL en MySQL, SQL Server, Oracle y SQLite. Diseño de bases de datos y optimización de consultas.",
        },
        {
            icon: "CommandLineIcon",
            title: "Administración de Sistemas",
            children:
                "Configuración y gestión de servicios en Linux y Windows, incluyendo SSH, FTP, DHCP, HTTP, DNS y entornos de servidor.",
        },
        {
            icon: "FolderOpenIcon",
            title: "Control de Versiones y DevOps",
            children:
                "Uso de Git para control de versiones en proyectos colaborativos. Gestión de pipelines en GitLab CI/CD.",
        },
        {
            icon: "CubeTransparentIcon",
            title: "Contenedores y Virtualización",
            children:
                "Despliegue de aplicaciones con Docker y Kubernetes. Gestión de entornos virtualizados con VMware y VirtualBox.",
        },
        {
            icon: "CloudIcon",
            title: "Servicios en la Nube",
            children:
                "Conocimientos en AWS y Azure para la gestión y despliegue de aplicaciones en la nube.",
        },
        {
            icon: "ShieldCheckIcon",
            title: "Seguridad Informática",
            children:
                "Análisis de vulnerabilidades y seguridad en redes y servidores. Experiencia con herramientas como Nmap, Wireshark, Metasploit y Nessus.",
        },
    ];

    return Response.json(skills);
}