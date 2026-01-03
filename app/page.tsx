import Image from 'next/image';
import Link from 'next/link';
import { getAllServices } from '@/lib/services';
import { getAllLocations } from '@/lib/locations';
import ServiceCard from '@/components/ServiceCard';
import { getUniqueImage } from '@/lib/images';

export const metadata = {
  title: 'Johns Snowboarding - Premier Snowboard Hire Perth, WA',
  description: 'Perth\'s #1 snowboard hire service. Quality equipment, expert fitting, competitive prices. Serving 50+ suburbs across Perth. Book online or call 1300 567 669.',
};

export default function HomePage() {
  const services = getAllServices();
  const locations = getAllLocations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1548777123-bfa12048bd7a?w=1200"
            alt="Snowboarding"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premier Snowboard Hire in Perth
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Quality snowboard equipment for all skill levels. Professional fitting, competitive prices, and equipment ready when you are.
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
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Service Areas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Snowboard Hire Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner packages to advanced performance rentals, we have everything you need for an amazing day on the slopes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, idx: number) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                description={service.description}
                image={getUniqueImage(service.slug, idx)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Perth Wide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional snowboard hire services across {locations.length}+ locations in Perth and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {locations.slice(0, 20).map((location, idx: number) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition"
              >
                {location.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/locations" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Johns Snowboarding?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Quality Equipment</h3>
              <p className="text-gray-600">
                Premium snowboards, boots, and accessories from top brands. All equipment professionally maintained and regularly updated.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Expert Fitting</h3>
              <p className="text-gray-600">
                Our experienced team ensures perfect fit and comfort. Professional advice for all skill levels from beginners to experts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Best rates in Perth with no hidden fees. Seasonal packages and group discounts available. Book online for special offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Hit the Slopes?
          </h2>
          <p className="text-xl mb-8">
            Book your snowboard hire today and experience the best equipment Perth has to offer.
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
