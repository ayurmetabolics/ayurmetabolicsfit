import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { format } from 'date-fns';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    'Herbal Protocols': 'bg-[#87a96b] text-white',
    'Metabolic Science': 'bg-[#d4a574] text-white',
    'Visceral Fat': 'bg-[#8b7355] text-white',
  };

  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.id}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-200'}`}>
              {post.category}
            </span>
            <time className="text-sm text-gray-500">
              {format(new Date(post.publishedAt), 'MMM d, yyyy')}
            </time>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#87a96b] transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <LikeButton postId={post.id} initialLikes={post.likes} />
              <CommentButton postId={post.id} commentCount={post.comments.length} />
            </div>
            <span className="text-sm text-gray-500">Read more →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

