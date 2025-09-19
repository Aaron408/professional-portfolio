class ResumePage {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <article class="resume" data-page="resume">
        <header>
          <h2 class="h2 article-title">Resume</h2>
        </header>

        <section class="timeline">
          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 class="h3">Education</h3>
          </div>

          <ol class="timeline-list">
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">University school of the arts</h4>
              <span>2007 — 2008</span>
              <p class="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias exceptur.
              </p>
            </li>
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">New york academy of art</h4>
              <span>2006 — 2007</span>
              <p class="timeline-text">
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..
              </p>
            </li>
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">High school of art and design</h4>
              <span>2002 — 2004</span>
              <p class="timeline-text">
                Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                magni dolores eos.
              </p>
            </li>
          </ol>
        </section>

        <section class="timeline">
          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 class="h3">Experience</h3>
          </div>

          <ol class="timeline-list">
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">Creative director</h4>
              <span>2015 — Present</span>
              <p class="timeline-text">
                Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                molestias exceptur.
              </p>
            </li>
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">Art director</h4>
              <span>2013 — 2015</span>
              <p class="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias exceptur.
              </p>
            </li>
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">Web designer</h4>
              <span>2010 — 2013</span>
              <p class="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias exceptur.
              </p>
            </li>
          </ol>
        </section>
      </article>
    `;
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

  updateEducation(educationData) {
    const educationList = this.container.querySelector('.timeline-list');
    if (educationList && educationData) {
      educationList.innerHTML = educationData.map(item => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${item.title}</h4>
          <span>${item.period}</span>
          <p class="timeline-text">${item.description}</p>
        </li>
      `).join('');
    }
  }

}

export default ResumePage;
