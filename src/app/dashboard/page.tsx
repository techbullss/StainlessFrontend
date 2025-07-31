'use client';

import { useState } from 'react';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import ProductCard from '../components/ProductCard';
import EditProductModal from '../components/EditProductModal';

interface Product {
  id: number;
  name: string;
  images: string[];
  size: string;
  color: string;
  price: number;
  usedFor: string;
}

export default function DashboardHome() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Stainless Steel Sheet',
      images: ['/table.jpeg'],
      size: '2x4 ft',
      color: 'Silver',
      price: 45.99,
      usedFor: 'Kitchen countertops'
    },
    {
      id: 2,
      name: 'Steel Pipe',
      images: ['/tank.jpeg'],
      size: '1 inch diameter',
      color: 'Black',
      price: 12.50,
      usedFor: 'Plumbing'
    },
    {
        id: 2,
        name: 'Steel Pipe',
        images: ['/tank.jpeg'],
        size: '1 inch diameter',
        color: 'Black',
        price: 12.50,
        usedFor: 'Plumbing'
      },{
        id: 2,
        name: 'Steel Pipe',
        images: ['/tank.jpeg'],
        size: '1 inch diameter',
        color: 'Black',
        price: 12.50,
        usedFor: 'Plumbing'
      },
      {
        id: 2,
        name: 'Steel Pipe',
        images: ['/tank.jpeg'],
        size: '1 inch diameter',
        color: 'Black',
        price: 12.50,
        usedFor: 'Plumbing'
      }
  ]);
  
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedProduct: Product) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
  };

  const handleDelete = (productToDelete: Product) => {
    setProducts(products.filter(p => p.id !== productToDelete.id));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.usedFor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-gray-800 p-4 md:p-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Total Products</h3>
          <p className="text-3xl font-bold">{products.length}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Total Orders</h3>
          <p className="text-3xl font-bold">18</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <PlusIcon className="h-5 w-5" />
            Add New Item
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {editingProduct && (
        <EditProductModal
          isOpen={isEditModalOpen}
          product={editingProduct}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}