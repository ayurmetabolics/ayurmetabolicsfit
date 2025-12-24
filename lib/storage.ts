// Client-side storage utilities for GitHub Pages (static export)
// Uses localStorage for persistence

export const storage = {
  // Visit counter
  getVisits: (): number => {
    if (typeof window === 'undefined') return 0;
    const stored = localStorage.getItem('site_visits');
    return stored ? parseInt(stored, 10) : 0;
  },

  incrementVisits: (): number => {
    if (typeof window === 'undefined') return 0;
    const current = storage.getVisits();
    const newCount = current + 1;
    localStorage.setItem('site_visits', newCount.toString());
    return newCount;
  },

  // Likes
  getLikes: (): Record<string, number> => {
    if (typeof window === 'undefined') return {};
    const stored = localStorage.getItem('post_likes');
    return stored ? JSON.parse(stored) : {};
  },

  getPostLikes: (postId: string): number => {
    const likes = storage.getLikes();
    return likes[postId] || 0;
  },

  incrementLike: (postId: string): number => {
    if (typeof window === 'undefined') return 0;
    const likes = storage.getLikes();
    const current = likes[postId] || 0;
    const newCount = current + 1;
    likes[postId] = newCount;
    localStorage.setItem('post_likes', JSON.stringify(likes));
    return newCount;
  },

  hasLiked: (postId: string): boolean => {
    if (typeof window === 'undefined') return false;
    const liked = localStorage.getItem(`liked_${postId}`);
    return liked === 'true';
  },

  setLiked: (postId: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(`liked_${postId}`, 'true');
  },

  // Comments
  getComments: (): Record<string, any[]> => {
    if (typeof window === 'undefined') return {};
    const stored = localStorage.getItem('post_comments');
    return stored ? JSON.parse(stored) : {};
  },

  getPostComments: (postId: string): any[] => {
    const comments = storage.getComments();
    return comments[postId] || [];
  },

  addComment: (postId: string, comment: any): void => {
    if (typeof window === 'undefined') return;
    const comments = storage.getComments();
    if (!comments[postId]) {
      comments[postId] = [];
    }
    comments[postId].push(comment);
    localStorage.setItem('post_comments', JSON.stringify(comments));
  },
};

