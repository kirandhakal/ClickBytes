'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CB
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-gray-700 space-x-8  p-4 text-2xl">
          <Link href="/" className=" hover:text-blue-600  transition underline">Home</Link>
            <Link href="/service" className=" hover:text-blue-600 transition ">Service</Link>
          <Link href="/about" className="hover:text-blue-600  transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600  transition ">Contact</Link>
          <Link href="/login" className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-800 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 flex flex-col space-y-2 py-4 px-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/service" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Service</Link>
             <Link href="/about" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/login" className="bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}
