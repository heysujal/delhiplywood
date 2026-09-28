import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import businessConfig from "@/config/business.json"
import Script from 'next/script'

const { businessName, tagline, phone, alternatePhone, email, address, geo, established } = businessConfig

const baseUrl = `https://${businessConfig.website}`
const logoUrl = `${baseUrl}${businessConfig.logo}`
const ogImageUrl = `${baseUrl}${businessConfig.ogImage}`

const title = `${businessName} | ${tagline}`
const seoDescription = `${businessName}: plywood, MDF, HDMR, sunmica, laminates, doors, Fevicol and hardware in Delhi since ${established}. Delivery across Delhi NCR, supply across India. Call ${phone}.`

export const metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description: seoDescription,
  applicationName: businessName,
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,

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

  // Open Graph for WhatsApp, Facebook, LinkedIn previews
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: businessName,
    title,
    description: seoDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${businessName} logo`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description: seoDescription,
    images: [ogImageUrl],
  },

  // Each page resolves its own canonical ("./" = the current path), so inner
  // pages never point back at the homepage.
  alternates: {
    canonical: "./",
  },

  other: {
    "theme-color": "#4c2d2a",
  },
}

// One LocalBusiness entity for the whole site. Everything here must match the
// Google Business Profile exactly (name, address, phone, pin).
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "@id": `${baseUrl}/#business`,
  name: businessName,
  description: seoDescription,
  url: baseUrl,
  logo: logoUrl,
  image: [
    `${baseUrl}/images/nitin-plywood-house-signboard-alipur-delhi.webp`,
    `${baseUrl}/images/nitin-plywood-house-shop-counter.webp`,
    `${baseUrl}/images/laminates-and-plywood-section-delhi.webp`,
  ],
  telephone: phone,
  email,
  foundingDate: established,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: businessConfig.paymentMethods.join(", "),
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: geo.latitude,
    longitude: geo.longitude,
  },
  hasMap: businessConfig.googleMapsLink,
  openingHoursSpecification: businessConfig.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  contactPoint: [phone, alternatePhone].filter(Boolean).map((tel) => ({
    "@type": "ContactPoint",
    telephone: tel,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["Hindi", "English"],
  })),
  areaServed: [
    { "@type": "State", name: "Delhi" },
    ...["Gurugram", "Noida", "Ghaziabad", "Faridabad", "Sonipat", "Bahadurgarh"].map((name) => ({
      "@type": "City",
      name,
    })),
    { "@type": "Country", name: "India" },
  ],
  // Product categories without prices or ratings: invented values here break
  // Google's structured data policies. Product pages will carry real data.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plywood, boards, laminates and hardware",
    itemListElement: businessConfig.products.map((product) => ({
      "@type": "OfferCatalog",
      name: product.name,
      description: product.description,
    })),
  },
  sameAs: [
    businessConfig.googleMapsLink,
    businessConfig.socialMedia.facebook,
    businessConfig.socialMedia.instagram,
  ].filter(Boolean),
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: businessName,
  url: baseUrl,
  publisher: { "@id": `${baseUrl}/#business` },
  inLanguage: "en-IN",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} antialiased`}>
        {children}
        <Analytics />
        {/* Google tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ESXN3N85E5"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
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
