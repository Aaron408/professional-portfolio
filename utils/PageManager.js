import Utils from '../utils/Utils.js';

class PageManager {
  constructor() {
    this.pages = new Map();
    this.currentPage = null;
    this.pageContainers = new Map();
    this.init();
  }

  init() {
    this.createPageContainers();
  }

  createPageContainers() {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    // Create containers for each page
    const pageNames = ['about', 'resume', 'portfolio', 'contact'];
    
    pageNames.forEach(pageName => {
      const container = Utils.createElement('div', {
        className: `page-container ${pageName}-container`,
        'data-page-container': pageName,
        style: 'display: none;'
      });
      
      mainContent.appendChild(container);
      this.pageContainers.set(pageName, container);
    });
  }

  registerPage(pageName, pageInstance) {
    if (!this.pageContainers.has(pageName)) {
      console.error(`Container for page "${pageName}" not found`);
      return false;
    }

    this.pages.set(pageName, pageInstance);
    return true;
  }

  showPage(pageName) {
    // Hide current page
    if (this.currentPage && this.currentPage !== pageName) {
      this.hidePage(this.currentPage);
    }

    // Show requested page
    const page = this.pages.get(pageName);
    const container = this.pageContainers.get(pageName);

    if (page && container) {
      container.style.display = 'block';
      
      if (typeof page.show === 'function') {
        page.show();
      }

      this.currentPage = pageName;
      
      // Scroll to top
      Utils.scrollToTop();

      // Emit page change event
      Utils.eventEmitter.emit('pageChanged', {
        from: this.currentPage,
        to: pageName
      });

      return true;
    }

    console.error(`Page "${pageName}" not found`);
    return false;
  }

  hidePage(pageName) {
    const page = this.pages.get(pageName);
    const container = this.pageContainers.get(pageName);

    if (page && container) {
      if (typeof page.hide === 'function') {
        page.hide();
      }

      container.style.display = 'none';
      return true;
    }

    return false;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getPage(pageName) {
    return this.pages.get(pageName);
  }

  getPageContainer(pageName) {
    return this.pageContainers.get(pageName);
  }

  getAllPages() {
    return Array.from(this.pages.keys());
  }

  isPageActive(pageName) {
    return this.currentPage === pageName;
  }

  // Navigate to a specific page programmatically
  navigateTo(pageName) {
    if (this.pages.has(pageName)) {
      return this.showPage(pageName);
    }
    return false;
  }

  // Initialize with a default page
  setDefaultPage(pageName = 'about') {
    if (this.pages.has(pageName)) {
      this.showPage(pageName);
    }
  }

  // Handle browser back/forward navigation
  setupBrowserNavigation() {
    // Update URL when page changes
    Utils.eventEmitter.on('pageChanged', (data) => {
      const url = new URL(window.location);
      url.searchParams.set('page', data.to);
      window.history.pushState({ page: data.to }, '', url);
    });

    // Handle back/forward button
    window.addEventListener('popstate', (event) => {
      const page = event.state?.page || this.getPageFromURL();
      if (page && this.pages.has(page)) {
        this.showPage(page);
      }
    });

    // Don't automatically set initial page here
    // Let PortfolioApp handle the initial page load to properly sync navigation
  }

  getPageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page');
  }

  // Preload a page (useful for performance)
  preloadPage(pageName) {
    const page = this.pages.get(pageName);
    if (page && typeof page.preload === 'function') {
      page.preload();
    }
  }

  // Destroy a page and clean up
  destroyPage(pageName) {
    const page = this.pages.get(pageName);
    const container = this.pageContainers.get(pageName);

    if (page) {
      if (typeof page.destroy === 'function') {
        page.destroy();
      }
      this.pages.delete(pageName);
    }

    if (container) {
      container.remove();
      this.pageContainers.delete(pageName);
    }

    if (this.currentPage === pageName) {
      this.currentPage = null;
    }
  }

  // Clean up all pages
  destroy() {
    this.pages.forEach((page, pageName) => {
      this.destroyPage(pageName);
    });

    this.pages.clear();
    this.pageContainers.clear();
    this.currentPage = null;
  }
}

export default PageManager;
