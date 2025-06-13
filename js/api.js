export async function getPosts() {
    const response = await fetch('data/posts.json');
    if (!response.ok) {
      throw new Error('Failed to load posts');
    }
    return await response.json();
  }
  
  