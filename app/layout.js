import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import businessConfig from "@/config/business.json"
import { Suspense } from "react"
import Script from 'next/script'

// Calculate years of experience
const yearsOfExperience = new Date().getFullYear() - parseInt(businessConfig.established)

// Generate product keywords from business.json
const productKeywords = businessConfig.products.map(p => p.name.toLowerCase()).join(", ")
const productNames = businessConfig.products.map(p => p.name).join(", ")

// Generate areas served keywords
const areaKeywords = businessConfig.areasServed.join(", ")

// Base URL - update this if your domain changes
const baseUrl = `https://${businessConfig.website}`
const ogImageUrl = `${baseUrl}/hero-logo.png`

// SEO-optimized description
const seoDescription = `${businessConfig.businessName} - ${businessConfig.tagline}. Premium quality ${productNames.toLowerCase()} supplier in ${businessConfig.address.city}, ${businessConfig.address.state}. Serving ${businessConfig.areasServed.join(", ")} for over ${yearsOfExperience} years. ${businessConfig.gst}. Call ${businessConfig.phone} for instant quotes. Free delivery available.`

// SEO-optimized keywords
const seoKeywords = `plywood dealer ${businessConfig.address.city}, plywood shop ${businessConfig.address.city}, marine plywood ${businessConfig.address.city}, MDF boards ${businessConfig.address.city}, sunmica ${businessConfig.address.city}, laminates ${businessConfig.address.city}, fevicol ${businessConfig.address.city}, hardware items ${businessConfig.address.city}, plywood supplier ${businessConfig.address.state}, plywood near me, ${productKeywords}, ${areaKeywords}, ${businessConfig.address.city} plywood, ${businessConfig.address.state} plywood, Delhi NCR plywood, plywood for schools, plywood for furniture`

export const metadata = {
  // Primary metadata
  title: `${businessConfig.businessName} | ${businessConfig.tagline} | ${businessConfig.address.city}, ${businessConfig.address.state}`,
  description: seoDescription,
  keywords: seoKeywords,
  
  // Author and publisher
  authors: [{ name: businessConfig.businessName }],
  creator: businessConfig.businessName,
  publisher: businessConfig.businessName,
  
  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Open Graph for Facebook, WhatsApp, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: businessConfig.businessName,
    title: `${businessConfig.businessName} - ${businessConfig.tagline}`,
    description: `Premium quality ${productNames} supplier in ${businessConfig.address.city}, ${businessConfig.address.state}. ${yearsOfExperience}+ years of experience. Call ${businessConfig.phone} for instant quotes.`,
    images: [
      {
        url: ogImageUrl, // Absolute URL required for WhatsApp preview
        width: 1200,
        height: 630,
        alt: `${businessConfig.businessName} - Premium Plywood & Hardware Supplier in ${businessConfig.address.city}`,
        type: "image/png",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${businessConfig.businessName} - ${businessConfig.tagline}`,
    description: `Premium ${productNames} supplier in ${businessConfig.address.city}. ${yearsOfExperience}+ years experience. Call ${businessConfig.phone} now!`,
    images: [ogImageUrl],
    creator: `@${businessConfig.businessName.replace(/\s+/g, "")}`,
  },
  
  // Canonical URL
  alternates: {
    canonical: baseUrl,
  },
  
  // Additional meta tags for SEO
  other: {
    // Business contact data
    "business:contact_data:street_address": businessConfig.address.street,
    "business:contact_data:locality": businessConfig.address.city,
    "business:contact_data:region": businessConfig.address.state,
    "business:contact_data:postal_code": businessConfig.address.pincode,
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": businessConfig.phone,
    "business:contact_data:website": baseUrl,
    "business:contact_data:email": businessConfig.email,
    
    // Geographic data
    "geo.region": "IN-DL",
    "geo.placename": businessConfig.address.city,
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
    
    // WhatsApp sharing optimization
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    
    // Mobile optimization
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": businessConfig.businessName,
    
    // Application name
    "application-name": businessConfig.businessName,
    "msapplication-TileColor": "#d97706",
    "theme-color": "#d97706",
  },
 
  
  generator: "Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Manifest (if you have one) */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={baseUrl} />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content={businessConfig.address.city} />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="contact" content={businessConfig.email} />
        <meta name="reply-to" content={businessConfig.email} />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Local Business Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify((() => {
              const schema = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": baseUrl,
                name: businessConfig.businessName,
                description: businessConfig.tagline,
                url: baseUrl,
                telephone: businessConfig.phone,
                email: businessConfig.email,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: businessConfig.address.street,
                  addressLocality: businessConfig.address.city,
                  addressRegion: businessConfig.address.state,
                  postalCode: businessConfig.address.pincode,
                  addressCountry: "IN",
                },
                // Updated opening hours from business.json (9:00 AM - 7:30 PM all days)
                openingHours: [
                  "Mo-Fr 09:00-19:30",
                  "Sa 09:00-19:30",
                  "Su 09:00-19:30"
                ],
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "19:30",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "09:00",
                    closes: "19:30",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Sunday",
                    opens: "09:00",
                    closes: "19:30",
                  },
                ],
                foundingDate: businessConfig.established,
                priceRange: "$$",
                paymentAccepted: businessConfig.paymentMethods ? businessConfig.paymentMethods.join(", ") : "Cash, Card, UPI",
                currenciesAccepted: "INR",
                image: ogImageUrl,
                logo: ogImageUrl,
              }
              
              // Add areas served if available
              if (businessConfig.areasServed && businessConfig.areasServed.length > 0) {
                schema.areaServed = businessConfig.areasServed.map(area => ({
                  "@type": "City",
                  name: area,
                  addressRegion: businessConfig.address.state,
                  addressCountry: "IN",
                }))
              }
              
              // Add products if available
              if (businessConfig.products && businessConfig.products.length > 0) {
                schema.makesOffer = businessConfig.products.map(product => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: product.name,
                    description: product.description,
                  },
                }))
              }
              
              return schema
            })()),
          }}
        />
        
        {/* Product/Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: businessConfig.products.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: product.name,
                  description: product.description,
                  category: "Plywood & Hardware",
                  brand: {
                    "@type": "Brand",
                    name: businessConfig.businessName,
                  },
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    priceCurrency: "INR",
                  },
                },
              })),
            }),
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: businessConfig.businessName,
              url: baseUrl,
              logo: ogImageUrl,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: businessConfig.phone,
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: "Hindi, English",
              },
              sameAs: [
                // Add social media links here when available
                // businessConfig.socialMedia.facebook ? businessConfig.socialMedia.facebook : null,
                // businessConfig.socialMedia.instagram ? businessConfig.socialMedia.instagram : null,
              ].filter(Boolean),
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        {/* Google tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ESXN3N85E5"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ESXN3N85E5');
          `}
        </Script>
      </body>
    </html>
  )
}
