import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import LikeButton from '@/components/LikeButton';
import CommentSection from '@/components/CommentSection';
import GoogleAds from '@/components/GoogleAds';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    'Herbal Protocols': 'bg-[#87a96b] text-white',
    'Metabolic Science': 'bg-[#d4a574] text-white',
    'Visceral Fat': 'bg-[#8b7355] text-white',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[post.category] || 'bg-gray-200'}`}>
              {post.category}
            </span>
            <time className="text-sm text-gray-500">
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </time>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="text-gray-600">
              By <span className="font-semibold text-gray-900">{post.author}</span>
            </div>
            <LikeButton postId={post.id} initialLikes={post.likes} />
          </div>
        </header>

        {/* Google Ads - Top */}
        <div className="my-8">
          <GoogleAds adSlot="1234567890" />
        </div>

        {/* Content */}
        <div className="text-gray-700 leading-relaxed">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{children}</h3>,
              p: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Google Ads - Middle */}
        <div className="my-12">
          <GoogleAds adSlot="1234567890" />
        </div>

        {/* Comment Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <CommentSection postId={post.id} />
        </div>

        {/* Google Ads - Bottom */}
        <div className="my-12">
          <GoogleAds adSlot="1234567890" />
        </div>
      </article>
    </div>
  );
}

