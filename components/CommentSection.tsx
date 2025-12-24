'use client';

import { useState, useEffect } from 'react';
import { Comment } from '@/lib/types';
import { format } from 'date-fns';
import { storage } from '@/lib/storage';

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = () => {
    try {
      const savedComments = storage.getPostComments(postId);
      setComments(savedComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    setSubmitting(true);
    try {
      const newComment: Comment = {
        id: Date.now().toString(),
        author,
        content,
        createdAt: new Date().toISOString(),
      };

      storage.addComment(postId, newComment);
      setComments([...comments, newComment]);
      setAuthor('');
      setContent('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg">
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#87a96b] focus:border-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Comment
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#87a96b] focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-2 bg-[#87a96b] text-white rounded-lg font-semibold hover:bg-[#6b8550] transition-colors disabled:opacity-50"
        >
          {submitting ? 'Submitting...' : 'Post Comment'}
        </button>
      </form>

      {/* Comments List */}
      {loading ? (
        <p className="text-gray-500">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">{comment.author}</span>
                <time className="text-sm text-gray-500">
                  {format(new Date(comment.createdAt), 'MMM d, yyyy')}
                </time>
              </div>
              <p className="text-gray-700 leading-relaxed">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

