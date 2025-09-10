import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import businessConfig from "@/config/business.json"
import { Suspense } from "react"

export const metadata = {
  title: `${businessConfig.businessName} - ${businessConfig.tagline}`,
  description: `${businessConfig.businessName} - Premium quality plywood, MDF, marine plywood, sunmica, laminates, fevicol, and hardware items. Serving schools, colleges, and businesses in Delhi NCR for over ${new Date().getFullYear() - businessConfig.established} years. Call ${businessConfig.phone} for instant quotes.`,
  keywords:
    "plywood, marine plywood, MDF, sunmica, laminates, fevicol, hardware, nails, drill bits, blades, Delhi, NCR, schools, colleges, furniture materials",
  authors: [{ name: businessConfig.businessName }],
  creator: businessConfig.businessName,
  publisher: businessConfig.businessName,
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `https://${businessConfig.website}`,
    siteName: businessConfig.businessName,
    title: `${businessConfig.businessName} - ${businessConfig.tagline}`,
    description: `Premium quality plywood and hardware supplier in Delhi NCR. Serving schools, colleges, and businesses for over ${new Date().getFullYear() - businessConfig.established} years.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${businessConfig.businessName} - Premium Plywood Supplier`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessConfig.businessName} - ${businessConfig.tagline}`,
    description: `Premium quality plywood and hardware supplier in Delhi NCR. Call ${businessConfig.phone} for instant quotes.`,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: `https://${businessConfig.website}`,
  },
  other: {
    "business:contact_data:street_address": businessConfig.address.street,
    "business:contact_data:locality": businessConfig.address.city,
    "business:contact_data:region": businessConfig.address.state,
    "business:contact_data:postal_code": businessConfig.address.pincode,
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": businessConfig.phone,
    "business:contact_data:website": `https://${businessConfig.website}`,
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={`https://${businessConfig.website}`} />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: businessConfig.businessName,
              description: businessConfig.tagline,
              url: `https://${businessConfig.website}`,
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
              openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-18:00", "Su 10:00-17:00"],
              foundingDate: businessConfig.established,
              priceRange: "$$",
              paymentAccepted: "Cash, Card, UPI",
              currenciesAccepted: "INR",
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
