// components/AddProductModal.tsx
import { useState } from 'react';
import { XMarkIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ProductData {
  name: string;
  size: string;
  color: string;
  price: number;
  description: string;
  specifications: string[];
  images: File[];
}

export default function AddProductModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [productData, setProductData] = useState<ProductData>({
    name: '',
    size: '',
    color: '',
    price: 0.0,
    description: '',
    specifications: [''],
    images: []
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = [...productData.images, ...Array.from(e.target.files)];
      setProductData({...productData, images: newImages});
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData({...productData, [name]: value});
  };

  const handleSpecificationChange = (index: number, value: string) => {
    const newSpecs = [...productData.specifications];
    newSpecs[index] = value;
    setProductData({...productData, specifications: newSpecs});
  };

  const addSpecificationField = () => {
    setProductData({...productData, specifications: [...productData.specifications, '']});
  };

  const removeSpecificationField = (index: number) => {
    const newSpecs = productData.specifications.filter((_, i) => i !== index);
    setProductData({...productData, specifications: newSpecs});
  };

  const removeImage = (index: number) => {
    const newImages = productData.images.filter((_, i) => i !== index);
    setProductData({...productData, images: newImages});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('product', JSON.stringify({
        name: productData.name,
        size: productData.size,
        color: productData.color,
        price: productData.price,
        description: productData.description,
        specifications: productData.specifications.filter(spec => spec.trim() !== '')
      }));
    
      productData.images.forEach(image => {
        formData.append('images', image);
      });
      console.log("productData.images", productData.images);
      const response = await fetch("http://localhost:8080/api/products", {
        method: "POST",
        body: formData
      });
    
      if (!response.ok) {
        throw new Error('Failed to save product');
      }
    
      const result = await response.json();
      console.log('Product saved:', result);
      onClose();
    
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product. Please try again.');
    }
    
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Add New Product</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input 
                type="text" 
                name="name"
                value={productData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Size</label>
                <input 
                  type="text" 
                  name="size"
                  value={productData.size}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Color</label>
                <input 
                  type="text" 
                  name="color"
                  value={productData.color}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input 
                type="number" 
                name="price"
                value={productData.price }
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                required
                min="0"
                step="0.01"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea 
                name="description"
                value={productData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                rows={3}
                required
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Specifications</label>
              <div className="mt-1 space-y-2">
                {productData.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={spec}
                      onChange={(e) => handleSpecificationChange(index, e.target.value)}
                      className="flex-1 border border-gray-300 rounded-md p-2"
                      placeholder="Enter specification"
                    />
                    {productData.specifications.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSpecificationField(index)}
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSpecificationField}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mt-2"
                >
                  <PlusIcon className="h-4 w-4" />
                  Add Specification
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Images</label>
              <div className="mt-1 flex items-center gap-4">
                <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md">
                  Upload Images
                  <input 
                    type="file" 
                    multiple 
                    className="hidden" 
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </label>
                <span className="text-sm text-gray-500">
                  {productData.images.length} image{productData.images.length !== 1 ? 's' : ''} selected
                </span>
              </div>
              
              {productData.images.length > 0 && (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {productData.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={URL.createObjectURL(image)} 
                        alt={`Preview ${index}`}
                        className="w-full h-24 object-cover rounded"
                        fill
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 p-1 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex justify-end gap-3 pt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                disabled={!productData.name || !productData.price}
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}