'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { storage } from '@/lib/storage';

interface LikeButtonProps {
  postId: string;
  initialLikes: number;
}

export default function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Load saved likes and liked status from localStorage
    const savedLikes = storage.getPostLikes(postId);
    if (savedLikes > 0) {
      setLikes(savedLikes);
    }
    setLiked(storage.hasLiked(postId));
  }, [postId]);

  const handleLike = () => {
    if (liked) return;
    
    setLiked(true);
    const newLikes = storage.incrementLike(postId);
    setLikes(newLikes);
    storage.setLiked(postId);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
        liked 
          ? 'bg-red-100 text-red-600' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
      disabled={liked}
    >
      <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
      <span className="text-sm font-medium">{likes}</span>
    </button>
  );
}

