import { blogPosts } from '@/lib/data';
import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';
import GoogleAds from '@/components/GoogleAds';
import VisitTracker from '@/components/VisitTracker';

export default function Home() {

  const categories = ['Herbal Protocols', 'Metabolic Science', 'Visceral Fat'] as const;
  const postsByCategory = categories.map(category => ({
    category,
    posts: blogPosts.filter(post => post.category === category),
  }));

  return (
    <div className="bg-white">
      <VisitTracker />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ayurveda Meets
            <span className="text-[#87a96b]"> Metabolic Science</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Evidence-based insights on metabolic health, visceral fat reduction, and traditional 
            herbal protocols. Where ancient wisdom meets modern data science.
          </p>
        </div>
      </section>

      {/* Google Ads - Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <GoogleAds adSlot="1234567890" />
      </div>

      {/* Blog Feed by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {postsByCategory.map(({ category, posts }) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-[#87a96b]">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            {posts.length === 0 && (
              <p className="text-gray-500 italic">No posts in this category yet.</p>
            )}
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Newsletter />
      </section>

      {/* Google Ads - Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <GoogleAds adSlot="1234567890" />
      </div>
    </div>
  );
}
