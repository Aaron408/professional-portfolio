# Portfolio Personal Componentizado

Este proyecto ha sido refactorizado para usar una arquitectura de componentes modulares que facilita el mantenimiento, la reutilización y la escalabilidad del código.

## 🏗️ Estructura del Proyecto

```
portfolio/
├── components/
│   ├── sidebar/
│   │   └── Sidebar.js
│   ├── navigation/
│   │   └── Navigation.js
│   ├── pages/
│   │   ├── AboutPage.js
│   │   ├── ResumePage.js
│   │   ├── PortfolioPage.js
│   │   ├── BlogPage.js
│   │   └── ContactPage.js
│   ├── common/
│   │   └── TestimonialsModal.js
│   └── PortfolioApp.js
├── utils/
│   ├── Utils.js
│   └── PageManager.js
├── data/
│   └── portfolioData.js
├── assets/
│   ├── css/
│   ├── images/
│   └── js/
├── index-componentized.html
└── README-Components.md
```

## 🧩 Componentes Principales

### 1. **PortfolioApp** (Aplicación Principal)
- **Archivo**: `components/PortfolioApp.js`
- **Función**: Coordina todos los componentes y maneja el estado global
- **Características**:
  - Inicialización automática
  - Manejo de eventos globales
  - Comunicación entre componentes
  - Persistencia de datos

### 2. **Sidebar** 
- **Archivo**: `components/sidebar/Sidebar.js`
- **Función**: Barra lateral con información personal y contactos
- **API Pública**:
  ```javascript
  sidebar.updateProfile(profileData)
  sidebar.updateContacts(contactsData)
  sidebar.toggleSidebar()
  ```

### 3. **Navigation**
- **Archivo**: `components/navigation/Navigation.js`
- **Función**: Navegación principal entre páginas
- **API Pública**:
  ```javascript
  navigation.setNavigationCallback(callback)
  navigation.navigateToPage(pageName)
  navigation.getActivePage()
  ```

### 4. **Páginas**
Cada página es un componente independiente:

#### **AboutPage**
- **Archivo**: `components/pages/AboutPage.js`
- **Función**: Página principal con información personal, servicios y testimonios
- **API Pública**:
  ```javascript
  aboutPage.setModalCallback(callback)
  aboutPage.show()
  aboutPage.hide()
  ```

#### **ResumePage**
- **Archivo**: `components/pages/ResumePage.js`
- **Función**: Página de currículum con educación, experiencia y habilidades
- **API Pública**:
  ```javascript
  resumePage.updateEducation(educationData)
  resumePage.updateSkills(skillsData)
  ```

#### **PortfolioPage**
- **Archivo**: `components/pages/PortfolioPage.js`
- **Función**: Galería de proyectos con filtros
- **API Pública**:
  ```javascript
  portfolioPage.addProject(projectData)
  portfolioPage.filterProjects(category)
  ```

#### **BlogPage**
- **Archivo**: `components/pages/BlogPage.js`
- **Función**: Lista de artículos del blog
- **API Pública**:
  ```javascript
  blogPage.addBlogPost(postData)
  blogPage.loadBlogPosts(posts)
  ```

#### **ContactPage**
- **Archivo**: `components/pages/ContactPage.js`
- **Función**: Formulario de contacto y mapa
- **API Pública**:
  ```javascript
  contactPage.setFormSubmitCallback(callback)
  contactPage.updateMapLocation(embedUrl)
  ```

### 5. **TestimonialsModal**
- **Archivo**: `components/common/TestimonialsModal.js`
- **Función**: Modal para mostrar testimonios completos
- **API Pública**:
  ```javascript
  modal.open(testimonialData)
  modal.close()
  modal.isOpen()
  ```

## 🛠️ Utilidades

### **Utils**
- **Archivo**: `utils/Utils.js`
- **Función**: Funciones de utilidad comunes
- **Incluye**:
  - Manipulación del DOM
  - Almacenamiento local
  - Validaciones
  - Animaciones
  - Event Emitter

### **PageManager**
- **Archivo**: `utils/PageManager.js`
- **Función**: Gestión de navegación entre páginas
- **Características**:
  - Navegación con historial del navegador
  - Lazy loading de páginas
  - Gestión de estado de páginas

## 📊 Datos de Configuración

- **Archivo**: `data/portfolioData.js`
- **Función**: Configuración centralizada de todos los datos del portafolio
- **Incluye**: Perfil personal, proyectos, blog posts, habilidades, etc.

## 🚀 Cómo Usar

### Inicialización Básica
```html
<!-- Incluir en tu HTML -->
<script type="module" src="./components/PortfolioApp.js"></script>
```

La aplicación se inicializa automáticamente cuando el DOM está listo.

### Uso Programático
```javascript
import PortfolioApp from './components/PortfolioApp.js';

// Inicialización manual
const app = new PortfolioApp();

// Actualizar datos
app.updateProfile({
  name: "Nuevo Nombre",
  title: "Nuevo Título",
  avatar: "nueva-imagen.jpg"
});

// Agregar proyecto
app.addProject({
  title: "Nuevo Proyecto",
  category: "web development",
  image: "proyecto.jpg",
  link: "https://ejemplo.com"
});

// Navegar a página
app.navigateToPage('portfolio');
```

### Personalización de Datos
```javascript
// Edita data/portfolioData.js para personalizar:

const portfolioData = {
  profile: {
    name: "Tu Nombre",
    title: "Tu Título",
    // ... más configuraciones
  },
  // ... resto de datos
};
```

## 🎨 Ventajas de la Arquitectura por Componentes

### ✅ **Mantenibilidad**
- Cada componente tiene una responsabilidad específica
- Código más organizado y fácil de entender
- Cambios aislados no afectan otros componentes

### ✅ **Reutilización**
- Componentes pueden reutilizarse en otros proyectos
- Fácil creación de variantes de componentes

### ✅ **Escalabilidad**
- Fácil agregar nuevos componentes o funcionalidades
- Estructura preparada para crecimiento del proyecto

### ✅ **Testabilidad**
- Cada componente puede probarse independientemente
- Mocking más sencillo para pruebas unitarias

### ✅ **Desarrollo en Equipo**
- Múltiples desarrolladores pueden trabajar en componentes diferentes
- Menos conflictos de código

## 🔧 Funcionalidades Avanzadas

### **Comunicación entre Componentes**
```javascript
// Usar el Event Emitter
Utils.eventEmitter.on('pageChanged', (data) => {
  console.log(`Navegó de ${data.from} a ${data.to}`);
});

Utils.eventEmitter.emit('customEvent', { data: 'ejemplo' });
```

### **Persistencia de Datos**
```javascript
// Guardar en localStorage
Utils.storage.set('configuracion', { tema: 'oscuro' });

// Leer de localStorage
const config = Utils.storage.get('configuracion', {});
```

### **Animaciones**
```javascript
// Fade in/out
Utils.animate.fadeIn(elemento);
Utils.animate.fadeOut(elemento);
```

### **Atajos de Teclado**
- `Ctrl + 1-5`: Navegar entre páginas
- `Esc`: Cerrar modal

## 🎯 Casos de Uso

### **Agregar Nueva Página**
1. Crear componente en `components/pages/`
2. Registrar en `PageManager`
3. Agregar navegación en `Navigation`

### **Modificar Estilos**
Los estilos CSS originales siguen funcionando. Los componentes generan el mismo HTML.

### **Integrar con Backend**
```javascript
// Ejemplo en ContactPage
contactPage.setFormSubmitCallback(async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });
    // Manejar respuesta
  } catch (error) {
    // Manejar error
  }
});
```

## 📱 Responsividad

Los componentes mantienen la responsividad original y agregan:
- Detección automática de dispositivo móvil/desktop
- Clases CSS dinámicas (`mobile`, `desktop`, `scrolled`)
- Eventos de redimensionamiento optimizados

## 🔄 Migración desde la Versión Original

1. **Mantén el CSS original**: Los componentes generan el mismo HTML
2. **Reemplaza el archivo JS**: Cambia `script.js` por `PortfolioApp.js`
3. **Actualiza el HTML**: Usa `index-componentized.html` como base
4. **Personaliza datos**: Edita `portfolioData.js`

## 🆘 Soporte y Contribución

Para reportar problemas o sugerir mejoras:
1. Revisa la documentación de cada componente
2. Verifica la consola del navegador por errores
3. Asegúrate de que los archivos estén en las rutas correctas

La arquitectura está diseñada para ser extensible y fácil de mantener. ¡Disfruta desarrollando! 🚀
