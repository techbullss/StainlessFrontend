'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  images: string[];
  price: number;
  size: string;
  color: string;
  description: string;
  specifications: string[];
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch product data based on ID (in a real app, you'd fetch from API)
  const product: Product = {
    id: 1,
    name: 'Stainless Steel Sheet',
    images: [
      '/steel-sheet-1.jpg',
      '/steel-sheet-2.jpg',
      '/steel-sheet-3.jpg',
      '/steel-sheet-4.jpg',
    ],
    price: 45.99,
    size: '2x4 ft',
    color: 'Silver',
    description: 'High-quality 304 stainless steel sheet with brushed finish. Perfect for kitchen countertops and industrial applications. This premium grade steel offers excellent corrosion resistance and durability.',
    specifications: [
      'Material: 304 Stainless Steel',
      'Thickness: 2mm',
      'Finish: Brushed',
      'Corrosion resistant',
      'Easy to clean',
      'Food-grade safe',
      'Heat resistant up to 800°F'
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => router.back()}
        className="flex items-center text-blue-600 mb-6 hover:text-blue-800"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to products
      </button>

      {/* Image Gallery */}
      <div className="relative mb-8 rounded-xl overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative h-96">
          <Image
            src={product.images[currentImageIndex]}
            alt={`${product.name} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
        
        {/* Thumbnail Strip */}
        <div className="flex space-x-2 mt-4 overflow-x-auto py-2">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="object-cover h-full w-full"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Specifications</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.specifications.map((spec, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Order Box */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
          <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Option</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Standard Delivery (3-5 days)</option>
                <option>Express Delivery (1-2 days)</option>
                <option>Pickup from Store</option>
              </select>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
              Add to Cart - ${product.price}
            </button>
            
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}