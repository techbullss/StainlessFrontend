"use client"

import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  imageUrls: string[];
  price: number;
  size: string;
  color: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function OurProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      className="bg-gray-300  shadow-md    overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-64">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-5">
      <div className="flex items-center gap-3 mb-4">
    <h3 className="text-lg font-semibold   text-gray-900 px-4 py-2 shadow-md inline-flex items-center">
      <span className="mr-2">🔥</span> 
      {product.name}
    </h3>
    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
      In Stock
    </span>
  </div>
        
        <div className="mt-2 text-sm text-gray-600">
          <p>Size: {product.size}</p>
          <p>Color: {product.color}</p>
        </div>
        
        <button
  className="mt-4 w-full relative overflow-hidden group bg-gradient-to-r from-gray-900 to-gray-600 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  onClick={(e) => {
    e.stopPropagation();
   onClick()
  }}
>
  <span className="relative z-10 flex items-center justify-center">
    Order Now
    <svg
      className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>
  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
  <span className="absolute inset-0 -left-full group-hover:left-0 bg-white opacity-10 transition-all duration-700"></span>
</button>
      </div>
    </div>
  );
}