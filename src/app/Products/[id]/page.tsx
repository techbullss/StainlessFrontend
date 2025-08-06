'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';


interface Product {
  id: number;
  name: string;
  imageUrls: string[];
  price: number;
  size: string;
  color: string;
  description: string;
  specifications: string[];
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const unwrappedParams = use(params);
  const productId = unwrappedParams.id;
  const [quantity, setQuantity] = useState(1);
  const [phonenumber, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!product) {
      setError('Product information is not available');
      return;
    }
  
    try {
      const response = await fetch("https://stainlessbackend-5.onrender.com/api/orders", {
        method: "POST",
        
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phonenumber,
          quantity,
          amount: product.price * quantity,
          productId: product.id,
          productname:product.name
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit order');
      }
  
      // Handle text response instead of JSON
      const result = await response.text();
      console.log('Order successful:', result);
      
      // Show success message to user
      setError(''); // Clear any previous errors
      alert('Order saved successfully!');
      // Or use a toast notification: toast.success('Order saved successfully!');
      
    } catch (error) {
      console.error('Error submitting order:', error);
      setError('Failed to place order. Please try again.');
    }
  };


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://stainlessbackend-5.onrender.com/api/products/${productId}`);
        
        if (!response.ok) {
          throw new Error('Product not found');
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
          <button 
            onClick={() => router.back()}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.imageUrls.length - 1 : prev - 1
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
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
  <Image
    src={product.imageUrls[currentImageIndex]}
    alt={`${product.name} - Image ${currentImageIndex + 1}`}
    fill
    className="object-contain"  // Changed from object-cover to object-contain
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
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
          {product.imageUrls.map((img, index) => (
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
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <select 
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="flex items-center">
                <Image
                  src="https://flagcdn.com/w20/ke.png" 
                  alt="Kenya" 
                  width={1}
                  height={1}
                  className="w-5 h-3 mr-2" 
                />
                +254
              </span>
            </div>
            <input 
              type="tel" 
              className="w-full border border-gray-300 rounded-md px-3 py-2 pl-20" 
              placeholder="712345678"
              pattern="^[17]\d{8}$"
              required
              value={phonenumber}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Enter your Kenyan phone number without the country code (e.g. 712345678)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email (Optional)
          </label>
          <input 
            type="email" 
            className="w-full border border-gray-300 rounded-md px-3 py-2" 
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Make Order - KSH{(product.price * quantity).toFixed(2)}
        </button>
      </form>
    </div>
      </div>
    </div>
  );
}