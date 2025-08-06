'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import OurProductCard from '../components/OurProductCard';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  imageUrls: string[];
  size: string;
  color: string;
  price: number;
  description: string;
  specifications: string[];
}

export default function ProductsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://stainlessbackend-5.onrender.com/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (productId: number) => {
    router.push(`/Products/${productId}`);
  };

  return (
    <div className="relative w-full px-4 py-8 min-h-screen">
    {/* Background with overlay - fixed position behind everything */}
    <div className="fixed inset-0 -z-10">
      <div 
        className="absolute inset-0  bg-cover bg-center bg-no-repeat"
        style={{ backgroundAttachment: 'fixed' }}
      ></div>
     
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
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-grey-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-grey-100 gap-4">
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