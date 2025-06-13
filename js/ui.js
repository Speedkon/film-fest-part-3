export function renderPosts(posts) {
    const container = document.getElementById('post-list');
    container.innerHTML = '';
  
    posts.forEach(post => {
      const article = document.createElement('article');
      article.setAttribute('role', 'listitem');
      const title = document.createElement('h3');
      const desc = document.createElement('p');
  
      title.textContent = post.title;
      desc.textContent = post.description;
  
      article.appendChild(title);
      article.appendChild(desc);
      container.appendChild(article);
    });
  }
  