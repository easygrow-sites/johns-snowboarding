import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Snowboarding Blog - Tips, Guides & News | Johns Snowboarding',
  description: 'Expert snowboarding tips, equipment guides, destination reviews, and industry news from Johns Snowboarding Perth. Learn from experienced riders.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Snowboarding Blog</h1>
          <p className="text-xl max-w-3xl">
            Expert tips, equipment guides, and snowboarding insights from the Johns Snowboarding team
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx: number) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
              <p className="text-gray-600">
                We're working on exciting snowboarding content. Check back soon for expert tips and guides!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blog Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🏂</div>
              <h3 className="font-bold text-gray-900 mb-2">Equipment Guides</h3>
              <p className="text-gray-600 text-sm">Reviews and recommendations for boards, boots, and gear</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Beginner Tips</h3>
              <p className="text-gray-600 text-sm">Getting started with snowboarding and essential skills</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">⛰️</div>
              <h3 className="font-bold text-gray-900 mb-2">Destinations</h3>
              <p className="text-gray-600 text-sm">Australian snow resorts and trip planning guides</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2">Maintenance</h3>
              <p className="text-gray-600 text-sm">Care tips and equipment maintenance advice</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
