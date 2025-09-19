class TestimonialsModal {
  constructor(container) {
    this.container = container;
    this.modalContainer = null;
    this.overlay = null;
    this.modalCloseBtn = null;
    this.modalImg = null;
    this.modalTitle = null;
    this.modalText = null;
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
      <div class="modal-container" data-modal-container>
        <div class="overlay" data-overlay></div>

        <section class="testimonials-modal">
          <button class="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
              <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img>
            </figure>
            <img src="./assets/images/icon-quote.svg" alt="quote icon">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>
            <time datetime="2021-06-14">14 June, 2021</time>
            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
    `;

    this.initializeElements();
  }

  initializeElements() {
    this.modalContainer = this.container.querySelector("[data-modal-container]");
    this.overlay = this.container.querySelector("[data-overlay]");
    this.modalCloseBtn = this.container.querySelector("[data-modal-close-btn]");
    this.modalImg = this.container.querySelector("[data-modal-img]");
    this.modalTitle = this.container.querySelector("[data-modal-title]");
    this.modalText = this.container.querySelector("[data-modal-text]");
  }

  bindEvents() {
    // Close button event
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener("click", () => {
        this.close();
      });
    }

    // Overlay click event
    if (this.overlay) {
      this.overlay.addEventListener("click", () => {
        this.close();
      });
    }

    // Escape key event
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.close();
      }
    });
  }

  open(testimonialData) {
    if (!testimonialData) return;

    // Update modal content
    if (this.modalImg) {
      this.modalImg.src = testimonialData.avatar;
      this.modalImg.alt = testimonialData.alt;
    }

    if (this.modalTitle) {
      this.modalTitle.innerHTML = testimonialData.title;
    }

    if (this.modalText) {
      this.modalText.innerHTML = testimonialData.text;
    }

    // Show modal
    if (this.modalContainer) {
      this.modalContainer.classList.add("active");
    }

    if (this.overlay) {
      this.overlay.classList.add("active");
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove("active");
    }

    if (this.overlay) {
      this.overlay.classList.remove("active");
    }

    // Restore body scroll
    document.body.style.overflow = '';
  }

  isOpen() {
    return this.modalContainer && this.modalContainer.classList.contains("active");
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  updateDate(dateString) {
    const timeElement = this.container.querySelector('time');
    if (timeElement && dateString) {
      timeElement.textContent = dateString;
      timeElement.setAttribute('datetime', dateString);
    }
  }
}

export default TestimonialsModal;
