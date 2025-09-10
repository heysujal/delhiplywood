"use client"

import { Phone, MessageCircle, MapPin, Clock, Star, Award, Users, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import businessConfig from "@/config/business.json"

export default function HomePage() {
  const { businessName, tagline, phone, whatsapp, email, address, hours, established, products, features } =
    businessConfig

  const handleCall = () => {
    window.location.href = `tel:${phone}`
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in your plywood products. Please share more details.`)
    window.open(`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{businessName}</h1>
              <p className="text-sm text-muted-foreground">{tagline}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button onClick={handleCall} size="sm" className="bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="sm"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Premium <span className="text-primary">Plywood</span> & Hardware Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Serving schools, colleges, and businesses for over {new Date().getFullYear() - established} years with
              quality products and instant customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCall}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-pulse"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {phone}
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose Us?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Award className="w-6 h-6 text-primary" />}
                    {index === 1 && <Star className="w-6 h-6 text-primary" />}
                    {index === 2 && <Clock className="w-6 h-6 text-primary" />}
                    {index === 3 && <Users className="w-6 h-6 text-primary" />}
                    {index === 4 && <span className="text-primary font-bold">₹</span>}
                    {index === 5 && <Truck className="w-6 h-6 text-primary" />}
                  </div>
                  <p className="font-semibold text-sm text-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-4">Our Products</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We supply premium quality plywood and hardware items to schools, colleges, and businesses across Delhi NCR.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{product.name}</h4>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    size="sm"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Get Quality Plywood?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Call us now for instant quotes and expert advice. We're just a phone call away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleCall} size="lg" variant="secondary" className="text-lg px-8 py-6 animate-bounce">
              <Phone className="w-5 h-5 mr-2" />
              Call {phone}
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Visit Our Store</h4>
                <p className="text-muted-foreground text-sm">{address.full}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: {hours.weekdays}
                  <br />
                  Sat: {hours.saturday}
                  <br />
                  Sun: {hours.sunday}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Contact Us</h4>
                <p className="text-muted-foreground text-sm">
                  Phone: {phone}
                  <br />
                  Email: {email}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">N</span>
            </div>
            <span className="font-bold text-foreground">{businessName}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Serving Delhi NCR with quality plywood and hardware since {established}
          </p>
        </div>
      </footer>
    </div>
  )
}
