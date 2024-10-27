
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    return pathname === path ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600";
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">Theme Generator</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-8">
              <Link href="/" className={`${isActivePath('/')} transition-colors duration-200 font-medium`}>
                Home
              </Link>
              <Link href="/about" className={`${isActivePath('/about')} transition-colors duration-200 font-medium`}>
                About
              </Link>
              <Link href="/get-started" className={`${isActivePath('/get-started')} transition-colors duration-200 font-medium`}>
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`${isActivePath('/')} block px-3 py-2 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${isActivePath('/about')} block px-3 py-2 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/get-started"
              className={`${isActivePath('/get-started')} block px-3 py-2 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}