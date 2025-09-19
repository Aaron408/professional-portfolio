class AboutPage {
  constructor(container, data = null) {
    this.container = container;
    this.testimonialsModal = null;
    this.data = data || {
      profile: { about: ["Default about text..."] },
      services: [],
      certifications: [],
    };
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    const { profile, services, certifications } = this.data;

    // Generate about text
    const aboutText = profile.about
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");

    // Generate services
    const servicesHTML = services
      .map(
        (service) => `
      <li class="service-item">
        <div class="service-icon-box">
          <img src="${service.icon}" alt="${service.title} icon" width="40">
        </div>
        <div class="service-content-box">
          <h4 class="h4 service-item-title">${service.title}</h4>
          <p class="service-item-text">${service.description}</p>
        </div>
      </li>
    `
      )
      .join("");

    // Generate certifications by category (with error handling)
    const certificationsHTML =
      certifications && certifications.length > 0
        ? certifications
            .map(
              (category) => `
      <div class="certification-category">
        <h4 class="h4 certification-category-title">${category.category}</h4>
        <div class="badges-grid">
          ${category.badges
            .map(
              (badge) => `
            <div class="badge-item">
              <img src="${badge.icon}" alt="${badge.name}" width="32" height="32" onerror="this.style.display='none'">
              <span class="badge-name">${badge.name}</span>
              <span class="badge-level">${badge.level}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
            )
            .join("")
        : "<p>No certifications available.</p>";

    this.container.innerHTML = `
      <article class="about active" data-page="about">
        <header>
          <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
          ${aboutText}
        </section>

        <section class="service">
          <h3 class="h3 service-title">What i'm doing</h3>
          <ul class="service-list">
            ${servicesHTML}
          </ul>
        </section>

        <section class="certifications">
          <h3 class="h3 certifications-title">Skills & Technologies</h3>
          <div class="certifications-content">
            ${certificationsHTML}
          </div>
        </section>

      </article>
    `;
  }

  bindEvents() {
    const testimonialsItems = this.container.querySelectorAll(
      "[data-testimonials-item]"
    );
    testimonialsItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        this.openTestimonialModal(e.currentTarget);
      });
    });
  }

  openTestimonialModal(testimonialElement) {
    const avatar = testimonialElement.querySelector(
      "[data-testimonials-avatar]"
    );
    const title = testimonialElement.querySelector("[data-testimonials-title]");
    const text = testimonialElement.querySelector("[data-testimonials-text]");

    if (this.onOpenModal) {
      this.onOpenModal({
        avatar: avatar.src,
        alt: avatar.alt,
        title: title.innerHTML,
        text: text.innerHTML,
      });
    }
  }

  setModalCallback(callback) {
    this.onOpenModal = callback;
  }

  show() {
    this.container.style.display = "block";
    const article = this.container.querySelector("article");
    if (article) {
      article.classList.add("active");
    }
  }

  hide() {
    const article = this.container.querySelector("article");
    if (article) {
      article.classList.remove("active");
    }
  }
}

export default AboutPage;
