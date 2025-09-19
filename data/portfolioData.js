// Configuration data for the portfolio application
const portfolioData = {
  // Personal information
  profile: {
    name: "Aaron Reyes",
    title: "FullStack Developer",
    avatar: "./assets/images/ProfilePhoto.jpg",
    about: [
      "Soy Aaron Reyes, un desarrollador FullStack apasionado por crear soluciones tecnológicas innovadoras. Originario de Querétaro, México, me especializo en el desarrollo de aplicaciones web y móviles multiplataforma.",
      "Mi experiencia abarca tanto el frontend como el backend, utilizando tecnologías modernas para crear aplicaciones funcionales, escalables y con excelente experiencia de usuario. Actualmente estoy completando mi formación en Ingeniería en Desarrollo y Gestión de Software, combinando conocimientos teóricos con experiencia práctica en proyectos reales."
    ]
  },

  // Contact information
  contacts: {
    email: "reruaarr@gmail.com",
    phone: "+52 (442) 422-5776",
    birthday: "June 26, 2004",
    location: "Querétaro, Qro, México",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59533.20692911919!2d-100.41384742470742!3d20.588792758498336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d344f94e8e2bb1%3A0x5b5b5b5b5b5b5b5b!2sQuer%C3%A9taro%2C%20Qro.%2C%20Mexico!5e0!3m2!1ses!2smx!4v1725148800000!5m2!1ses!2smx"
  },

  // Social media links
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "https://linkedin.com/in/aaron-reyes",
    github: "https://github.com/aaron-reyes"
  },

  // Services offered
  services: [
    {
      icon: "./assets/images/icon-dev.svg",
      title: "Desarrollo Frontend",
      description: "Creación de interfaces modernas y responsivas utilizando las últimas tecnologías web para una experiencia de usuario excepcional."
    },
    {
      icon: "./assets/images/icon-design.svg",
      title: "Desarrollo Backend",
      description: "Desarrollo de APIs robustas y bases de datos eficientes para aplicaciones escalables y seguras."
    },
    {
      icon: "./assets/images/icon-app.svg",
      title: "Aplicaciones Multiplataforma",
      description: "Desarrollo de aplicaciones móviles y de escritorio que funcionan en múltiples plataformas con código optimizado."
    },
    {
      icon: "./assets/images/icon-photo.svg",
      title: "Consultoría Tecnológica",
      description: "Asesoramiento en arquitectura de software y selección de tecnologías adecuadas para cada proyecto."
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Daniel Lewis",
      avatar: "./assets/images/avatar-1.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "2021-06-14"
    },
    {
      name: "Jessica Miller",
      avatar: "./assets/images/avatar-2.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "2021-07-10"
    },
    {
      name: "Emily Evans",
      avatar: "./assets/images/avatar-3.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "2021-08-15"
    },
    {
      name: "Henry William",
      avatar: "./assets/images/avatar-4.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "2021-09-20"
    }
  ],

  // Client logos
  clients: [
    { logo: "./assets/images/logo-1-color.png", name: "Client 1", link: "#" },
    { logo: "./assets/images/logo-2-color.png", name: "Client 2", link: "#" },
    { logo: "./assets/images/logo-3-color.png", name: "Client 3", link: "#" },
    { logo: "./assets/images/logo-4-color.png", name: "Client 4", link: "#" },
    { logo: "./assets/images/logo-5-color.png", name: "Client 5", link: "#" },
    { logo: "./assets/images/logo-6-color.png", name: "Client 6", link: "#" }
  ],

  // Education
  education: [
    {
      title: "Ingeniería en Desarrollo y Gestión de Software",
      period: "2024 — 2026 (En curso)",
      description: "Profundizando conocimientos en arquitectura de software, gestión de proyectos tecnológicos, y metodologías de desarrollo ágil en la Universidad Tecnológica de Querétaro."
    },
    {
      title: "TSU en Desarrollo de Software Multiplataforma",
      period: "2022 — 2024",
      description: "Técnico Superior Universitario especializado en desarrollo de aplicaciones web y móviles multiplataforma. Enfoque en tecnologías modernas y mejores prácticas de desarrollo de software."
    }
  ],

  // Work experience
  experience: [
    {
      title: "FullStack Developer",
      period: "2023 — Presente",
      description: "Desarrollo de aplicaciones web completas utilizando tecnologías modernas tanto en frontend como backend. Experiencia en la creación de soluciones escalables y mantenibles."
    },
    {
      title: "Desarrollador Frontend",
      period: "2022 — 2023",
      description: "Especialización en interfaces de usuario interactivas y responsivas. Implementación de diseños modernos con enfoque en la experiencia del usuario."
    }
  ],

  // Skills
  skills: [
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Python", percentage: 75 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "SQL Databases", percentage: 80 },
    { name: "Git/GitHub", percentage: 85 },
    { name: "TypeScript", percentage: 70 }
  ],

  // Portfolio projects
  projects: [
    {
      title: "Finance",
      category: "web development",
      image: "./assets/images/project-1.jpg",
      link: "#",
      description: "A comprehensive financial management platform"
    },
    {
      title: "Orizon",
      category: "web development",
      image: "./assets/images/project-2.png",
      link: "#",
      description: "Modern web application with clean design"
    },
    {
      title: "Fundo",
      category: "web design",
      image: "./assets/images/project-3.jpg",
      link: "#",
      description: "Creative web design project"
    },
    {
      title: "Brawlhalla",
      category: "applications",
      image: "./assets/images/project-4.png",
      link: "#",
      description: "Mobile game application interface"
    },
    {
      title: "DSM.",
      category: "web design",
      image: "./assets/images/project-5.png",
      link: "#",
      description: "Design system and branding project"
    },
    {
      title: "MetaSpark",
      category: "web design",
      image: "./assets/images/project-6.png",
      link: "#",
      description: "Innovative web design solution"
    },
    {
      title: "Summary",
      category: "web development",
      image: "./assets/images/project-7.png",
      link: "#",
      description: "Data visualization and analytics platform"
    },
    {
      title: "Task Manager",
      category: "applications",
      image: "./assets/images/project-8.jpg",
      link: "#",
      description: "Productivity application for task management"
    },
    {
      title: "Arrival",
      category: "web development",
      image: "./assets/images/project-9.png",
      link: "#",
      description: "Travel and booking platform"
    }
  ],

  // Blog posts
  blogPosts: [
    {
      title: "Design conferences in 2022",
      category: "Design",
      date: "2022-02-23",
      formattedDate: "Feb 23, 2022",
      image: "./assets/images/blog-1.jpg",
      excerpt: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      link: "#"
    },
    {
      title: "Best fonts every designer",
      category: "Design",
      date: "2022-02-23",
      formattedDate: "Feb 23, 2022",
      image: "./assets/images/blog-2.jpg",
      excerpt: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      link: "#"
    },
    {
      title: "Design digest #80",
      category: "Design",
      date: "2022-02-23",
      formattedDate: "Feb 23, 2022",
      image: "./assets/images/blog-3.jpg",
      excerpt: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
      link: "#"
    },
    {
      title: "UI interactions of the week",
      category: "Design",
      date: "2022-02-23",
      formattedDate: "Feb 23, 2022",
      image: "./assets/images/blog-4.jpg",
      excerpt: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
      link: "#"
    },
    {
      title: "The forgotten art of spacing",
      category: "Design",
      date: "2022-02-23",
      formattedDate: "Feb 23, 2022",
      image: "./assets/images/blog-5.jpg",
      excerpt: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "#"
    },
    {
      title: "Design digest #79",
      category: "Design",
      date: "2022-02-23",
      formattedDate: "Feb 23, 2022",
      image: "./assets/images/blog-6.jpg",
      excerpt: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
      link: "#"
    }
  ],

  // Filter categories for portfolio
  portfolioCategories: [
    "all",
    "web design",
    "applications",
    "web development"
  ],

  // Application settings
  settings: {
    theme: "light", // light, dark
    animations: true,
    autoSave: true,
    defaultPage: "about"
  }
};

export default portfolioData;
