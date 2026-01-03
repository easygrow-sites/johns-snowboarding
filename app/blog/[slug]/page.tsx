import { getAllBlogSlugs, getBlogPost } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug: string) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Johns Snowboarding Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords?.join(', '),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = markdownToHtml(post.content);

  return (
    <>
      {/* Hero Section */}
      <article>
        <header className="relative bg-gray-900 text-white py-20">
          {post.featuredImage && (
            <div className="absolute inset-0 opacity-40">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-gray-300 mb-4">
              {new Date(post.date).toLocaleDateString('en-AU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              {post.author && ` • By ${post.author}`}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-200">{post.excerpt}</p>
          </div>
        </header>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Additional Images */}
            {post.images && post.images.length > 0 && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.images.map((image: string, idx: number) => (
                  <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${post.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Keywords */}
            {post.keywords && post.keywords.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Topics:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword: string, idx: number) => (
                    <span
                      key={idx}
                      className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Info */}
            {post.author && (
              <div className="mt-12 bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">About the Author</h3>
                <p className="text-gray-600">
                  <strong>{post.author}</strong> is part of the Johns Snowboarding team, sharing expertise and passion for snowboarding with the Perth community.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Snowboard Equipment?</h2>
            <p className="text-xl mb-8">
              Get quality snowboard hire from Perth's trusted experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1300567669"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Call 1300 567 669
              </a>
              <Link
                href="/contact"
                className="bg-primary-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-800 transition border-2 border-white"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
