// Configuration data for the portfolio application
const portfolioData = {
  // Personal information
  profile: {
    name: "Aaron Reyes",
    title: "FullStack Developer",
    avatar: "./assets/images/ProfilePhoto.jpg",
    about: [
      "Soy Aaron Reyes, un desarrollador FullStack apasionado por crear soluciones tecnológicas innovadoras. Originario de Querétaro, México, me especializo en el desarrollo de aplicaciones web, móviles y multiplataforma, abarcando tanto frontend como backend.",
      "Mi experiencia incluye arquitectura de software y consultoría tecnológica, ayudando a empresas y proyectos a seleccionar las mejores tecnologías y metodologías para sus necesidades específicas. Actualmente estoy completando mi formación en Ingeniería en Desarrollo y Gestión de Software.",
      "Además de mi trabajo en desarrollo web y móvil, estoy explorando el fascinante mundo del desarrollo de videojuegos, aprendiendo herramientas como Unity y Godot para crear experiencias interactivas únicas."
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
      title: "Desarrollo Web",
      description: "Desarrollo completo de aplicaciones web modernas, desde el frontend hasta el backend, utilizando las últimas tecnologías y mejores prácticas."
    },
    {
      icon: "./assets/images/icon-app.svg",
      title: "Desarrollo Móvil y Multiplataforma",
      description: "Creación de aplicaciones móviles nativas y multiplataforma que funcionan perfectamente en iOS, Android y otras plataformas."
    },
    {
      icon: "./assets/images/icon-design.svg",
      title: "Arquitectura de Software",
      description: "Diseño y planificación de arquitecturas de software escalables, mantenibles y eficientes para proyectos de cualquier tamaño."
    },
    {
      icon: "./assets/images/icon-photo.svg",
      title: "Consultoría Tecnológica",
      description: "Asesoramiento especializado en selección de tecnologías, metodologías de desarrollo y optimización de procesos tecnológicos."
    }
  ],

  // Certifications and badges
  certifications: [
    {
      category: "Frontend Technologies",
      badges: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: "Expert" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: "Expert" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Expert" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: "Intermediate" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Expert" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: "Intermediate" }
      ]
    },
    {
      category: "Styling & UI",
      badges: [
        { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", level: "Expert" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: "Intermediate" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: "Intermediate" }
      ]
    },
    {
      category: "Backend Technologies",
      badges: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: "Expert" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: "Intermediate" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Intermediate" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: "Intermediate" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", level: "Intermediate" }
      ]
    },
    {
      category: "Mobile Development",
      badges: [
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Intermediate" },
        { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Advanced" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", level: "Intermediate" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", level: "Intermediate" },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", level: "Beginner" }
      ]
    },
    {
      category: "Databases",
      badges: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: "Advanced" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: "Advanced" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: "Intermediate" },
        { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", level: "Intermediate" }
      ]
    },
    {
      category: "DevOps & Tools",
      badges: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: "Intermediate" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: "Advanced" },
        { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: "Advanced" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", level: "Intermediate" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: "Advanced" }
      ]
    },
    {
      category: "Cloud & Deployment",
      badges: [
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: "Intermediate" },
        { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", level: "Advanced" },
        { name: "Render", icon: "https://www.vectorlogo.zone/logos/render/render-icon.svg", level: "Intermediate" }
      ]
    },
    {
      category: "Game Development (Learning)",
      badges: [
        { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", level: "Learning" },
        { name: "Godot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg", level: "Learning" }
      ]
    }
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
