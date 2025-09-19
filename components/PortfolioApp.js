// Import all components and utilities
import Sidebar from './sidebar/Sidebar.js';
import Navigation from './navigation/Navigation.js';
import AboutPage from './pages/AboutPage.js';
import ResumePage from './pages/ResumePage.js';
import PortfolioPage from './pages/PortfolioPage.js';
import BlogPage from './pages/BlogPage.js';
import ContactPage from './pages/ContactPage.js';
import TestimonialsModal from './common/TestimonialsModal.js';
import PageManager from '../utils/PageManager.js';
import Utils from '../utils/Utils.js';
import portfolioData from '../data/portfolioData.js';

class PortfolioApp {
  constructor() {
    this.components = {};
    this.pageManager = null;
    this.init();
  }

  async init() {
    try {
      await this.waitForDOM();
      this.initializeComponents();
      this.setupEventListeners();
      this.loadInitialData();
      console.log('Portfolio App initialized successfully');
    } catch (error) {
      console.error('Error initializing Portfolio App:', error);
    }
  }

  waitForDOM() {
    return new Promise((resolve) => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
      } else {
        resolve();
      }
    });
  }

  initializeComponents() {
    // Initialize Page Manager
    this.pageManager = new PageManager();

    // Initialize Sidebar with data
    const sidebarContainer = document.querySelector('.sidebar-container') || 
      document.querySelector('aside') || 
      this.createSidebarContainer();
    this.components.sidebar = new Sidebar(sidebarContainer, {
      profile: portfolioData.profile,
      contacts: portfolioData.contacts,
      social: portfolioData.social
    });

    // Initialize Navigation
    const navContainer = document.querySelector('.navbar-container') || 
      document.querySelector('.navbar')?.parentElement || 
      this.createNavContainer();
    this.components.navigation = new Navigation(navContainer);

    // Initialize Testimonials Modal
    const modalContainer = document.querySelector('.modal-container-wrapper') || 
      this.createModalContainer();
    this.components.modal = new TestimonialsModal(modalContainer);

    // Initialize Pages
    this.initializePages();

    // Setup navigation callback
    this.components.navigation.setNavigationCallback((page) => {
      this.pageManager.showPage(page);
    });
  }

  createSidebarContainer() {
    const main = document.querySelector('main');
    const sidebarContainer = Utils.createElement('div', {
      className: 'sidebar-container'
    });
    main.insertBefore(sidebarContainer, main.firstChild);
    return sidebarContainer;
  }

  createNavContainer() {
    const mainContent = document.querySelector('.main-content');
    const navContainer = Utils.createElement('div', {
      className: 'navbar-container'
    });
    mainContent.insertBefore(navContainer, mainContent.firstChild);
    return navContainer;
  }

  createModalContainer() {
    const modalContainer = Utils.createElement('div', {
      className: 'modal-container-wrapper'
    });
    document.body.appendChild(modalContainer);
    return modalContainer;
  }

  initializePages() {
    // Get page containers from PageManager
    const aboutContainer = this.pageManager.getPageContainer('about');
    const resumeContainer = this.pageManager.getPageContainer('resume');
    const portfolioContainer = this.pageManager.getPageContainer('portfolio');
    const blogContainer = this.pageManager.getPageContainer('blog');
    const contactContainer = this.pageManager.getPageContainer('contact');

    // Initialize page components with data
    this.components.pages = {
      about: new AboutPage(aboutContainer, portfolioData),
      resume: new ResumePage(resumeContainer),
      portfolio: new PortfolioPage(portfolioContainer),
      blog: new BlogPage(blogContainer),
      contact: new ContactPage(contactContainer)
    };

    // Register pages with PageManager
    Object.entries(this.components.pages).forEach(([name, page]) => {
      this.pageManager.registerPage(name, page);
    });

    // Set up page-specific callbacks
    this.components.pages.about.setModalCallback((testimonialData) => {
      this.components.modal.open(testimonialData);
    });

    this.components.pages.contact.setFormSubmitCallback((formData) => {
      this.handleContactForm(formData);
    });

    // Set default page
    this.pageManager.setDefaultPage('about');
  }

  setupEventListeners() {
    // Global keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Press 'Esc' to close modal
      if (e.key === 'Escape' && this.components.modal.isOpen()) {
        this.components.modal.close();
      }

      // Press numbers 1-5 to navigate between pages
      const pageNumbers = ['1', '2', '3', '4', '5'];
      const pages = ['about', 'resume', 'portfolio', 'blog', 'contact'];
      
      if (pageNumbers.includes(e.key) && e.ctrlKey) {
        e.preventDefault();
        const pageIndex = parseInt(e.key) - 1;
        if (pages[pageIndex]) {
          this.navigateToPage(pages[pageIndex]);
        }
      }
    });

    // Handle window resize
    window.addEventListener('resize', Utils.debounce(() => {
      this.handleResize();
    }, 250));

    // Handle scroll events
    window.addEventListener('scroll', Utils.debounce(() => {
      this.handleScroll();
    }, 100));

    // Setup browser navigation
    this.pageManager.setupBrowserNavigation();
  }

  handleContactForm(formData) {
    // Validate form data
    if (!this.validateContactForm(formData)) {
      this.showMessage('Please fill in all required fields correctly.', 'error');
      return;
    }

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    console.log('Contact form submitted:', formData);
    
    // Simulate API call
    this.simulateFormSubmission(formData)
      .then(() => {
        this.showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
      })
      .catch(() => {
        this.showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
      });
  }

  validateContactForm(formData) {
    return formData.fullname && 
           formData.fullname.trim().length > 0 &&
           formData.email && 
           Utils.isValidEmail(formData.email) &&
           formData.message && 
           formData.message.trim().length > 10;
  }

  simulateFormSubmission(formData) {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          resolve(formData);
        } else {
          reject(new Error('Network error'));
        }
      }, 1000);
    });
  }

  showMessage(message, type = 'info') {
    const messageElement = Utils.createElement('div', {
      className: `app-message app-message--${type}`,
      style: `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        z-index: 10000;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
      `
    }, message);

    document.body.appendChild(messageElement);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (messageElement.parentNode) {
        Utils.animate.fadeOut(messageElement, 300);
        setTimeout(() => {
          if (messageElement.parentNode) {
            messageElement.parentNode.removeChild(messageElement);
          }
        }, 300);
      }
    }, 5000);
  }

  handleResize() {
    // Handle responsive behavior
    const width = window.innerWidth;
    
    if (width <= 768) {
      // Mobile behavior
      document.body.classList.add('mobile');
      document.body.classList.remove('desktop');
    } else {
      // Desktop behavior
      document.body.classList.add('desktop');
      document.body.classList.remove('mobile');
    }
  }

  handleScroll() {
    // Handle scroll effects
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class to body for styling
    if (scrollTop > 100) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  }

  loadInitialData() {
    // Load any initial data or configuration
    const savedTheme = Utils.storage.get('theme', portfolioData.settings.theme);
    this.setTheme(savedTheme);

    // Update components with data from configuration
    this.components.sidebar.updateProfile(portfolioData.profile);
    this.components.sidebar.updateContacts(portfolioData.contacts);

    // Update Resume page with education and skills
    this.components.pages.resume.updateEducation(portfolioData.education);
    this.components.pages.resume.updateSkills(portfolioData.skills);

    // Load blog posts
    this.components.pages.blog.loadBlogPosts(portfolioData.blogPosts);

    // Update contact page map
    this.components.pages.contact.updateMapLocation(portfolioData.contacts.mapEmbedUrl);

    // Restore last visited page
    const lastPage = Utils.storage.get('lastPage');
    if (lastPage && this.pageManager.pages.has(lastPage)) {
      this.navigateToPage(lastPage);
    } else {
      this.navigateToPage(portfolioData.settings.defaultPage);
    }
  }

  setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    Utils.storage.set('theme', theme);
  }

  navigateToPage(pageName) {
    if (this.pageManager.showPage(pageName)) {
      this.components.navigation.navigateToPage(pageName);
      Utils.storage.set('lastPage', pageName);
      return true;
    }
    return false;
  }

  // Public API methods
  updateProfile(profileData) {
    if (this.components.sidebar) {
      this.components.sidebar.updateProfile(profileData);
    }
  }

  updateContacts(contactsData) {
    if (this.components.sidebar) {
      this.components.sidebar.updateContacts(contactsData);
    }
  }

  addProject(projectData) {
    if (this.components.pages.portfolio) {
      this.components.pages.portfolio.addProject(projectData);
    }
  }

  addBlogPost(postData) {
    if (this.components.pages.blog) {
      this.components.pages.blog.addBlogPost(postData);
    }
  }

  // Cleanup method
  destroy() {
    if (this.pageManager) {
      this.pageManager.destroy();
    }

    // Remove event listeners
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);

    console.log('Portfolio App destroyed');
  }
}

// Initialize the app when the script loads
let portfolioApp;

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    portfolioApp = new PortfolioApp();
    // Make app available globally for API access
    window.portfolioApp = portfolioApp;
    window.Utils = Utils;
  });
} else {
  portfolioApp = new PortfolioApp();
  // Make app available globally for API access
  window.portfolioApp = portfolioApp;
  window.Utils = Utils;
}

// Export for manual initialization if needed
export default PortfolioApp;
