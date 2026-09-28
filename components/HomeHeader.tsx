"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import businessConfig from "@/config/business.json"

const { businessName, tagline, logoIcon } = businessConfig

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "#features", label: "Why Us" },
  { href: "/blog", label: "Blog" },
  { href: "/renovation", label: "Renovation" },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
]

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-300 h-9 px-4 text-sm"
const buttonDefault = `${buttonBase} bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg hover:shadow-xl`
const buttonOutline = `${buttonBase} border-2 border-amber-600/30 bg-white/80 backdrop-blur-sm text-amber-900 hover:bg-amber-50 hover:border-amber-600`

// The homepage's fixed header. It is the only part of the homepage that needs
// browser JS (scroll shadow + mobile menu), so the rest stays server-rendered.
export default function HomeHeader({ phone, whatsappLink }: { phone: string; whatsappLink: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-amber-50 shadow-lg border-b border-amber-200/50"
          : isScrolled
            ? "glass-effect shadow-lg border-b border-amber-200/50"
            : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src={logoIcon}
              alt={`${businessName} logo`}
              width={48}
              height={48}
              priority
              className="w-12 h-12 rounded-xl shadow-lg shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xl sm:text-2xl font-bold text-amber-900 truncate">{businessName}</p>
              <p className="text-xs sm:text-sm text-amber-700 hidden sm:block">{tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-amber-900 hover:text-amber-600 font-medium transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${phone}`} className={buttonOutline} aria-label="Call">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call</span>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={buttonDefault} aria-label="WhatsApp">
              <FaWhatsapp className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 -mr-2 text-amber-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-200/50 animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-amber-900 font-medium py-3" onClick={closeMenu}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
