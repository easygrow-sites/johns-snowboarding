import { getAllLocations, getAllLocationSlugs, getLocation } from '@/lib/locations';
import { getAllServices } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug: string) => ({
    location: slug,
  }));
}

export async function generateMetadata({ params }: { params: { location: string } }) {
  const location = getLocation(params.location);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Snowboard Hire ${location.name} - Professional Service | Johns Snowboarding`,
    description: `Professional snowboard hire services in ${location.name}, Perth. Quality equipment, expert fitting, competitive prices. Serving ${location.name} residents. Call 1300 567 669.`,
  };
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const location = getLocation(params.location);
  const services = getAllServices();

  if (!location) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1548777123-bfa12048bd7a?w=1200"
            alt={`Snowboarding in ${location.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Snowboard Hire in {location.name}</h1>
          <p className="text-xl max-w-3xl">Professional snowboard rental services for {location.name} residents</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Local Snowboard Hire Experts in {location.name}
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Johns Snowboarding is proud to serve the {location.name} community with professional snowboard hire services. Whether you're a local resident planning your next snow trip or visiting the area, we provide quality equipment at competitive prices.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our {location.name} customers appreciate our commitment to quality equipment, expert fitting services, and local knowledge. We understand the unique needs of Perth snowboarders and stock equipment suitable for Australian snow conditions.
                </p>

                <div className="my-8 relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200"
                    alt={`Snowboard hire in ${location.name}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Why {location.name} Residents Choose Johns Snowboarding
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Convenient Location:</strong> Easy access for {location.name} residents</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Quality Equipment:</strong> Premium boards and gear from top brands</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Expert Staff:</strong> Professional fitting and snowboarding advice</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Competitive Pricing:</strong> Best rates in Perth with transparent pricing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Flexible Options:</strong> Daily, weekly, and seasonal hire available</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {location.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {location.name} is a vibrant Perth suburb with a strong community of outdoor enthusiasts. Many {location.name} residents are passionate about snowboarding and make regular trips to Australian snow resorts. We're proud to be the trusted snowboard hire provider for this active community.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Booking your snowboard hire for your {location.name} trip is easy:
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Contact Us</h4>
                      <p className="text-gray-600">Call 1300 567 669 or use our online booking form</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Choose Your Equipment</h4>
                      <p className="text-gray-600">Select from our range based on your skill level and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Professional Fitting</h4>
                      <p className="text-gray-600">Visit our location for expert fitting and setup</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Hit the Slopes</h4>
                      <p className="text-gray-600">Enjoy your snow adventure with quality equipment</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Testimonials</h2>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-yellow-400">★★★★★</div>
                    </div>
                    <p className="text-gray-600 italic mb-3">
                      "Great service! As a {location.name} local, it's so convenient to have a quality snowboard hire service nearby. The equipment was in perfect condition."
                    </p>
                    <p className="text-gray-900 font-semibold">- Sarah M., {location.name}</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-yellow-400">★★★★★</div>
                    </div>
                    <p className="text-gray-600 italic mb-3">
                      "First time snowboarding and the team helped me choose the perfect equipment. The fitting was professional and they gave great advice for beginners."
                    </p>
                    <p className="text-gray-900 font-semibold">- James T., {location.name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Box */}
              <div className="bg-primary-600 text-white p-8 rounded-lg shadow-lg mb-8 sticky top-8">
                <h3 className="text-2xl font-bold mb-4">Book Now</h3>
                <p className="mb-6">
                  Get your snowboard hire sorted for {location.name}
                </p>
                <a
                  href="tel:1300567669"
                  className="block w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition mb-3"
                >
                  Call 1300 567 669
                </a>
                <Link
                  href="/contact"
                  className="block w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-primary-800 transition border-2 border-white"
                >
                  Request Quote
                </Link>
                <div className="mt-6 pt-6 border-t border-primary-500">
                  <p className="text-sm">
                    <strong>Serving:</strong> {location.name} & surrounding areas
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Response Time:</strong> Within 2 hours
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Available:</strong> 7 days a week
                  </p>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in {location.name}</h3>
                <div className="space-y-3">
                  {services.map((service, idx: number) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}-in-${location.slug}`}
                      className="block text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      {service.name} in {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Available Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, idx: number) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-in-${location.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                <span className="text-primary-600 font-semibold hover:underline">
                  {service.name} in {location.name} →
                </span>
              </Link>
            ))}
          </div>
          {services.length > 6 && (
            <div className="text-center mt-8">
              <Link href="/services" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                View All Services
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
