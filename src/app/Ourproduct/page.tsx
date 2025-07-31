'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import OurProductCard from '../components/OurProductCard';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  images: string[];
  size: string;
  color: string;
  price: number;
  description: string;
  specifications: string[];
}

export default function ProductsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: 'Stainless Steel Sheet',
      images: ['/steel-sheet-1.jpg', '/steel-sheet-2.jpg', '/steel-sheet-3.jpg'],
      size: '2x4 ft',
      color: 'Silver',
      price: 45.99,
      description: 'High-quality 304 stainless steel sheet with brushed finish. Perfect for kitchen countertops and industrial applications.',
      specifications: [
        'Material: 304 Stainless Steel',
        'Thickness: 2mm',
        'Finish: Brushed',
        'Corrosion resistant',
        'Easy to clean'
      ]
    },
    // Add more products...
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (productId: number) => {
    router.push(`/Products/${productId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Steel Products</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our high-quality stainless steel products perfect for industrial and home use
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <OurProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
}