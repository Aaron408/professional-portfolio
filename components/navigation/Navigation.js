class Navigation {
  constructor(container) {
    this.container = container;
    this.navigationLinks = [];
    this.activeLink = null;
    this.onNavigate = null;
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
      <nav class="navbar">
        <ul class="navbar-list">
          <li class="navbar-item">
            <button class="navbar-link active" data-nav-link data-page="about">About</button>
          </li>
          <li class="navbar-item">
            <button class="navbar-link" data-nav-link data-page="resume">Resume</button>
          </li>
          <li class="navbar-item">
            <button class="navbar-link" data-nav-link data-page="portfolio">Portfolio</button>
          </li>
          <li class="navbar-item">
            <button class="navbar-link" data-nav-link data-page="blog">Blog</button>
          </li>
          <li class="navbar-item">
            <button class="navbar-link" data-nav-link data-page="contact">Contact</button>
          </li>
        </ul>
      </nav>
    `;

    this.navigationLinks = this.container.querySelectorAll("[data-nav-link]");
    this.activeLink = this.container.querySelector(".navbar-link.active");
  }

  bindEvents() {
    this.navigationLinks.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.setActiveLink(link);
        const page = link.dataset.page;
        if (this.onNavigate) {
          this.onNavigate(page);
        }
      });
    });
  }

  setActiveLink(clickedLink) {
    // Remove active class from all links
    this.navigationLinks.forEach(link => {
      link.classList.remove("active");
    });

    // Add active class to clicked link
    clickedLink.classList.add("active");
    this.activeLink = clickedLink;
  }

  setNavigationCallback(callback) {
    this.onNavigate = callback;
  }

  getActivePage() {
    return this.activeLink ? this.activeLink.dataset.page : 'about';
  }

  navigateToPage(pageName) {
    const targetLink = Array.from(this.navigationLinks).find(
      link => link.dataset.page === pageName
    );
    
    if (targetLink) {
      this.setActiveLink(targetLink);
      if (this.onNavigate) {
        this.onNavigate(pageName);
      }
    }
  }
}

export default Navigation;
