'use client';

import { works } from '@/lib/works';
import Link from 'next/link';
import { ProductImage } from '@/components/product-image';

export default function WorksPage() {
  return (
    <main className="mt-16 font-mono max-w-5xl mx-auto w-full px-4">
      <h1 className="text-xl font-bold mb-8 text-center tracking-wide">WORKS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {works.map((work) => (
          <Link
            key={work.id}
            href={`/work/${work.id}`}
            className="block hover:shadow-lg rounded-lg bg-white p-4 transition-shadow group"
          >
            <ProductImage product={work} maxWidth="100%" maxHeight="320px" className="bg-white" />
            <div className="mt-4 text-center">
              <h2 className="font-semibold group-hover:underline">{work.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
