export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "es";
  
    const t = (es: string, en: string) => (lang === "en" ? en : es);
  
    const proyectos = [
      {
        id: "cuartoymita",
        titulo: "CuartoyMitá",
        descripcion: t(
          "Sitio web que refleja la esencia de Cuarto y Mitá, combinando un diseño cálido y una navegación fluida para ofrecer una experiencia acogedora en cualquier dispositivo. Pensada para transmitir su autenticidad y accesible en cualquier dispositivo.",
          "A website that captures the essence of Cuarto y Mitá, blending a warm design with smooth navigation to deliver a welcoming experience on any device. Designed to reflect authenticity and usability across platforms."
        ),
        imagenDesktop: "/images/cuartoymita.png",
        imagenMobile: "/images/cuartoymita.png",
        tecnologias: {
          lenguaje: ["TypeScript"],
          ide: ["Visual Studio Code"],
          framework: ["Next.js"],
          entornoDesarrollo: ["Node.js"],
          librerias: ["React", "Framer Motion"],
          estilos: ["Tailwind CSS", "PostCSS", "Autoprefixer"],
          api: [],
          baseDatos: [],
          despliegue: ["Docker", "VPS"],
          orquestacion: [],
          controlVersiones: ["Git"],
          CI_CD: ["GitLab CI/CD"],
          seguridad: [],
          herramientasDev: ["ESLint", "Prettier"],
          testing: [],
          rendimiento: [],
          accesibilidad: [],
          monitorizacion: []
        },
        caracteristicas: [
          t("Interfaz moderna y responsive con React y Tailwind CSS.", "Modern and responsive UI with React and Tailwind CSS."),
          t("Optimización SEO y carga rápida para mejor rendimiento.", "SEO optimization and fast loading for better performance."),
          t("Estructura modular con componentes reutilizables.", "Modular structure with reusable components."),
          t("Desplegado con Docker en un VPS para mayor estabilidad.", "Deployed with Docker on a VPS for better stability."),
          t("Aplicación de buenas prácticas en accesibilidad y seguridad.", "Good practices in accessibility and security.")
        ],
        enlaces: {
          demo: "https://www.cuartoymita.com",
          repositorio: "https://github.com/TomiNavel/CuartoyMita"
        }
      },
      {
        id: "scanreport",
        titulo: "ScanReport",
        descripcion: t(
          "Aplicación web para generar informes de seguridad de forma rápida y automatizada. Analiza sitios web y direcciones IP ofreciendo reportes detallados. Pensado para facilitar auditorías y mejorar la ciberseguridad.",
          "Web app to generate security reports quickly and automatically. Analyzes websites and IPs, offering detailed results. Designed to simplify audits and enhance cybersecurity."
        ),
        imagenDesktop: "/images/scanreport.png",
        imagenMobile: "/images/scanreport.png",
        caracteristicas: [
          t("Aplicación basada en Django con estructura modular", "Django-based application with modular structure"),
          t("Generación de informes de seguridad de IPs, dominios y servidores", "Generates security reports for IPs, domains, and servers"),
          t("Sistema de login y autenticación con Django", "Login and authentication system with Django"),
          t("Base de datos SQLite para almacenamiento de registros", "SQLite database for record storage"),
          t("Servicios de análisis de seguridad implementados con Python", "Security analysis services implemented with Python"),
          t("Interfaz con plantillas HTML y estilos CSS personalizados", "Interface with HTML templates and custom CSS"),
          t("Gestión de archivos estáticos mediante Django", "Static file handling via Django"),
          t("Despliegue en un VPS con Docker y WSGI", "Deployed on VPS using Docker and WSGI")
        ],
        tecnologias: {
          lenguajes: ["Python", "JavaScript"],
          ide: ["PyCharm"],
          framework: ["Django"],
          entorno: ["WSGI", "Gunicorn"],
          librerias: ["Django ORM", "Jinja2", "jQuery"],
          estilos: ["CSS"],
          baseDatos: ["SQLite"],
          despliegue: ["Docker", "VPS"],
          orquestacion: [],
          controlVersiones: ["Git"],
          CI_CD: ["GitLab CI/CD"],
          seguridad: ["Django Auth"],
          herramientasDev: [],
          testing: ["PyTest"],
          rendimiento: [],
          accesibilidad: [],
          monitorizacion: []
        },
        enlaces: {
          demo: "http://scan.tominavel.com",
          repositorio: "https://github.com/TomiNavel/ScanReport"
        }
      },
      {
        id: "puntoventacloud",
        titulo: "PuntoVentaCloud",
        descripcion: t(
          "Sistema integral diseñado para facilitar la administración de ventas en pequeños comercios y hostelería. Con una aplicación TPV y una API segura que ofrece un control eficiente y accesible desde cualquier dispositivo.",
          "Integrated system designed to simplify sales management in small businesses and hospitality. Includes a POS app and secure API for efficient, accessible control on any device."
        ),
        imagenDesktop: "/images/puntoventacloud.png",
        imagenMobile: "/images/puntoventacloud.png",
        caracteristicas: [
          t("Aplicación de escritorio TPV en C# y .NET Core con WPF", "Desktop POS app in C# and .NET Core with WPF"),
          t("API REST en .NET Core con autenticación JWT", ".NET Core REST API with JWT authentication"),
          t("Base de datos MySQL alojada en un VPS con Ubuntu Server", "MySQL database hosted on a VPS with Ubuntu Server"),
          t("Seguridad con SSL/TLS, Serilog, AspNetCoreRateLimit y políticas CORS", "Security with SSL/TLS, Serilog, AspNetCoreRateLimit, and CORS policies"),
          t("Gestión de ventas, inventario y empleados en tiempo real", "Real-time management of sales, inventory, and staff"),
          t("Interfaz optimizada para puntos de venta en hostelería", "Interface optimized for hospitality POS"),
          t("Sincronización en tiempo real entre la aplicación TPV y la base de datos", "Real-time sync between POS app and database"),
          t("Despliegue en VPS con Nginx como proxy inverso", "Deployment on VPS with Nginx as reverse proxy")
        ],
        tecnologias: {
          lenguajes: ["C#"],
          ide: ["Visual Studio"],
          framework: [".NET Core"],
          entorno: [".NET SDK"],
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
          repositorio: "https://github.com/TomiNavel/PuntoVentaCloud"
        }
      },
      {
        id: "pvc-movil",
        titulo: "PVCMovil",
        descripcion: t(
          "La aplicación móvil de PuntoVentaCloud, para gestionar ventas y registros de forma rápida y sencilla, permitiendo acceso ágil a la información desde cualquier lugar.",
          "The mobile app for PuntoVentaCloud, designed to manage sales and logs quickly and easily, giving you fast access to information from anywhere."
        ),
        imagenDesktop: "/images/pvcmovil.png",
        imagenMobile: "/images/pvcmovil.png",
        caracteristicas: [
          t("Aplicación móvil en Kotlin con Jetpack Compose", "Mobile app in Kotlin using Jetpack Compose"),
          t("Consulta en tiempo real de ventas, cierres de caja y accesos", "Real-time sales, cash closure, and access consultation"),
          t("Integración con la API REST de PuntoVentaCloud", "Integration with PuntoVentaCloud REST API"),
          t("Autenticación segura con JWT", "Secure authentication with JWT"),
          t("Gestión de usuarios y permisos basada en roles", "User and role-based permission management"),
          t("Interfaz moderna y optimizada con Material Design", "Modern, optimized UI with Material Design"),
          t("Seguridad en las conexiones mediante SSL/TLS", "Secure connections with SSL/TLS"),
          t("Uso de Retrofit para comunicación con la API", "API communication using Retrofit")
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
          demo: "/downloads/pvcmovil.apk",
          repositorio: "https://github.com/TomiNavel/PuntoVentaCloud_Movil"
        }
      }
    ];
  
    return Response.json(proyectos);
  }
  