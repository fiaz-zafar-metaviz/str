"use client"

import { useState } from "react"
import { Menu, X, Heart, Search, Moon, Sun } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white drop-shadow-md md:text-2xl">STR Wedding</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#" className="text-sm font-medium text-white/90 hover:text-white">
            Home
          </Link>
          <Link href="#destinations" className="text-sm font-medium text-white/90 hover:text-white">
            Destinations
          </Link>
          <Link href="#amenities" className="text-sm font-medium text-white/90 hover:text-white">
            Amenities
          </Link>
          <Link href="#" className="text-sm font-medium text-white/90 hover:text-white">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-white/90 hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            className="hidden rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white md:flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="hidden rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white md:flex"
            aria-label="Favorites"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="hidden rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white md:flex"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-stone-900/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="#"
              className="border-b border-white/10 py-3 text-white/90 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#destinations"
              className="border-b border-white/10 py-3 text-white/90 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="#amenities"
              className="border-b border-white/10 py-3 text-white/90 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link
              href="#"
              className="border-b border-white/10 py-3 text-white/90 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="py-3 text-white/90 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
