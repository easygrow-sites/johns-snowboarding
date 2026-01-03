import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Johns Snowboarding | Perth\'s Trusted Snowboard Hire',
  description: 'Learn about Johns Snowboarding, Perth\'s premier snowboard hire service with 15+ years of experience. Quality equipment, expert service, and a passion for snowboarding.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Johns Snowboarding</h1>
          <p className="text-xl">Perth's trusted snowboard hire experts since 2008</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Johns Snowboarding was founded in 2008 with a simple mission: provide Perth residents with access to quality snowboard equipment at affordable prices. What started as a small operation has grown into one of Perth's most trusted snowboard hire services.
                </p>
                <p>
                  With over 15 years of experience in the industry, we understand what riders need. Whether you're taking your first trip to the snow or you're a seasoned boarder looking for performance equipment, we have the gear and expertise to set you up for success.
                </p>
                <p>
                  Our team consists of passionate snowboarders who live and breathe the sport. We don't just rent equipment – we share our knowledge, offer fitting advice, and ensure every customer leaves with gear that's perfect for their skill level and riding style.
                </p>
                <p>
                  Today, we serve over 50 locations across Perth and have helped thousands of customers experience the thrill of snowboarding with properly fitted, high-quality equipment.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200"
                alt="Snowboarding equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quality First</h3>
              <p className="text-gray-600">
                We invest in premium equipment from leading brands and maintain everything to the highest standards. Your safety and enjoyment are our top priorities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Customer Service</h3>
              <p className="text-gray-600">
                We treat every customer like family. From expert fitting advice to after-hours support, we're here to ensure you have an amazing experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expertise</h3>
              <p className="text-gray-600">
                Our team consists of experienced snowboarders who understand the sport inside and out. We share our knowledge to help you make the right choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                  alt="John Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">John Smith</h3>
              <p className="text-primary-600 font-semibold mb-2">Founder & CEO</p>
              <p className="text-gray-600">
                20+ years snowboarding experience. Passionate about sharing the sport with Perth residents.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-primary-600 font-semibold mb-2">Equipment Manager</p>
              <p className="text-gray-600">
                Expert in equipment fitting and maintenance. Ensures every board is in perfect condition.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
                  alt="Mike Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Mike Chen</h3>
              <p className="text-primary-600 font-semibold mb-2">Customer Service Lead</p>
              <p className="text-gray-600">
                Dedicated to providing exceptional service. Always ready to help with bookings and advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Certifications & Memberships</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900">Australian Ski Association</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900">Equipment Safety Certified</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900">Perth Business Award Winner</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900">5-Star Customer Rating</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Johns Snowboarding Difference?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who trust us for their snowboard hire needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300567669" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Call 1300 567 669
            </a>
            <Link href="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition border-2 border-white">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
