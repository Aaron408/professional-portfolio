// Ejemplo de uso de la API de componentes del Portfolio

// Este archivo muestra cómo interactuar con los componentes del portfolio
// de manera programática para personalizaciones avanzadas

// Esperar a que la aplicación esté completamente cargada
window.addEventListener('DOMContentLoaded', () => {
  // La aplicación se inicializa automáticamente
  // Puedes acceder a ella a través de la variable global portfolioApp
  
  setTimeout(() => {
    // Ejemplos de uso de la API

    // 1. ACTUALIZAR PERFIL
    console.log('🔄 Actualizando perfil...');
    if (window.portfolioApp) {
      window.portfolioApp.updateProfile({
        name: "Juan Pérez",
        title: "Desarrollador Full Stack",
        avatar: "./assets/images/my-avatar.png"
      });
    }

    // 2. AGREGAR NUEVOS PROYECTOS
    console.log('📁 Agregando nuevo proyecto...');
    if (window.portfolioApp) {
      window.portfolioApp.addProject({
        title: "Mi Nuevo Proyecto",
        category: "web development",
        image: "./assets/images/project-1.jpg",
        link: "https://mi-proyecto.com",
        description: "Un proyecto increíble desarrollado con tecnologías modernas"
      });
    }

    // 3. AGREGAR POSTS AL BLOG
    console.log('📝 Agregando nuevo post...');
    if (window.portfolioApp) {
      window.portfolioApp.addBlogPost({
        title: "Nuevo Post del Blog",
        category: "Development",
        date: "2025-01-01",
        formattedDate: "Jan 1, 2025",
        image: "./assets/images/blog-1.jpg",
        excerpt: "Este es un ejemplo de cómo agregar posts dinámicamente.",
        link: "#"
      });
    }

    // 4. NAVEGAR PROGRAMÁTICAMENTE
    setTimeout(() => {
      console.log('🧭 Navegando a Portfolio...');
      if (window.portfolioApp) {
        window.portfolioApp.navigateToPage('portfolio');
      }
    }, 2000);

    // 5. ESCUCHAR EVENTOS
    if (window.Utils) {
      window.Utils.eventEmitter.on('pageChanged', (data) => {
        console.log(`📄 Página cambiada: ${data.from} → ${data.to}`);
      });
    }

  }, 1000); // Esperar 1 segundo para que la app se inicialice
});

// FUNCIONES AUXILIARES PARA DEMOSTRACIONES

// Función para cambiar tema dinámicamente
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  if (window.portfolioApp) {
    window.portfolioApp.setTheme(newTheme);
    console.log(`🎨 Tema cambiado a: ${newTheme}`);
  }
}

// Función para simular carga de datos desde API
async function loadDataFromAPI() {
  console.log('🌐 Simulando carga de datos desde API...');
  
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Datos de ejemplo que podrían venir de una API
  const apiData = {
    profile: {
      name: "Datos desde API",
      title: "Frontend Developer",
      avatar: "./assets/images/my-avatar.png"
    },
    newProject: {
      title: "Proyecto desde API",
      category: "applications",
      image: "./assets/images/project-2.png",
      link: "https://api-project.com"
    },
    contacts: {
      email: "api@example.com",
      phone: "+1 (555) 123-4567",
      birthday: "January 1, 1990",
      location: "San Francisco, CA, USA"
    }
  };

  // Actualizar componentes con los datos de la API
  if (window.portfolioApp) {
    window.portfolioApp.updateProfile(apiData.profile);
    window.portfolioApp.updateContacts(apiData.contacts);
    window.portfolioApp.addProject(apiData.newProject);
  }

  console.log('✅ Datos cargados desde API');
}

// Función para demostrar formulario de contacto personalizado
function setupCustomContactForm() {
  // Esperar a que el componente de contacto esté listo
  setTimeout(() => {
    if (window.portfolioApp && window.portfolioApp.components.pages.contact) {
      window.portfolioApp.components.pages.contact.setFormSubmitCallback(async (formData) => {
        console.log('📧 Enviando formulario personalizado:', formData);
        
        // Aquí puedes agregar tu lógica personalizada
        // Por ejemplo, enviar a tu propio endpoint
        try {
          // Ejemplo de envío a API personalizada
          // const response = await fetch('https://tu-api.com/contact', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify(formData)
          // });
          
          // Simular envío exitoso
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          if (window.portfolioApp) {
            window.portfolioApp.showMessage('¡Mensaje enviado con éxito!', 'success');
          }
          
        } catch (error) {
          console.error('Error enviando formulario:', error);
          if (window.portfolioApp) {
            window.portfolioApp.showMessage('Error enviando el mensaje', 'error');
          }
        }
      });
    }
  }, 2000);
}

// Función para mostrar estadísticas de uso
function showUsageStats() {
  console.log('📊 Estadísticas de uso:');
  
  if (window.Utils) {
    const lastPage = window.Utils.storage.get('lastPage');
    const theme = window.Utils.storage.get('theme');
    
    console.log(`- Última página visitada: ${lastPage || 'No definida'}`);
    console.log(`- Tema actual: ${theme || 'light'}`);
    console.log(`- Datos guardados en localStorage:`, {
      lastPage,
      theme
    });
  }
}

// FUNCIONES DISPONIBLES GLOBALMENTE PARA TESTING
window.portfolioAPI = {
  toggleTheme,
  loadDataFromAPI,
  setupCustomContactForm,
  showUsageStats,
  
  // Funciones de navegación directa
  goToAbout: () => window.portfolioApp?.navigateToPage('about'),
  goToResume: () => window.portfolioApp?.navigateToPage('resume'),
  goToPortfolio: () => window.portfolioApp?.navigateToPage('portfolio'),
  goToBlog: () => window.portfolioApp?.navigateToPage('blog'),
  goToContact: () => window.portfolioApp?.navigateToPage('contact'),
  
  // Función para agregar múltiples proyectos
  addSampleProjects: () => {
    const sampleProjects = [
      {
        title: "E-commerce Platform",
        category: "web development",
        image: "./assets/images/project-1.jpg",
        link: "#"
      },
      {
        title: "Mobile Banking App",
        category: "applications",
        image: "./assets/images/project-2.png",
        link: "#"
      },
      {
        title: "Corporate Website",
        category: "web design",
        image: "./assets/images/project-3.jpg",
        link: "#"
      }
    ];
    
    sampleProjects.forEach(project => {
      if (window.portfolioApp) {
        window.portfolioApp.addProject(project);
      }
    });
    
    console.log(`✅ Agregados ${sampleProjects.length} proyectos de ejemplo`);
  }
};

// Configurar el formulario personalizado automáticamente
setupCustomContactForm();

// Log inicial
console.log('🚀 Portfolio API cargada. Usa window.portfolioAPI para interacciones.');
console.log('📖 Comandos disponibles:', Object.keys(window.portfolioAPI));
