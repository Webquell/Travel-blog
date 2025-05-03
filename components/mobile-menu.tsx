"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="p-2" aria-label="Close menu">
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 p-8">
            <Link href="/" className="text-xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/store" className="text-xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Store
            </Link>
            <Link href="/gear" className="text-xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              My Gear
            </Link>
            <Link href="/follow" className="text-xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Follow
            </Link>
            <Link
              href="/contact"
              className="text-xl text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
