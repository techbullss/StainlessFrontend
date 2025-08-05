import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Product {
  id:number
  usedFor: string;
  name: string;
  imageUrls: string[];
  price: number;
  size: string;
  color: string;
}

type ImageItem = 
  | { type: 'upload'; file: File; preview: string; id: string }
  | { type: 'existing'; url: string; id: string };

interface EditProductModalProps {
  isOpen: boolean;
  product?: Product | null;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

const emptyFormData: Product = {
  id:0,
  name: '',
  size: '',
  color: '',
  price: 0,
  usedFor: '',
  imageUrls: []
};

export default function EditProductModal({ 
  isOpen, 
  product, 
  onClose,
  onSave
}: EditProductModalProps) {
  const [formData, setFormData] = useState<Product>(emptyFormData);
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    if (isOpen) {
      const initialData = product ? {
        ...product,
        imageUrls: product.imageUrls || []
      } : emptyFormData;
      
      setFormData(initialData);
      
      setImages(initialData.imageUrls.map(url => ({
        type: 'existing' as const,
        url,
        id: `existing-${url}`
      })));
    }
  }, [isOpen, product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, 
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages: ImageItem[] = Array.from(e.target.files).map(file => ({
        type: 'upload' as const,
        file,
        preview: URL.createObjectURL(file),
        id: Date.now().toString()
      }));
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (id: string) => {
    setImages(prev => {
      const newImages = prev.filter(img => img.id !== id);
      // Revoke object URL if it's an upload
      const removedImage = prev.find(img => img.id === id);
      if (removedImage?.type === 'upload') {
        URL.revokeObjectURL(removedImage.preview);
      }
      return newImages;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For existing images: use their URLs
    const existingUrls = images
      .filter((img): img is { type: 'existing', url: string, id: string } => img.type === 'existing')
      .map(img => img.url);

    
    const uploadNewImages = async () => {
      const uploadPromises = images
        .filter((img): img is { type: 'upload', file: File, preview: string, id: string } => img.type === 'upload')
        .map(async (img) => {
        
          return img.preview;
        });
      return await Promise.all(uploadPromises);
    };

    const newUrls = await uploadNewImages();
    
    onSave({
      ...formData,
      imageUrls: [...existingUrls, ...newUrls]
    });
    
    handleClose();
  };

  const handleClose = () => {
   
    images.forEach(img => {
      if (img.type === 'upload') {
        URL.revokeObjectURL(img.preview);
      }
    });
    setFormData(emptyFormData);
    setImages([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Edit Product</h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                  value={formData.size}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Color</label>
                <input 
                  type="text" 
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input 
                type="number" 
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                required
                min="0"
                step="0.01"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Used For</label>
              <textarea 
                name="usedFor"
                value={formData.usedFor}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Images</label>
              <div className="mt-1 flex items-center gap-4">
                <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md">
                  Add More Images
                  <input 
                    type="file" 
                    multiple 
                    className="hidden" 
                    onChange={handleImageUpload} 
                    accept="image/*"
                  />
                </label>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-2">
                {images.map((image) => (
                  <div key={image.id} className="relative group">
                    <img 
                      src={image.type === 'existing' ? image.url : image.preview}
                      alt="Product preview"
                      className="w-full h-24 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <XMarkIcon className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end gap-3 pt-4">
              <button 
                type="button"
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}