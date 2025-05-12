'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // Optional: install lucide-react for icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div>
          <Image src="/boltcareblacklogo.png" alt="Logo" width={200} height={150} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="/aboutus2" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
          <a href="#product" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
          <a href="/careers" className="text-gray-700 hover:text-blue-600 font-medium">Careers</a>
          <a href="/contactus" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <nav className="flex flex-col space-y-2">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/aboutus2" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#product" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="/careers" className="text-gray-700 hover:text-blue-600">Careers</a>
            <a href="/contactus" className="text-gray-700 hover:text-blue-600">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  )
}
