"use client"
import { useState } from 'react';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { useAuth } from './AuthContext';
export default function Header(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth()
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
return(
    <header className="bg-gray-100 text-gray-800 shadow">
       <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
  <div className="flex items-center gap-2">
    <img src="/file.svg" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
    <span className="font-bold text-lg md:text-xl tracking-wide">SteelFab Solutions</span>
  </div>

  {/* Contact info - visible on medium screens and up */}
  <div className="hidden md:flex items-center gap-6">
    {/* Phone number with Kenyan flag */}
    <div className="flex items-center gap-2">
      <span className="text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      </span>
      <div className="flex items-center gap-1">
        <img src="https://flagcdn.com/w20/ke.png" alt="Kenya" className="w-5 h-3" />
        <span className="text-sm">+254 700 123456</span>
      </div>
    </div>

    {/* Email address */}
    <div className="flex items-center gap-2">
      <span className="text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </span>
      <span className="text-sm">info@steelfab.co.ke</span>
    </div>
  </div>

  {/* Mobile menu button */}
  <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl text-gray-800"
        >
          ☰
        </button>
  {/* Desktop menu */}
  <ul className="hidden md:flex gap-6 font-medium">
    <li className="relative group">
      <Link 
        href="/" 
        className="hover:text-yellow-600 transition relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        Home
      </Link>
    </li>
    <li className="relative group">
      <Link 
        href="/Ourproduct" 
        className="hover:text-yellow-600 transition relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        Our Products
      </Link>
    </li>
    <li className="relative group">
      <Link 
        href="AboutUs" 
        className="hover:text-yellow-600 transition relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        About
      </Link>
    </li>
    <li className="relative group">
      <Link 
        href="ContactUs" 
        className="hover:text-yellow-600 transition relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        Contact
      </Link>
    </li>
    {!isAuthenticated ? (
            <li className="relative group">
              <Link 
                href="/Login" 
                className="hover:text-yellow-600 transition relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Login
              </Link>
            </li>
          ) : (
            <li className="relative group">
              <button
                className="hover:text-yellow-600 transition relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link href={"/dashboard"}>
                Dashboard
                </Link>
              </button>
            </li>
          )}
  </ul>
</nav>
<MobileNav isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      </header>
)
}