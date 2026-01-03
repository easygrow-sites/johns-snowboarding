import Link from 'next/link';

interface LocationCardProps {
  name: string;
  slug: string;
}

export default function LocationCard({ name, slug }: LocationCardProps) {
  return (
    <Link href={`/locations/${slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200 group">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-600 text-sm">Snowboard Hire Services</p>
        </div>
        <svg className="w-6 h-6 text-primary-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <span className="text-primary-600 font-semibold group-hover:underline">View Services in {name} →</span>
      </div>
    </Link>
  );
}
