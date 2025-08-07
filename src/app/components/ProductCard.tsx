"use client"
import { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

import DeleteConfirmationModal from './DeleteConfirmationModal';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  imageUrls: string[];
  size: string;
  color: string;
  price: number;
  usedFor: string;
}

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export default function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="relative h-48 bg-gray-100">
          <Image 
            src={product.imageUrls[0] } 
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  
  unoptimized={true}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">Size: {product.size}</p>
          <p className="text-gray-600 text-sm mb-2">Color: {product.color}</p>
          <p className="text-gray-600 text-sm mb-2">Price: KSH {product.price}</p>
          
          <div className="mt-4 flex justify-end space-x-2">
            <button 
              className="text-blue-600 hover:text-blue-800"
              onClick={() => onEdit(product)}
            >
              <PencilIcon className="h-5 w-5" />
            </button>
            <button 
              className="text-red-600 hover:text-red-800"
              onClick={() => setShowDeleteModal(true)}
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        product={product}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          onDelete(product);
          setShowDeleteModal(false);
        }}
      />
    </>
  );
}