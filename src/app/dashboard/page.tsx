'use client';

import { useEffect, useState } from 'react';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import ProductCard from '../components/ProductCard';
import EditProductModal from '../components/EditProductModal';
import AddProductModal from '../components/AddProductModal';
import router from 'next/router';

interface Product {
  id: number;
  name: string;
  imageUrls: string[];
  size: string;
  color: string;
  price: number;
  usedFor: string;
}
interface Order{
  name:string;
  id:string,
  email:string
}
export default function DashboardHome() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
 const[orders,setOrders]=useState<Order[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products',{headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      credentials:'include'});
        const res = await fetch('http://localhost:8080/api/orders',{
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials:'include'
        });
        const dataOrder=await res.json();
        setOrders(dataOrder)

        if (!response.ok) throw new Error('Failed to fetch products');

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
        router.push('/Login');
      }
      finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [router]);
  
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isaddModalOpen, setIsaddModalOpen] = useState(false);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };
  const handleAdd = () => {
 
    setIsaddModalOpen(true);
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
  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div>Error: {error}</div>;
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
          <p className="text-3xl font-bold">{orders.length}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
          onClick={handleAdd}>
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
      {isaddModalOpen && (
        <AddProductModal
          isOpen={isaddModalOpen}
          
          onClose={() => setIsaddModalOpen(false)}
          
        />
      )}
    </div>
  );
}