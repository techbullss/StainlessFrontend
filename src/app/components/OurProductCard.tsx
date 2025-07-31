import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  images: string[];
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
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-64">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          <span className="text-lg font-bold text-blue-600">${product.price}</span>
        </div>
        
        <div className="mt-2 text-sm text-gray-600">
          <p>Size: {product.size}</p>
          <p>Color: {product.color}</p>
        </div>
        
        <button 
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            // Handle order logic here
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}