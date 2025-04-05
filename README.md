# Professional Portfolio – TomiNavel

This is the repository for the professional portfolio of **TomiNavel**, showcasing software development projects built with a modern, technical, and scalable approach.

## Demo

[www.tominavel.com](https://www.tominavel.com)

## Stack & Features

- **Frontend**: [Next.js](https://nextjs.org/) (App Router) + [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom light/dark theme variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Material Tailwind](https://www.material-tailwind.com/)
- **TypeScript**: Fully typed project
- **Routing**: File-based with `/app` and dynamic segments
- **API**: Local endpoints under `/api/skills` and `/api/proyectos`
- **Email**: Form submissions via API and `nodemailer`
- **Internationalization**: Ready for **i18n** (Spanish / English)
- **Dark Mode**: System-based or manual theme switching
- **SEO & Performance**: Optimized images, smooth loading, and scroll behavior
- **Accessibility**: Responsive design, accessible contrast, and clear navigation
- **Security**: HTTPS, input sanitization, and client-server separation

## Project Structure

src/
├── app/
│ ├── proyectos/[id]/ # Dynamic project pages
│ ├── api/ # API routes (skills, projects, contact)
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Main page
├── components/ # Navbar, Footer, SkillCard, etc.
├── context/ # Language management
├── hooks/ # Custom translation hook
├── languajes/ # Translation JSON files
├── types/ # Global TypeScript types
├── public/ # Images and static assets

```


📄 License

This portfolio is offered as a personal showcase. The code is open for review, learning, and reference purposes.
```
