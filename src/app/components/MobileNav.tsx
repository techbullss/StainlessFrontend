import Image from 'next/image';
import Link from 'next/link';
interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
const MobileNav = ({ isOpen, toggleMenu }:MobileNavProps) => {
  return (
    <div className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
      <div className="container mx-auto px-4 py-8">
        {/* Close button */}
        <button 
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl text-gray-800"
        >
          &times;
        </button>
        
        {/* Menu Items */}
        <ul className="flex flex-col gap-6 font-medium mb-8 mt-12">
          <li>
            <Link 
              href="/" 
              className="hover:text-yellow-600 text-xl block py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/Ourproduct" 
              className="hover:text-yellow-600 text-xl block py-2"
              onClick={toggleMenu}
            >
              Our Products
            </Link>
          </li>
          <li>
            <Link 
              href="/AboutUs" 
              className="hover:text-yellow-600 text-xl block py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/ContactUs" 
              className="hover:text-yellow-600 text-xl block py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              href="/Login" 
              className="hover:text-yellow-600 text-xl block py-2"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Contact Information */}
        <div className="flex flex-col gap-4 border-t pt-6">
          <div className="flex items-center gap-3">
            <span className="text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>
            <div className="flex items-center gap-2">
              <Image src="https://flagcdn.com/w20/ke.png" width={1}height={2} alt="Kenya" className="w-6 h-4" />
              <span className="text-lg">+254 700 123456</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
            <span className="text-lg">info@steelfab.co.ke</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;