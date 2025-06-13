import { getPosts } from './api.js';
import { renderPosts } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const posts = await getPosts();
    renderPosts(posts);
  } catch (error) {
    console.error('Error loading posts:', error);
  }
});

