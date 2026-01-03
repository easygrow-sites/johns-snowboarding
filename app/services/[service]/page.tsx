import { getAllServices, getAllServiceSlugs, getService } from '@/lib/services';
import { getAllLocations } from '@/lib/locations';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUniqueImage } from '@/lib/images';

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug: string) => ({
    service: slug,
  }));
}

export async function generateMetadata({ params }: { params: { service: string } }) {
  const service = getService(params.service);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.name} Perth - Professional Service | Johns Snowboarding`,
    description: `${service.description.substring(0, 155)}... Available across Perth, WA. Call 1300 567 669 for booking.`,
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getService(params.service);
  const allServices = getAllServices();
  const locations = getAllLocations();

  if (!service) {
    notFound();
  }

  const relatedServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={getUniqueImage(service.slug, 0)}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name} in Perth</h1>
          <p className="text-xl max-w-3xl">Professional {service.name.toLowerCase()} services across Perth, WA</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our {service.name}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="my-8 relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={getUniqueImage(service.slug, 1)}
                    alt={`${service.name} service`}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Our {service.name}?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Johns Snowboarding, we understand that quality equipment makes all the difference on the slopes. Our {service.name.toLowerCase()} service is designed to provide you with the best possible experience, whether you're a first-time snowboarder or a seasoned pro.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Premium quality equipment from leading brands</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Professional fitting and setup by experienced staff</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Regular maintenance and inspection of all equipment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Competitive pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Available across 50+ Perth suburbs</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Our Process Works</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Contact Us</h4>
                      <p className="text-gray-600">Call 1300 567 669 or book online to reserve your equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Expert Fitting</h4>
                      <p className="text-gray-600">Visit us for professional fitting and equipment setup</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Hit the Slopes</h4>
                      <p className="text-gray-600">Enjoy your snow adventure with confidence</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Easy Returns</h4>
                      <p className="text-gray-600">Return equipment when convenient, hassle-free</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">How far in advance should I book?</h4>
                    <p className="text-gray-600">
                      We recommend booking at least 3-5 days in advance, especially during peak season. However, we also offer same-day service subject to availability.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">What if the equipment doesn't fit properly?</h4>
                    <p className="text-gray-600">
                      Our expert staff will ensure proper fit during your initial setup. If you experience any issues, contact us immediately and we'll arrange an exchange.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Do you offer group discounts?</h4>
                    <p className="text-gray-600">
                      Yes! We offer special rates for groups of 5 or more. Contact us directly to discuss your requirements and get a custom quote.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">What areas do you service?</h4>
                    <p className="text-gray-600">
                      We service over 50 locations across Perth and surrounding areas. Check our locations page or contact us to confirm we service your suburb.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Is equipment insurance included?</h4>
                    <p className="text-gray-600">
                      Basic coverage is included with all rentals. Optional comprehensive insurance is available for an additional fee. We'll discuss all options during booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Box */}
              <div className="bg-primary-600 text-white p-8 rounded-lg shadow-lg mb-8 sticky top-8">
                <h3 className="text-2xl font-bold mb-4">Get a Free Quote</h3>
                <p className="mb-6">
                  Contact us today for {service.name.toLowerCase()} in Perth
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
                    <strong>Response Time:</strong> Within 2 hours
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Service Areas:</strong> 50+ Perth suburbs
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Available:</strong> 7 days a week
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  We provide {service.name.toLowerCase()} across Perth:
                </p>
                <div className="space-y-2">
                  {locations.slice(0, 10).map((location, idx: number) => (
                    <Link
                      key={location.slug}
                      href={`/${service.slug}-in-${location.slug}`}
                      className="block text-primary-600 hover:text-primary-700 hover:underline text-sm"
                    >
                      {service.name} in {location.name}
                    </Link>
                  ))}
                </div>
                <Link href="/locations" className="block mt-4 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                  View all locations →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, idx: number) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedService.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{relatedService.description}</p>
                  <span className="text-primary-600 font-semibold hover:underline">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
