class BlogPage {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <article class="blog" data-page="blog">
        <header>
          <h2 class="h2 article-title">Blog</h2>
        </header>

        <section class="blog-posts">
          <ul class="blog-posts-list">
            <li class="blog-post-item">
              <a href="#">
                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-1.jpg" alt="Design conferences in 2022" loading="lazy">
                </figure>
                <div class="blog-content">
                  <div class="blog-meta">
                    <p class="blog-category">Design</p>
                    <span class="dot"></span>
                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 class="h3 blog-item-title">Design conferences in 2022</h3>
                  <p class="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>
                </div>
              </a>
            </li>
            <li class="blog-post-item">
              <a href="#">
                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-2.jpg" alt="Best fonts every designer" loading="lazy">
                </figure>
                <div class="blog-content">
                  <div class="blog-meta">
                    <p class="blog-category">Design</p>
                    <span class="dot"></span>
                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 class="h3 blog-item-title">Best fonts every designer</h3>
                  <p class="blog-text">
                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                  </p>
                </div>
              </a>
            </li>
            <li class="blog-post-item">
              <a href="#">
                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-3.jpg" alt="Design digest #80" loading="lazy">
                </figure>
                <div class="blog-content">
                  <div class="blog-meta">
                    <p class="blog-category">Design</p>
                    <span class="dot"></span>
                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 class="h3 blog-item-title">Design digest #80</h3>
                  <p class="blog-text">
                    Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                  </p>
                </div>
              </a>
            </li>
            <li class="blog-post-item">
              <a href="#">
                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-4.jpg" alt="UI interactions of the week" loading="lazy">
                </figure>
                <div class="blog-content">
                  <div class="blog-meta">
                    <p class="blog-category">Design</p>
                    <span class="dot"></span>
                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 class="h3 blog-item-title">UI interactions of the week</h3>
                  <p class="blog-text">
                    Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                  </p>
                </div>
              </a>
            </li>
            <li class="blog-post-item">
              <a href="#">
                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-5.jpg" alt="The forgotten art of spacing" loading="lazy">
                </figure>
                <div class="blog-content">
                  <div class="blog-meta">
                    <p class="blog-category">Design</p>
                    <span class="dot"></span>
                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 class="h3 blog-item-title">The forgotten art of spacing</h3>
                  <p class="blog-text">
                    Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </a>
            </li>
            <li class="blog-post-item">
              <a href="#">
                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-6.jpg" alt="Design digest #79" loading="lazy">
                </figure>
                <div class="blog-content">
                  <div class="blog-meta">
                    <p class="blog-category">Design</p>
                    <span class="dot"></span>
                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 class="h3 blog-item-title">Design digest #79</h3>
                  <p class="blog-text">
                    Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                  </p>
                </div>
              </a>
            </li>
          </ul>
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

  addBlogPost(post) {
    const blogList = this.container.querySelector('.blog-posts-list');
    if (blogList) {
      const blogItem = document.createElement('li');
      blogItem.className = 'blog-post-item';
      
      blogItem.innerHTML = `
        <a href="${post.link || '#'}">
          <figure class="blog-banner-box">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${post.category}</p>
              <span class="dot"></span>
              <time datetime="${post.date}">${post.formattedDate}</time>
            </div>
            <h3 class="h3 blog-item-title">${post.title}</h3>
            <p class="blog-text">${post.excerpt}</p>
          </div>
        </a>
      `;
      
      blogList.appendChild(blogItem);
    }
  }

  loadBlogPosts(posts) {
    const blogList = this.container.querySelector('.blog-posts-list');
    if (blogList && posts) {
      blogList.innerHTML = posts.map(post => `
        <li class="blog-post-item">
          <a href="${post.link || '#'}">
            <figure class="blog-banner-box">
              <img src="${post.image}" alt="${post.title}" loading="lazy">
            </figure>
            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">${post.category}</p>
                <span class="dot"></span>
                <time datetime="${post.date}">${post.formattedDate}</time>
              </div>
              <h3 class="h3 blog-item-title">${post.title}</h3>
              <p class="blog-text">${post.excerpt}</p>
            </div>
          </a>
        </li>
      `).join('');
    }
  }
}

export default BlogPage;
