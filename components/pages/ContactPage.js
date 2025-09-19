class ContactPage {
  constructor(container) {
    this.container = container;
    this.form = null;
    this.formInputs = [];
    this.formBtn = null;
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
      <article class="contact" data-page="contact">
        <header>
          <h2 class="h2 article-title">Contact</h2>
        </header>

        <section class="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
              width="400" height="300" loading="lazy">
            </iframe>
          </figure>
        </section>

        <section class="contact-form">
          <h3 class="h3 form-title">Contact Form</h3>

          <form action="#" class="form" data-form>
            <div class="input-wrapper">
              <input type="text" name="fullname" class="form-input" placeholder="Full name" required data-form-input>
              <input type="email" name="email" class="form-input" placeholder="Email address" required data-form-input>
            </div>

            <textarea name="message" class="form-input" placeholder="Your Message" required data-form-input></textarea>

            <button class="form-btn" type="submit" disabled data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    `;

    this.initializeFormElements();
  }

  initializeFormElements() {
    this.form = this.container.querySelector("[data-form]");
    this.formInputs = this.container.querySelectorAll("[data-form-input]");
    this.formBtn = this.container.querySelector("[data-form-btn]");
  }

  bindEvents() {
    // Form validation
    this.formInputs.forEach(input => {
      input.addEventListener("input", () => {
        this.validateForm();
      });
    });

    // Form submission
    if (this.form) {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });
    }
  }

  validateForm() {
    if (this.form && this.formBtn) {
      if (this.form.checkValidity()) {
        this.formBtn.removeAttribute("disabled");
      } else {
        this.formBtn.setAttribute("disabled", "");
      }
    }
  }

  handleFormSubmit() {
    const formData = new FormData(this.form);
    const data = {
      fullname: formData.get('fullname'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    if (this.onFormSubmit) {
      this.onFormSubmit(data);
    } else {
      // Default behavior - you can customize this
      console.log('Form submitted:', data);
      this.showSuccessMessage();
    }
  }

  showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 15px;
      border-radius: 5px;
      z-index: 1000;
    `;
    successMessage.textContent = 'Message sent successfully!';
    
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 3000);

    // Reset form
    this.form.reset();
    this.formBtn.setAttribute("disabled", "");
  }

  setFormSubmitCallback(callback) {
    this.onFormSubmit = callback;
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

  updateMapLocation(embedUrl) {
    const iframe = this.container.querySelector('iframe');
    if (iframe && embedUrl) {
      iframe.src = embedUrl;
    }
  }

  setFormData(data) {
    const fullnameInput = this.container.querySelector('input[name="fullname"]');
    const emailInput = this.container.querySelector('input[name="email"]');
    const messageInput = this.container.querySelector('textarea[name="message"]');

    if (fullnameInput && data.fullname) fullnameInput.value = data.fullname;
    if (emailInput && data.email) emailInput.value = data.email;
    if (messageInput && data.message) messageInput.value = data.message;

    this.validateForm();
  }
}

export default ContactPage;
