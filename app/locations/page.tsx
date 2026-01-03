import { getAllLocations } from '@/lib/locations';
import LocationCard from '@/components/LocationCard';
import Link from 'next/link';

export const metadata = {
  title: 'Service Areas - Snowboard Hire Across Perth | Johns Snowboarding',
  description: 'Johns Snowboarding services 50+ locations across Perth, WA. Find snowboard hire services in your suburb. Professional equipment rental throughout Perth metro area.',
};

export default function LocationsPage() {
  const locations = getAllLocations();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h1>
          <p className="text-xl max-w-3xl">
            Professional snowboard hire services across {locations.length}+ locations in Perth and surrounding areas.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to serve customers across the Perth metropolitan area and beyond. Find your suburb below to see our available services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, idx: number) => (
              <LocationCard key={location.slug} name={location.name} slug={location.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perth-Wide Coverage</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Johns Snowboarding is proud to be Perth's most accessible snowboard hire service. We service over {locations.length} suburbs across the Perth metropolitan area, from the CBD to the outer suburbs.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Whether you're in the northern suburbs like Joondalup and Hillarys, the western coastal areas like Cottesloe and Scarborough, the southern regions including Fremantle and Mandurah, or anywhere in between, we've got you covered.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Can't find your suburb listed? Contact us anyway! We're always expanding our service areas and may be able to accommodate your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Local?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-primary-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">
                Being locally based means we can respond quickly to your needs. Same-day service available across most Perth suburbs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-primary-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                We understand Perth's unique needs and can provide equipment recommendations based on where you're heading.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-primary-600 text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Focused</h3>
              <p className="text-gray-600">
                As a local business, we're committed to serving our community with integrity and building long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Snowboard Hire in Your Area
          </h2>
          <p className="text-xl mb-8">
            Contact us today to confirm we service your suburb and get a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300567669" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Call 1300 567 669
            </a>
            <Link href="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition border-2 border-white">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
