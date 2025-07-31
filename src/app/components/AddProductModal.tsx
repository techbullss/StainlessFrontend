// components/AddProductModal.tsx
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function AddProductModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
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
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Size</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Color</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Used For</label>
              <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows={3}></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Images</label>
              <div className="mt-1 flex items-center gap-4">
                <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md">
                  Upload Images
                  <input type="file" multiple className="hidden" onChange={handleImageUpload} />
                </label>
                <span className="text-sm text-gray-500">{images.length} images selected</span>
              </div>
              
              {images.length > 0 && (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {images.map((image, index) => (
                    <div key={index} className="relative h-24 bg-gray-100 rounded">
                      <img 
                        src={URL.createObjectURL(image)} 
                        alt={`Preview ${index}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex justify-end gap-3 pt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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