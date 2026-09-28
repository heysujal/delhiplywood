"use client"

import { useState, useEffect } from "react"
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Award,
  Users,
  Truck,
  CheckCircle2,
  Shield,
  IndianRupee,
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Mail,
  Navigation,
  Zap,
  Package,
  Building2,
  BadgeCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-react"
import { FaGoogle, FaWhatsapp } from "react-icons/fa"
import businessConfig from "@/config/business.json"
import Link from "next/link"

const storePhotos = [
  { src: "/images/nitin-plywood-house-signboard-alipur-delhi.webp", alt: "Nitin Plywood House signboard on Main Narela Road, Alipur, Delhi" },
  { src: "/images/nitin-plywood-house-owner-at-shop.webp", alt: "Customer counter at Nitin Plywood House, Alipur" },
  { src: "/images/laminates-and-plywood-section-delhi.webp", alt: "Laminate and plywood section at Nitin Plywood House" },
  { src: "/images/bwr-plywood-sheets-delhi.webp", alt: "BWR plywood sheets in stock" },
  { src: "/images/edge-banding-tape-rolls-delhi.webp", alt: "Edge banding tape rolls in different colours" },
  { src: "/images/hardware-fittings-shelves-delhi.webp", alt: "Hardware and fittings shelves" },
]

// Inline Button Component
function Button({ children, className = "", onClick, variant = "default", size = "default", ...props }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
  
  const variants = {
    default: "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    outline: "border-2 border-amber-600/30 bg-white/80 backdrop-blur-sm text-amber-900 hover:bg-amber-50 hover:border-amber-600 hover:scale-105 active:scale-95",
    ghost: "text-amber-900 hover:bg-amber-50 hover:scale-105 active:scale-95",
    secondary: "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 border border-amber-200 hover:border-amber-300 hover:shadow-md",
  }
  
  const sizes = {
    default: "h-11 px-6 text-base",
    sm: "h-9 px-4 text-sm",
    lg: "h-14 px-8 text-lg",
    icon: "h-11 w-11",
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Inline Card Component
function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-100/50 shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [visibleSection, setVisibleSection] = useState("")

  const {
    businessName,
    tagline,
    phone,
    alternatePhone,
    whatsapp,
    email,
    address,
    hours,
    established,
    products,
    features,
    gst,
    paymentMethods,
    delivery,
    trustBadges,
    testimonials,
    areasServed,
    googleMapsLink,
    logo,
  } = businessConfig

  const yearsOfExperience = new Date().getFullYear() - parseInt(established)
  const whatsappLink = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi! I'm interested in your plywood products. Please share more details and pricing."
  )}`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Intersection Observer for fade-in animations
    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id)
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )
    
    sections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleMap = () => {
    window.open(googleMapsLink, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-x-hidden w-full">

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-effect shadow-lg border-b border-amber-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={`${businessName} logo`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl shadow-lg"
              />
              <div>
                <p className="text-xl sm:text-2xl font-bold text-amber-900">{businessName}</p>
                <p className="text-xs sm:text-sm text-amber-700 hidden sm:block">{tagline}</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#products" className="text-amber-900 hover:text-amber-600 font-medium transition-colors">
                Products
              </a>
              <a href="#features" className="text-amber-900 hover:text-amber-600 font-medium transition-colors">
                Why Us
              </a>
              <Link href="/blog" className="text-amber-900 hover:text-amber-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/renovation" className="text-amber-900 hover:text-amber-600 font-medium transition-colors">
                Renovation
              </Link>
              <a href="#contact" className="text-amber-900 hover:text-amber-600 font-medium transition-colors">
                Contact
              </a>
            </nav>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href={`tel:${phone}`}>
                <Button size="sm" variant="outline">
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:inline">Call</span>
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="sm">
                  <FaWhatsapp className="w-4 h-4" />
                  <span className="hidden lg:inline">WhatsApp</span>
                </Button>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-amber-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass-effect border-t border-amber-200/50 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a
                href="#products"
                className="text-amber-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#features"
                className="text-amber-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <Link
                href="/blog"
                className="text-amber-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/renovation"
                className="text-amber-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Renovation
              </Link>
              <a
                href="#contact"
                className="text-amber-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex gap-3 pt-2">
                <a href={`tel:${phone}`} className="flex-1">
                  <Button size="sm" className="w-full">
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="w-full">
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-transparent to-orange-200/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200 shadow-md">
              <BadgeCheck className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-amber-900">{gst}</span>
              <span className="text-amber-600">•</span>
              <span className="text-sm font-semibold text-amber-900">{yearsOfExperience}+ Years</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-amber-900">Plywood, Laminates &</span>
              <br />
              <span className="gradient-text">Hardware Shop in Delhi</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              {businessName} has supplied plywood, MDF, HDMR boards, sunmica, doors and hardware since {established}. Delivery across Delhi NCR and supply across India.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8">
              {trustBadges.slice(0, 4).map((badge, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-amber-200/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-sm font-semibold text-amber-900">{badge}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a href={`tel:${phone}`}>
                <Button size="lg" className="group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Call {phone}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="group">
                  <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  WhatsApp Chat
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            {/* Quick Features */}
            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-amber-800">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600" />
                <span>Instant Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-amber-600" />
                <span>Quick Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-600" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-amber-600" />
                <span>Best Prices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Why Choose <span className="gradient-text">{businessName}?</span>
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Your trusted partner for premium plywood and hardware solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const icons = [
                <Award className="w-6 h-6" />,
                <Star className="w-6 h-6" />,
                <Zap className="w-6 h-6" />,
                <Building2 className="w-6 h-6" />,
                <TrendingUp className="w-6 h-6" />,
                <Truck className="w-6 h-6" />,
                <BadgeCheck className="w-6 h-6" />,
                <Package className="w-6 h-6" />,
              ]
              
              return (
                <Card
                  key={index}
                  className="text-center hover:scale-105 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {icons[index] || <Star className="w-6 h-6" />}
                    </div>
                    <p className="font-semibold text-sm sm:text-base text-amber-900 leading-tight">
                      {feature}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Our <span className="gradient-text">Premium Products</span>
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Wide range of quality plywood, MDF, laminates, and hardware items
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {product.image && (
                  <img
                    src={product.image}
                    alt={`${product.name} at ${businessName}, Delhi`}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                )}
                <CardContent className="p-6 sm:p-8">
                  {!product.image && (
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {product.icon}
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-amber-700 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Product Details */}
                  {(product.grade || product.brands || product.thickness || product.categories) && (
                    <div className="space-y-2 mb-6 text-sm">
                      {product.grade && (
                        <div className="flex items-center gap-2 text-amber-800">
                          <CheckCircle2 className="w-4 h-4 text-amber-600" />
                          <span><strong>Grade:</strong> {product.grade}</span>
                        </div>
                      )}
                      {product.thickness && (
                        <div className="flex items-center gap-2 text-amber-800">
                          <CheckCircle2 className="w-4 h-4 text-amber-600" />
                          <span><strong>Thickness:</strong> {product.thickness}</span>
                        </div>
                      )}
                      {product.brands && (
                        <div className="flex items-center gap-2 text-amber-800">
                          <CheckCircle2 className="w-4 h-4 text-amber-600" />
                          <span><strong>Brands:</strong> {product.brands}</span>
                        </div>
                      )}
                      {product.categories && (
                        <div className="flex items-center gap-2 text-amber-800">
                          <CheckCircle2 className="w-4 h-4 text-amber-600" />
                          <span><strong>Includes:</strong> {product.categories}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <a href={`tel:${phone}`}>
                    <Button variant="outline" size="sm" className="w-full group">
                      Call {phone}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
                What Our <span className="gradient-text">Customers Say</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-amber-800 mb-4 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-amber-900">{testimonial.author}</p>
                        <p className="text-sm text-amber-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
                See all testimonials on our <span className="gradient-text">Google Reviews</span>
              </h2>
              <Link href={'https://www.google.com/search?sca_esv=79231a2a76414654&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Eyx6ntIUFkxPSztxc9fykc-EqhLO3M2qbLw--KmKLWSelr6OHzoTccrZSN-yfpcgwGHzcO52vXAVjVXLmbhZ2HVWiRHHMXeJ3hTHC7FpvKYnTKWncg%3D%3D&q=Delhi+Plywood+House+Reviews&sa=X&ved=2ahUKEwjfyazD8OaQAxVcV2wGHYawMaYQ0bkNegQILRAE'}>

              <Button size="lg" variant="outline" className="group">
                <FaGoogle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Visit Google Reviews
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>
            
          </div>
        </section>
      )}

      {/* Delivery & Payment Info */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Coverage */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">Service Coverage</h3>
                </div>
                <p className="text-amber-700 mb-4">{delivery.minimumOrder}</p>
                <p className="text-amber-700 mb-4">{delivery.sameDay}</p>
                <div className="flex flex-wrap gap-2">
                  {delivery.areas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Payment Methods */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white">
                    <IndianRupee className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">Payment Methods</h3>
                </div>
                <p className="text-amber-700 mb-4">We accept all major payment methods for your convenience.</p>
                <div className="flex flex-wrap gap-2">
                  {paymentMethods.map((method, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {method}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Quality Plywood?
          </h2>
          <p className="text-xl sm:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">
            Call now for instant quotes, Delhi dispatch support, and Pan-India material supply guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`tel:${phone}`}>
              <Button size="lg" variant="secondary" className="bg-white text-amber-900 hover:bg-amber-50">
                <Phone className="w-5 h-5" />
                Call {phone}
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10">
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Store Photos */}
      <section id="store" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Inside <span className="gradient-text">Our Store</span>
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Plywood, laminates, adhesives and hardware in stock at our Alipur, Delhi store
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {storePhotos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={450}
                loading="lazy"
                className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Visit our store or contact us for inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group" onClick={handleMap}>
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-amber-900 mb-3">Visit Our Store</h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-4">{address.full}</p>
                <Button variant="ghost" size="sm" className="text-amber-600">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
            
            {/* Hours */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-amber-900 mb-3">Business Hours</h3>
                <div className="space-y-2 text-amber-700 text-sm">
                  <p><strong>Mon-Fri:</strong> {hours.weekdays}</p>
                  <p><strong>Saturday:</strong> {hours.saturday}</p>
                  <p><strong>Sunday:</strong> {hours.sunday}</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-amber-900 mb-3">Contact Us</h3>
                <div className="space-y-3 text-amber-700 text-sm flex items-center flex-col">
                  <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 text-amber-900 hover:text-amber-600 font-semibold transition-colors">
                    <Phone className="w-4 h-4" />
                    {phone}
                  </a>
                  {alternatePhone && (
                    <a href={`tel:${alternatePhone}`} className="flex items-center justify-center gap-2 text-amber-900 hover:text-amber-600 font-semibold transition-colors">
                      <Phone className="w-4 h-4" />
                      {alternatePhone}
                    </a>
                  )}
                  <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 text-amber-900 hover:text-amber-600 font-semibold transition-colors">
                    <Mail className="w-4 h-4" />
                    {email}
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="mt-2">
                      <FaWhatsapp className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Service Reach */}
          {areasServed && areasServed.length > 0 && (
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Service Reach</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {areasServed.map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logo}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-bold text-xl">{businessName}</span>
              </div>
              <p className="text-amber-100 text-sm leading-relaxed">
                {tagline}. Serving homes, carpenters and contractors across Delhi NCR since {established}, with supply across India.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-amber-100">
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/renovation" className="hover:text-white transition-colors">
                    Renovation
                  </Link>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-amber-100">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                    {phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                    {email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {address.full}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mt-10">
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-amber-800/60 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.52489440428113!2d77.13200091264055!3d28.79720189694445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d009de6843a1d%3A0xc94e84f82631bf90!2sNitin%20Plywood%20House!5e0!3m2!1sen!2sin!4v1773496311127!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nitin Plywood House location map"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
