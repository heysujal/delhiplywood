import type { Metadata } from "next"
import Link from "next/link"

const baseUrl = "https://delhiplywood.com"

export const metadata: Metadata = {
  title:
    "Plywood for Home Renovation in Delhi | Modular Kitchen, Wardrobe, Flooring | Nitin Plywood House",
  description:
    "Plan your home renovation in Delhi with the right plywood for modular kitchens, wardrobes and flooring. Get Meranti plywood, HDMR boards, laminates and hardware from Nitin Plywood House in Alipur.",
  alternates: {
    canonical: `${baseUrl}/renovation`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/renovation`,
    title:
      "Plywood for Home Renovation in Delhi | Modular Kitchen, Wardrobe, Flooring | Nitin Plywood House",
    description:
      "Nitin Plywood House supplies moisture-resistant plywood, HDMR and laminates for complete home renovation in Delhi NCR.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nitin Plywood House - Home Renovation Plywood Solutions",
      },
    ],
  },
}

const faqs = [
  {
    q: "Modular kitchen ke liye kaun sa plywood? / Which plywood for modular kitchen?",
    a: "Modular kitchen ke liye BWR ya BWP grade 18mm Meranti plywood sabse accha hota hai. Sink ke paas aur wet areas mein ham BWP plywood recommend karte hain. For carcass and cabinets, use 18mm waterproof plywood with laminate or sunmica finish.",
  },
  {
    q: "Wardrobe ke liye 16mm ya 19mm? / 16mm or 19mm for wardrobe?",
    a: "Normal bedroom wardrobe ke liye 16mm plywood kaafi hota hai, lekin heavy storage aur long-term durability ke liye 19mm plywood best hai. Shutters ke liye 19mm, backs ke liye 6-9mm plywood use kar sakte hain.",
  },
  {
    q: "Kya BWP aur BWR mein fark hai? / What is the difference between BWP and BWR?",
    a: "BWR (Boiling Water Resistant) plywood indoor wet areas ke liye hota hai jaise kitchen and washbasin units. BWP (Boiling Water Proof) plywood IS:710 standard follow karta hai aur zyada severe moisture conditions ke liye use hota hai. BWP ka glue aur core zyada strong hota hai.",
  },
  {
    q: "Delhi mein plywood ka rate kya hai? / What is plywood price in Delhi?",
    a: "Delhi mein plywood ka rate thickness, grade aur brand par depend karta hai. Meranti plywood, pine plywood, MDF aur HDMR boards ke alag-alag price segments hote hain. Latest wholesale aur retail rate ke liye aap seedha Nitin Plywood House ko call kar sakte hain: +91-9212017608.",
  },
  {
    q: "MDF ya plywood, ghar ke furniture ke liye kya better hai? / MDF or plywood for home furniture?",
    a: "MDF smooth finish aur routing work ke liye accha hai, jaise designer shutters aur CNC designs. Plywood zyada strong, moisture resistant aur screw holding capacity mein better hota hai, isliye carcass, wardrobes aur bed frames ke liye plywood best hai. Combination approach sabse practical hoti hai.",
  },
  {
    q: "Kya aap delivery dete hain? / Do you offer delivery?",
    a: "Haan, Nitin Plywood House poori Delhi mein delivery karta hai, aur Gurugram, Noida, Ghaziabad, Faridabad, Sonipat aur Bahadurgarh tak bhi. Stock aur timing ke hisaab se same-day delivery possible hai. Bade orders ke liye transport se poore India mein supply hoti hai.",
  },
]

export default function RenovationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Home Renovation Plywood",
        item: `${baseUrl}/renovation`,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 px-4 sm:px-6 lg:px-8 pt-28 pb-24">
      <div className="container mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm mb-4 text-amber-700">
          <ol className="flex items-center gap-1">
            <li>
              <Link href="/" className="hover:text-amber-900 font-medium">
                Home
              </Link>
            </li>
            <li aria-hidden className="px-1">
              /
            </li>
            <li className="text-amber-900 font-semibold" aria-current="page">
              Home Renovation
            </li>
          </ol>
        </nav>

        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Complete Plywood Solutions for Home Renovation in Delhi
          </h1>
          <p className="text-amber-800 text-lg max-w-3xl mx-auto">
            Nitin Plywood House, Alipur – your one-stop shop for modular kitchen plywood, wardrobe
            boards, flooring underlay and hardware for full home renovation in Delhi NCR.
          </p>
        </header>

        <section className="mb-10 bg-white/90 border border-amber-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">Modular Kitchen Plywood</h2>
          <p className="text-amber-800 mb-2">
            Modular kitchen ke carcass ke liye 18mm BWR ya BWP grade Meranti plywood sabse popular
            choice hai. Sink unit, dishwasher ya washing machine ke paas hum BWP (IS:710) grade
            plywood recommend karte hain.
          </p>
          <ul className="list-disc list-inside text-amber-800 space-y-1 mb-2">
            <li>Recommended: 18mm BWP/BWR plywood for cabinets and carcass</li>
            <li>Recommended: MDF or HDMR for shutter fronts with high-quality laminate</li>
            <li>Product highlight: Action TESA HDMR boards for premium shutters and partitions</li>
          </ul>
          <p className="text-amber-800 mb-2">
            Moisture-resistant plywood se aapki modular kitchen ki life kaafi badh jaati hai. Sasta
            MR board use karne se 2-3 saal mein swelling aur delamination ki problem aa sakti hai.
          </p>
        </section>

        <section className="mb-10 bg-white/90 border border-amber-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">Wardrobe &amp; Furniture Boards</h2>
          <p className="text-amber-800 mb-2">
            Bedroom wardrobe, loft aur storage units ke liye thickness aur board selection bahut
            important hai.
          </p>
          <ul className="list-disc list-inside text-amber-800 space-y-1 mb-2">
            <li>Wardrobe carcass: 16mm ya 19mm plywood (19mm for heavy storage)</li>
            <li>Back panels: 6mm–9mm plywood ya MDF, depending on design</li>
            <li>Interior shutters: MDF with Sunmica or laminate finish for smooth look</li>
            <li>Hardware: Hinges, channels, locks, handles – sab kuch ek hi roof ke neeche</li>
            <li>Popular choices: Century, Green Ply equivalents, Action TESA HDMR boards</li>
          </ul>
        </section>

        <section className="mb-10 bg-white/90 border border-amber-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">Flooring Underlay</h2>
          <p className="text-amber-800 mb-2">
            Laminate, wooden ya vinyl flooring ke neeche ek strong aur level base zaroori hota hai.
          </p>
          <ul className="list-disc list-inside text-amber-800 space-y-1 mb-2">
            <li>Recommended: 6mm or 9mm pine plywood as flooring underlay</li>
            <li>Use a proper moisture barrier sheet before installing flooring</li>
            <li>Underlay se floor ki life, sound insulation aur feel behtar ho jaati hai</li>
          </ul>
        </section>

        <section className="mb-10 bg-white/90 border border-amber-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">Full House Renovation Package</h2>
          <p className="text-amber-800 mb-2">
            Ek typical 2BHK Delhi flat renovation mein modular kitchen, 2–3 wardrobes, TV unit,
            crockery unit, study table aur kuch loose furniture include hota hai.
          </p>
          <p className="text-amber-800 mb-2">
            Har project ka scope alag hota hai – isliye Nitin Plywood House aapko approximate sheet
            requirement aur material mix plan karne mein madad karta hai.
          </p>
          <p className="text-amber-900 font-semibold">
            Custom quotation ke liye simply{" "}
            <a href="tel:+919212017608" className="underline">
              +91-9212017608
            </a>{" "}
            par call karein ya{" "}
            <a
              href="https://wa.me/919212017608"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              WhatsApp message bhejein
            </a>
            .
          </p>
        </section>

        <section className="mb-10 bg-white/95 border border-amber-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Home Renovation FAQ – Hindi + English
          </h2>
          <dl className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold text-amber-900">{f.q}</dt>
                <dd className="text-amber-800">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-10 bg-white/90 border border-amber-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">Visit Our Store in Alipur</h2>
          <p className="text-amber-800 mb-2">
            Address: Main Narela Road, Dayal Market, Alipur Village, Delhi 110036
          </p>
          <p className="text-amber-800 mb-2">
            Phone:{" "}
            <a href="tel:+919212017608" className="font-semibold text-amber-900">
              +91-9212017608
            </a>
          </p>
          <p className="text-amber-800 mb-4">
            Nitin Plywood House – Alipur plywood market mein ek trusted GST registered plywood,
            sunmica, laminate, MDF, HDMR aur hardware supplier.
          </p>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-amber-100 shadow-sm">
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
        </section>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </div>
    </main>
  )
}

