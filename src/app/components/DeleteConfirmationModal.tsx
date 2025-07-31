import { XMarkIcon } from '@heroicons/react/24/outline';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  product: any;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmationModal({
  isOpen,
  product,
  onClose,
  onConfirm
}: DeleteConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-red-600">Confirm Deletion</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mb-6">
            <p className="mb-2">Are you sure you want to delete this product?</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">Size: {product.size}</p>
              <p className="text-sm text-gray-600">Color: {product.color}</p>
              <p className="text-sm text-gray-600">Price: ${product.price}</p>
            </div>
            <p className="mt-2 text-red-600">This action cannot be undone.</p>
          </div>
          
          <div className="flex justify-end gap-3">
            <button 
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button 
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete Permanently
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}