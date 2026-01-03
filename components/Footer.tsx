import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Johns Snowboarding</h3>
            <p className="text-gray-400 mb-4">
              Perth's premier snowboard hire service. Quality equipment for every skill level.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <a href="tel:1300567669" className="hover:text-primary-400">1300 567 669</a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:info@johnssnowboarding.com.au" className="hover:text-primary-400">info@johnssnowboarding.com.au</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary-400">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary-400">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400">Services</Link></li>
              <li><Link href="/locations" className="text-gray-400 hover:text-primary-400">Service Areas</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary-400">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/snowboard-rental" className="text-gray-400 hover:text-primary-400">Snowboard Rental</Link></li>
              <li><Link href="/services/boot-hire" className="text-gray-400 hover:text-primary-400">Boot Hire</Link></li>
              <li><Link href="/services/complete-package-hire" className="text-gray-400 hover:text-primary-400">Complete Packages</Link></li>
              <li><Link href="/services/kids-snowboard-hire" className="text-gray-400 hover:text-primary-400">Kids Equipment</Link></li>
              <li><Link href="/services/seasonal-hire" className="text-gray-400 hover:text-primary-400">Seasonal Hire</Link></li>
              <li><Link href="/services/snowboard-tuning-maintenance" className="text-gray-400 hover:text-primary-400">Tuning & Maintenance</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li><Link href="/locations/perth-cbd" className="text-gray-400 hover:text-primary-400">Perth CBD</Link></li>
              <li><Link href="/locations/fremantle" className="text-gray-400 hover:text-primary-400">Fremantle</Link></li>
              <li><Link href="/locations/joondalup" className="text-gray-400 hover:text-primary-400">Joondalup</Link></li>
              <li><Link href="/locations/mandurah" className="text-gray-400 hover:text-primary-400">Mandurah</Link></li>
              <li><Link href="/locations/subiaco" className="text-gray-400 hover:text-primary-400">Subiaco</Link></li>
              <li><Link href="/locations" className="text-gray-400 hover:text-primary-400">View All Areas</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Johns Snowboarding. All rights reserved. Serving Perth, WA.</p>
          <p className="mt-2 text-sm">ABN: 12 345 678 901</p>
        </div>
      </div>
    </footer>
  );
}
