class PortfolioPage {
  constructor(container, projects = []) {
    this.container = container;
    this.projects = projects;
    this.filterButtons = [];
    this.filterItems = [];
    this.selectElement = null;
    this.selectValue = null;
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    // Generate projects HTML dynamically
    const projectsHTML = this.projects.map(project => `
      <li class="project-item active" data-filter-item data-category="${project.category}">
        <a href="${project.link || '#'}">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${project.image}" alt="${project.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-category">${this.capitalizeCategory(project.category)}</p>
        </a>
      </li>
    `).join('');

    this.container.innerHTML = `
      <article class="portfolio" data-page="portfolio">
        <header>
          <h2 class="h2 article-title">Portfolio</h2>
        </header>

        <section class="projects">
          <ul class="filter-list">
            <li class="filter-item">
              <button class="active" data-filter-btn>All</button>
            </li>
            <li class="filter-item">
              <button data-filter-btn>Web design</button>
            </li>
            <li class="filter-item">
              <button data-filter-btn>Applications</button>
            </li>
            <li class="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
          </ul>

          <div class="filter-select-box">
            <button class="filter-select" data-select>
              <div class="select-value" data-selecct-value>Select category</div>
              <div class="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>

            <ul class="select-list">
              <li class="select-item">
                <button data-select-item>All</button>
              </li>
              <li class="select-item">
                <button data-select-item>Web design</button>
              </li>
              <li class="select-item">
                <button data-select-item>Applications</button>
              </li>
              <li class="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div>

          <ul class="project-list">
            ${projectsHTML}
          </ul>
        </section>
      </article>
    `;

    this.initializeElements();
  }

  capitalizeCategory(category) {
    return category.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  initializeElements() {
    this.filterButtons = this.container.querySelectorAll("[data-filter-btn]");
    this.filterItems = this.container.querySelectorAll("[data-filter-item]");
    this.selectElement = this.container.querySelector("[data-select]");
    this.selectValue = this.container.querySelector("[data-selecct-value]");
    this.selectItems = this.container.querySelectorAll("[data-select-item]");
  }

  bindEvents() {
    // Filter buttons events
    let lastClickedBtn = this.filterButtons[0];
    
    this.filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedValue = btn.innerText.toLowerCase();
        this.selectValue.innerText = btn.innerText;
        this.filterProjects(selectedValue);

        lastClickedBtn.classList.remove("active");
        btn.classList.add("active");
        lastClickedBtn = btn;
      });
    });

    // Select dropdown events
    if (this.selectElement) {
      this.selectElement.addEventListener("click", () => {
        this.selectElement.classList.toggle("active");
      });
    }

    // Select items events
    this.selectItems.forEach((item) => {
      item.addEventListener("click", () => {
        const selectedValue = item.innerText.toLowerCase();
        this.selectValue.innerText = item.innerText;
        this.selectElement.classList.remove("active");
        this.filterProjects(selectedValue);
      });
    });
  }

  filterProjects(selectedValue) {
    this.filterItems.forEach((item) => {
      if (selectedValue === "all") {
        item.classList.add("active");
      } else if (selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  show() {
    this.container.style.display = 'block';
    const article = this.container.querySelector('article');
    if (article) {
      article.classList.add('active');
    }
  }

  hide() {
    const article = this.container.querySelector('article');
    if (article) {
      article.classList.remove('active');
    }
  }

  addProject(project) {
    const projectList = this.container.querySelector('.project-list');
    if (projectList) {
      const projectItem = document.createElement('li');
      projectItem.className = 'project-item active';
      projectItem.setAttribute('data-filter-item', '');
      projectItem.setAttribute('data-category', project.category);
      
      projectItem.innerHTML = `
        <a href="${project.link || '#'}">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${project.image}" alt="${project.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-category">${project.category}</p>
        </a>
      `;
      
      projectList.appendChild(projectItem);
      this.initializeElements(); // Reinitialize elements after adding new project
    }
  }
}

export default PortfolioPage;
