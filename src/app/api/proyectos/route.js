export async function GET() {
    const proyectos = [
        {
            id: "cuartoymita",
            titulo: "CuartoyMitá",
            descripcion: "Una web que refleja la esencia de Cuarto y Mitá, combinando un diseño cálido y una navegación fluida para ofrecer una experiencia acogedora en cualquier dispositivo. Pensada para transmitir su autenticidad y facilitar el acceso a su oferta gastronómica.",
            imagenDesktop: "/images/cuartoymita.png",
            imagenMobile: "/images/cuartoymita.png",
            tecnologias: {
                lenguaje: ["JavaScript"],
                ide: ["Visual Studio Code"],
                framework: ["Next.js"],
                entornoDesarrollo: ["Node.js"],
                librerias: ["React", "Framer Motion"],
                estilos: ["Tailwind CSS", "PostCSS", "Autoprefixer"],
                api: [],
                baseDatos: [],
                despliegue: ["Docker", "VPS"],
                orquestacion: [],
                controlVersiones: ["Git", "GitLab"],
                CI_CD: ["GitLab CI/CD"],
                seguridad: ["Helmet.js", "CORS", "JWT"],
                herramientasDev: ["ESLint", "Prettier", "Webpack", "Vite"],
                testing: ["Jest", "React Testing Library"],
                rendimiento: ["Lighthouse", "Bundle Analyzer"],
                accesibilidad: ["WAVE", "axe-core"],
                monitorizacion: []
            },
            caracteristicas: [
                "Desarrollo basado en React con estructura de componentes reutilizables",
                "Uso de una plantilla como base, adaptada y personalizada",
                "Diseño responsive adaptable a todos los dispositivos",
                "Optimización SEO para mayor visibilidad en Google",
                "Carga rápida gracias a optimización de recursos",
                "Gestión de estado y reactividad con React",
                "Integración de eventos y animaciones para mejorar la experiencia de usuario",
                "Código modular y estructurado para facilitar el mantenimiento",
                "Uso de buenas prácticas en HTML, CSS y JavaScript para accesibilidad",
                "Desplegado en un VPS con Docker"
            ],
            enlaces: {
                demo: "https://cuartoymita.com",
                repositorio: "https://github.com/usuario/cuartoymita",
            },
        },
        {
            id: "portfolio",
            titulo: "Portfolio Profesional",
            descripcion: "Un espacio donde presento mis proyectos de forma sencilla y directa, destacando cada desarrollo con un diseño limpio y accesible. Pensado para mostrar mi trabajo de manera profesional, sin distracciones y con una estructura clara.",
            imagenDesktop: "/images/portfolio.png",
            imagenMobile: "/images/portfolio.png",
            caracteristicas: [
                "Arquitectura basada en componentes reutilizables con React y Next.js",
                "Gestión de rutas con el App Router de Next.js y la segmentación de archivos en /app",
                "Interfaz dinámica con animaciones mediante Framer Motion",
                "Diseño responsive utilizando utilidades de Tailwind CSS",
                "Carga eficiente de imágenes y assets para optimización del rendimiento",
                "Código modular y limpio con buenas prácticas de desarrollo",
                "Uso de API en Next.js para obtener y gestionar la información de los proyectos",
                "Uso de ESLint y Prettier para mantener la calidad del código",
                "Despliegue automatizado en un VPS mediante Docker y GitLab CI/CD"
            ],
            tecnologias: {
                lenguaje: ["JavaScript"],
                ide: ["Visual Studio Code"],
                framework: ["Next.js"],
                entorno: ["Node.js"],
                librerias: ["React", "Framer Motion"],
                estilos: ["Tailwind CSS"],
                api: ["Next.js API Routes"],
                baseDatos: [],
                despliegue: ["Docker", "VPS"],
                orquestacion: ["Docker Compose"],
                controlVersiones: ["Git", "GitLab"],
                CI_CD: ["GitLab CI/CD"],
                seguridad: [],
                herramientasDev: ["ESLint", "Prettier"],
                testing: [],
                rendimiento: [],
                accesibilidad: [],
                monitorizacion: []
            },
            enlaces: {
                demo: "https://tominavel.com",
                repositorio: "https://github.com/usuario/tominavel"
            }
        },
        {
            id: "scanreport",
            titulo: "ScanReport",
            descripcion: "Aplicación web para generar informes de seguridad de forma rápida y automatizada. Analiza sitios web y direcciones IP ofreciendo reportes detallados. Pensado para facilitar auditorías y mejorar la ciberseguridad.",
            imagenDesktop: "/images/scanreport.png",
            imagenMobile: "/images/scanreport.png",
            caracteristicas: [
                "Aplicación basada en Django con estructura modular",
                "Generación de informes de seguridad de IPs, dominios y servidores",
                "Sistema de login y autenticación con Django",
                "Base de datos SQLite para almacenamiento de registros",
                "Servicios de análisis de seguridad implementados con Python",
                "Interfaz con plantillas HTML y estilos CSS personalizados",
                "Gestión de archivos estáticos mediante Django",
                "Despliegue en un VPS con Docker y WSGI"
            ],
            tecnologias: {
                lenguajes: ["Python", "JavaScript"],
                ide: ["PyCharm"],
                framework: ["Django"],
                entorno: ["WSGI", "Node.js"],
                librerias: ["Django ORM", "Jinja2", "jQuery"],
                estilos: ["CSS"],
                baseDatos: ["SQLite"],
                despliegue: ["Docker", "VPS"],
                orquestacion: [],
                controlVersiones: ["Git", "GitLab"],
                CI_CD: ["GitLab CI/CD"],
                seguridad: ["Django Auth"],
                herramientasDev: ["ESLint", "Prettier"],
                testing: ["PyTest"],
                rendimiento: [],
                accesibilidad: [],
                monitorizacion: []
            },
            enlaces: {
                demo: "http://scan.tominavel.com",
                repositorio: "https://gitlab.com/usuario/scanreport"
            }
        },
        {
            id: "puntoventacloud",
            titulo: "PuntoVentaCloud",
            descripcion: "Sistema integral diseñado para facilitar la administración de ventas en pequeños comercios y hostelería. Con una aplicación TPV y una API segura que ofrece un control eficiente y accesible desde cualquier dispositivo.",
            imagenDesktop: "/images/puntoventacloud.png",
            imagenMobile: "/images/puntoventacloud.png",
            caracteristicas: [
                "Aplicación de escritorio TPV en C# y .NET Core con WPF",
                "API REST en .NET Core con autenticación JWT",
                "Base de datos MySQL alojada en un VPS con Ubuntu Server",
                "Seguridad con SSL/TLS, Serilog, AspNetCoreRateLimit y políticas CORS",
                "Gestión de ventas, inventario y empleados en tiempo real",
                "Interfaz optimizada para puntos de venta en hostelería",
                "Sincronización en tiempo real entre la aplicación TPV y la base de datos",
                "Despliegue en VPS con Nginx como proxy inverso"
            ],
            tecnologias: {
                lenguajes: ["C#"],
                ide: ["Visual Studio"],
                framework: [".NET Core"],
                entorno: ["Ubuntu Server", "Nginx"],
                librerias: ["Entity Framework"],
                estilos: ["Material Design"],
                baseDatos: ["MySQL"],
                despliegue: ["VPS", "Nginx"],
                orquestacion: [],
                controlVersiones: ["Git"],
                CI_CD: [],
                seguridad: ["JWT", "SSL/TLS", "Serilog", "AspNetCoreRateLimit"],
                herramientasDev: ["MobaXterm"],
                testing: ["xUnit"],
                rendimiento: [],
                accesibilidad: [],
                monitorizacion: []
            },
            enlaces: {
                demo: "https://tominavel.com/downloads/PVC.rar",
                repositorio: "https://gitlab.com/usuario/puntoventacloud"
            }
        },
        {
            id: "pvc-movil",
            titulo: "PVCMovil",
            descripcion: "La aplicación móvil de PuntoVentaCloud, para gestionar ventas y registros de forma rápida y sencilla, permitiendo acceso ágil a la información desde cualquier lugar.",
            imagenDesktop: "/images/pvcmovil.png",
            imagenMobile: "/images/pvcmovil.png",
            caracteristicas: [
                "Aplicación móvil en Kotlin con Jetpack Compose",
                "Consulta en tiempo real de ventas, cierres de caja y accesos",
                "Integración con la API REST de PuntoVentaCloud",
                "Autenticación segura con JWT",
                "Gestión de usuarios y permisos basada en roles",
                "Interfaz moderna y optimizada con Material Design",
                "Seguridad en las conexiones mediante SSL/TLS",
                "Uso de Retrofit para comunicación con la API"
            ],
            tecnologias: {
                lenguajes: ["Kotlin"],
                ide: ["Android Studio"],
                framework: ["Jetpack Compose"],
                entorno: ["Android"],
                librerias: ["Retrofit", "Room", "Jetpack Navigation"],
                estilos: ["Material Design"],
                baseDatos: [],
                despliegue: ["APK distribuido"],
                orquestacion: [],
                controlVersiones: ["Git"],
                CI_CD: [],
                seguridad: ["JWT", "SSL/TLS"],
                herramientasDev: [],
                testing: ["JUnit"],
                rendimiento: [],
                accesibilidad: [],
                monitorizacion: []
            },
            enlaces: {
                demo: "https://tominavel.com/downloads/pvcmovil.apk",
                repositorio: "https://gitlab.com/usuario/pvc-movil"
            }
        }
    ];

    return Response.json(proyectos);
}
