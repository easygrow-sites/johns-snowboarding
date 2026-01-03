import { getAllServices, getAllServiceSlugs, getService } from '@/lib/services';
import { getAllLocations, getAllLocationSlugs, getLocation } from '@/lib/locations';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUniqueImage } from '@/lib/images';

// Parse slug like "snowboard-rental-in-perth-cbd"
function parseSlug(slug: string): { serviceSlug: string; locationSlug: string } | null {
  const parts = slug.split('-in-');
  if (parts.length !== 2) return null;
  return { serviceSlug: parts[0], locationSlug: parts[1] };
}

export async function generateStaticParams() {
  const serviceSlugs = getAllServiceSlugs();
  const locationSlugs = getAllLocationSlugs();
  const params = [];

  for (const serviceSlug of serviceSlugs) {
    for (const locationSlug of locationSlugs) {
      params.push({ slug: `${serviceSlug}-in-${locationSlug}` });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const parsed = parseSlug(params.slug);
  if (!parsed) return { title: 'Page Not Found' };

  const service = getService(parsed.serviceSlug);
  const location = getLocation(parsed.locationSlug);

  if (!service || !location) return { title: 'Page Not Found' };

  return {
    title: `${service.name} in ${location.name} - 24/7 Fast Response | Johns Snowboarding`,
    description: `Professional ${service.name.toLowerCase()} services in ${location.name}, Perth. Quality equipment, expert fitting, competitive prices. Call 1300 567 669 for immediate service.`,
  };
}

export default function ServiceLocationPage({ params }: { params: { slug: string } }) {
  const parsed = parseSlug(params.slug);

  if (!parsed) {
    notFound();
  }

  const service = getService(parsed.serviceSlug);
  const location = getLocation(parsed.locationSlug);
  const allServices = getAllServices();
  const allLocations = getAllLocations();

  if (!service || !location) {
    notFound();
  }

  const nearbyLocations = allLocations
    .filter((l) => l.slug !== location.slug)
    .slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={getUniqueImage(service.slug, 0)}
            alt={`${service.name} in ${location.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional {service.name} in {location.name}
          </h1>
          <p className="text-xl max-w-3xl mb-6">
            Fast, reliable {service.name.toLowerCase()} for {location.name} residents. Quality equipment, expert service, competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:1300567669" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition text-center">
              Call Now: 1300 567 669
            </a>
            <Link href="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition border-2 border-white text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
              <div className="text-gray-600 text-sm">Years in {location.name}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">2hrs</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-gray-600 text-sm">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Best {service.name} in {location.name}, Perth
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Looking for reliable {service.name.toLowerCase()} in {location.name}? Johns Snowboarding is your trusted local provider, serving {location.name} residents with premium snowboard equipment and expert fitting services. We understand the needs of Perth snowboarders and deliver quality equipment every time.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description} Our {location.name} customers appreciate our fast response times, professional service, and commitment to quality. Whether you're planning a weekend trip or need seasonal equipment, we have the perfect solution for you.
                </p>

                <div className="my-8 relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={getUniqueImage(service.slug, 1)}
                    alt={`${service.name} service in ${location.name}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Why Choose Our {service.name} in {location.name}?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  As {location.name}'s premier snowboard hire service, we pride ourselves on delivering exceptional equipment and service to our local community. Our team consists of experienced snowboarders who understand what it takes to have a great time on the mountain.
                </p>

                <div className="bg-primary-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Sets Us Apart in {location.name}:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Local Expertise:</strong> Deep knowledge of {location.name} and Perth snowboarding community</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Premium Equipment:</strong> Latest models from top brands, maintained to perfection</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Expert Fitting:</strong> Professional setup ensuring comfort and performance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Fast Response:</strong> Quick turnaround for {location.name} bookings</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Competitive Pricing:</strong> Best rates in {location.name} with no hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Flexible Options:</strong> Daily, weekly, and seasonal packages available</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our {service.name} Process in {location.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Getting set up with quality snowboard equipment is simple when you work with Johns Snowboarding. Here's how our {service.name.toLowerCase()} process works for {location.name} customers:
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Contact Our {location.name} Team</h4>
                      <p className="text-gray-600">Call 1300 567 669 or submit an online enquiry. We respond within 2 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Discuss Your Requirements</h4>
                      <p className="text-gray-600">Tell us about your skill level, trip dates, and any specific equipment preferences.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Expert Equipment Selection</h4>
                      <p className="text-gray-600">We'll recommend the perfect equipment for your needs and arrange fitting.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Professional Fitting Session</h4>
                      <p className="text-gray-600">Visit us for thorough fitting and equipment setup by experienced staff.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Hit the Slopes!</h4>
                      <p className="text-gray-600">Enjoy your snow adventure with confidence in quality equipment.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Serving {location.name} and Surrounding Areas
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  While we specialize in serving {location.name}, our service area extends throughout Perth. We're proud to be the trusted choice for snowboard hire across the region, with hundreds of satisfied customers who return to us season after season.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions - {service.name} {location.name}
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      How quickly can I get {service.name.toLowerCase()} in {location.name}?
                    </h4>
                    <p className="text-gray-600">
                      We offer same-day service for most bookings. Contact us before 2pm for same-day pickup, subject to equipment availability.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Do you service {location.name} specifically?
                    </h4>
                    <p className="text-gray-600">
                      Yes! We proudly serve {location.name} and all surrounding Perth suburbs. Our team is familiar with the {location.name} area and can provide convenient service.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      What makes you the best choice for {service.name.toLowerCase()} in {location.name}?
                    </h4>
                    <p className="text-gray-600">
                      Our combination of premium equipment, expert knowledge, competitive pricing, and local service makes us the top choice for {location.name} residents. We're passionate snowboarders serving fellow enthusiasts.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      How much does {service.name.toLowerCase()} cost in {location.name}?
                    </h4>
                    <p className="text-gray-600">
                      Our pricing is competitive and transparent. Costs vary based on equipment type and rental duration. Contact us for a free, no-obligation quote tailored to your needs.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Can I book online for {location.name} service?
                    </h4>
                    <p className="text-gray-600">
                      Yes! You can book online or call us directly at 1300 567 669. Both methods are quick and convenient.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Box */}
              <div className="bg-primary-600 text-white p-8 rounded-lg shadow-lg mb-8 sticky top-8">
                <h3 className="text-2xl font-bold mb-4">Call for {service.name}</h3>
                <p className="mb-6">
                  Fast service in {location.name}
                </p>
                <a
                  href="tel:1300567669"
                  className="block w-full bg-white text-primary-600 px-6 py-4 rounded-lg font-bold text-center hover:bg-gray-100 transition mb-3 text-lg"
                >
                  1300 567 669
                </a>
                <Link
                  href="/contact"
                  className="block w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-primary-800 transition border-2 border-white"
                >
                  Get Free Quote
                </Link>
                <div className="mt-6 pt-6 border-t border-primary-500">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>2 hour response time</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Same-day service available</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Serving {location.name}</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>15+ years experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nearby Locations */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {service.name} Near {location.name}
                </h3>
                <div className="space-y-2">
                  {nearbyLocations.map((nearbyLocation, idx: number) => (
                    <Link
                      key={nearbyLocation.slug}
                      href={`/${service.slug}-in-${nearbyLocation.slug}`}
                      className="block text-primary-600 hover:text-primary-700 hover:underline text-sm"
                    >
                      {service.name} in {nearbyLocation.name}
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Other Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allServices
              .filter((s) => s.slug !== service.slug)
              .slice(0, 6)
              .map((otherService, idx: number) => (
                <Link
                  key={otherService.slug}
                  href={`/${otherService.slug}-in-${location.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{otherService.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{otherService.description}</p>
                  <span className="text-primary-600 font-semibold hover:underline text-sm">
                    {otherService.name} in {location.name} →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
