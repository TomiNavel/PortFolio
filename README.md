# Portfolio Profesional – TomiNavel

Este es el repositorio del portfolio profesional de **TomiNavel**, donde se presentan proyectos de desarrollo de software realizados con un enfoque técnico, moderno y escalable.

## Demo

👉 [www.tominavel.com](https://www.tominavel.com)

---

## Tecnologías

- **Frontend**: [Next.js](https://nextjs.org/) (App Router) + [React](https://reactjs.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) con variables de tema claro/oscuro personalizadas
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Material Tailwind](https://www.material-tailwind.com/)
- **TypeScript**: Tipado estático en todo el proyecto
- **Routing**: Segmentación con `/app` y rutas dinámicas
- **API**: Endpoints locales en `/api/skills` y `/api/proyectos`
- **Email**: Envío de formularios mediante API y `nodemailer`
- **Internacionalización**: Preparado para soportar **i18n** (español/inglés)
- **Dark mode**: Activado automáticamente por sistema o manualmente
- **SEO y rendimiento**: Imágenes optimizadas, carga eficiente y scroll suave
- **Accesibilidad**: Diseño responsive, contrastes adaptados y navegación clara
- **Seguridad**: Uso de HTTPS, sanitización de entradas y separación cliente-servidor

---

## Estructura del proyecto

src/ ├── app/ │ ├── proyectos/[id]/ # Página dinámica de proyectos │ ├── api/ # Rutas API (skills, proyectos, contacto) │ ├── layout.tsx # Layout base │ ├── page.tsx # Página principal ├── components/ # Navbar, Footer, SkillCard, etc. ├── types/ # Tipos globales TypeScript ├── public/ # Imágenes y archivos estáticos

---

## Contacto

El formulario de contacto se encuentra al final del portfolio y utiliza un endpoint seguro (`/api/contact`) para enviar mensajes por correo mediante `nodemailer`.

---

## Instalación local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TomiNavel/portfolio.git

# 2. Instalar dependencias
cd portfolio
npm install

# 3. Crear un archivo .env.local con las variables para el correo:
# SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS

# 4. Iniciar el servidor de desarrollo
npm run dev

🛠 Variables de entorno

Crea un archivo .env.local con las siguientes variables:

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=usuario@example.com
SMTP_PASS=tu_contraseña_segura

📄 Licencia

Este portfolio se ofrece como demostración personal. El código es de uso libre para revisión, aprendizaje y referencias.
```
