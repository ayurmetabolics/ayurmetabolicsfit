'use client';

import { MessageCircle } from 'lucide-react';

interface CommentButtonProps {
  postId: string;
  commentCount: number;
}

export default function CommentButton({ postId, commentCount }: CommentButtonProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
      <MessageCircle className="w-4 h-4" />
      <span className="text-sm font-medium">{commentCount}</span>
    </div>
  );
}

