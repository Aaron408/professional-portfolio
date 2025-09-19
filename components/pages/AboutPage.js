class AboutPage {
  constructor(container, data = null) {
    this.container = container;
    this.testimonialsModal = null;
    this.data = data || {
      profile: { about: ["Default about text..."] },
      services: [],
      testimonials: [],
      clients: []
    };
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    const { profile, services, testimonials, clients } = this.data;
    
    // Generate about text
    const aboutText = profile.about.map(paragraph => 
      `<p>${paragraph}</p>`
    ).join('');

    // Generate services
    const servicesHTML = services.map(service => `
      <li class="service-item">
        <div class="service-icon-box">
          <img src="${service.icon}" alt="${service.title} icon" width="40">
        </div>
        <div class="service-content-box">
          <h4 class="h4 service-item-title">${service.title}</h4>
          <p class="service-item-text">${service.description}</p>
        </div>
      </li>
    `).join('');

    // Generate testimonials
    const testimonialsHTML = testimonials.map(testimonial => `
      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <img src="${testimonial.avatar}" alt="${testimonial.name}" width="60" data-testimonials-avatar>
          </figure>
          <h4 class="h4 testimonials-item-title" data-testimonials-title>${testimonial.name}</h4>
          <div class="testimonials-text" data-testimonials-text>
            <p>${testimonial.text}</p>
          </div>
        </div>
      </li>
    `).join('');

    // Generate clients
    const clientsHTML = clients.map(client => `
      <li class="clients-item">
        <a href="${client.link}">
          <img src="${client.logo}" alt="${client.name}">
        </a>
      </li>
    `).join('');

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

        <section class="testimonials">
          <h3 class="h3 testimonials-title">Testimonials</h3>
          <ul class="testimonials-list has-scrollbar">
            ${testimonialsHTML}
          </ul>
        </section>

        <section class="clients">
          <h3 class="h3 clients-title">Clients</h3>
          <ul class="clients-list has-scrollbar">
            ${clientsHTML}
          </ul>
        </section>
      </article>
    `;
  }

  bindEvents() {
    const testimonialsItems = this.container.querySelectorAll("[data-testimonials-item]");
    testimonialsItems.forEach(item => {
      item.addEventListener("click", (e) => {
        this.openTestimonialModal(e.currentTarget);
      });
    });
  }

  openTestimonialModal(testimonialElement) {
    const avatar = testimonialElement.querySelector("[data-testimonials-avatar]");
    const title = testimonialElement.querySelector("[data-testimonials-title]");
    const text = testimonialElement.querySelector("[data-testimonials-text]");

    if (this.onOpenModal) {
      this.onOpenModal({
        avatar: avatar.src,
        alt: avatar.alt,
        title: title.innerHTML,
        text: text.innerHTML
      });
    }
  }

  setModalCallback(callback) {
    this.onOpenModal = callback;
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
}

export default AboutPage;
