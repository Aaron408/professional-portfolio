class Sidebar {
  constructor(container, data = null) {
    this.container = container;
    this.sidebar = null;
    this.sidebarBtn = null;
    this.data = data || {
      profile: {
        name: "Aaron Reyes",
        title: "FullStack Developer",
        avatar: "./assets/images/ProfilePhoto.jpg"
      },
      contacts: {
        email: "reruaarr@gmail.com",
        phone: "+52 (442) 422-5776",
        birthday: "June 26, 2004",
        location: "Querétaro, Qro, México"
      },
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    };
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    const { profile, contacts, social } = this.data;
    
    this.container.innerHTML = `
      <aside class="sidebar" data-sidebar>
        <div class="sidebar-info">
          <figure class="avatar-box">
            <img src="${profile.avatar}" alt="${profile.name}" width="80">
          </figure>

          <div class="info-content">
            <h1 class="name" title="${profile.name}">${profile.name}</h1>
            <p class="title">${profile.title}</p>
          </div>

          <button class="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div class="sidebar-info_more">
          <div class="separator"></div>

          <ul class="contacts-list">
            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div class="contact-info">
                <p class="contact-title">Email</p>
                <a href="mailto:${contacts.email}" class="contact-link">${contacts.email}</a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div class="contact-info">
                <p class="contact-title">Phone</p>
                <a href="tel:${contacts.phone.replace(/\s+/g, '')}" class="contact-link">${contacts.phone}</a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <div class="contact-info">
                <p class="contact-title">Birthday</p>
                <time datetime="${contacts.birthday}">${contacts.birthday}</time>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div class="contact-info">
                <p class="contact-title">Location</p>
                <address>${contacts.location}</address>
              </div>
            </li>
          </ul>

          <div class="separator"></div>

          </div>
          </aside>
          `;
          // <ul class="social-list">
          //   <li class="social-item">
          //     <a href="${social.facebook}" class="social-link">
          //       <ion-icon name="logo-facebook"></ion-icon>
          //     </a>
          //   </li>
          //   <li class="social-item">
          //     <a href="${social.twitter}" class="social-link">
          //       <ion-icon name="logo-twitter"></ion-icon>
          //     </a>
          //   </li>
          //   <li class="social-item">
          //     <a href="${social.instagram}" class="social-link">
          //       <ion-icon name="logo-instagram"></ion-icon>
          //     </a>
          //   </li>
          // </ul>

    this.sidebar = this.container.querySelector("[data-sidebar]");
    this.sidebarBtn = this.container.querySelector("[data-sidebar-btn]");
  }

  bindEvents() {
    if (this.sidebarBtn) {
      this.sidebarBtn.addEventListener("click", () => {
        this.toggleSidebar();
      });
    }
  }

  toggleSidebar() {
    if (this.sidebar) {
      this.sidebar.classList.toggle("active");
    }
  }

  updateProfile(profileData) {
    const nameElement = this.container.querySelector(".name");
    const titleElement = this.container.querySelector(".title");
    const avatarElement = this.container.querySelector(".avatar-box img");
    
    if (nameElement) nameElement.textContent = profileData.name;
    if (titleElement) titleElement.textContent = profileData.title;
    if (avatarElement) {
      avatarElement.src = profileData.avatar;
      avatarElement.alt = profileData.name;
    }
  }

  updateContacts(contactsData) {
    const emailLink = this.container.querySelector('a[href^="mailto:"]');
    const phoneLink = this.container.querySelector('a[href^="tel:"]');
    const birthdayElement = this.container.querySelector('time');
    const locationElement = this.container.querySelector('address');

    if (emailLink) emailLink.href = `mailto:${contactsData.email}`;
    if (phoneLink) phoneLink.href = `tel:${contactsData.phone}`;
    if (birthdayElement) birthdayElement.textContent = contactsData.birthday;
    if (locationElement) locationElement.textContent = contactsData.location;
  }
}

export default Sidebar;
