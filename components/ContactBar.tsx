"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Phone, Navigation } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { getProduct } from "@/lib/products"
import { telHref, whatsappHref, directionsHref, productEnquiry } from "@/lib/contact"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Which kind of enquiry a link starts, based on its href.
function contactType(href: string): "call" | "whatsapp" | "directions" | null {
  if (href.startsWith("tel:")) return "call"
  if (href.includes("wa.me/")) return "whatsapp"
  if (href.includes("maps.app.goo.gl") || href.includes("google.com/maps")) return "directions"
  return null
}

// Sends call_click / whatsapp_click / directions_click to GA4 for every such
// link on the site (hero buttons, cards, blog CTAs, this bar), so enquiries can
// be counted per page. The gtag() queue is defined early in layout.js, so
// clicks made before gtag.js finishes loading are still sent.
function useContactClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return
      const type = contactType(link.getAttribute("href") ?? "")
      if (!type) return
      const params = {
        page_path: window.location.pathname,
        link_location: link.dataset.cta ?? "page",
      }
      window.gtag?.("event", `${type}_click`, params)
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])
}

// Fixed bottom bar on phones: Call, WhatsApp (pre-filled on product pages),
// Directions.
export default function ContactBar() {
  useContactClickTracking()
  const pathname = usePathname()
  const slug = pathname?.startsWith("/products/") ? pathname.split("/")[2] : undefined
  const product = slug ? getProduct(slug) : undefined

  const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold"

  return (
    <nav
      aria-label="Contact Nitin Plywood House"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-amber-200 bg-white/95 backdrop-blur shadow-[0_-4px_12px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
    >
      <a href={telHref} data-cta="sticky_bar" className={`${item} text-amber-900`}>
        <Phone className="w-5 h-5" aria-hidden />
        Call
      </a>
      <a
        href={whatsappHref(productEnquiry(product?.name))}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="sticky_bar"
        className={`${item} text-white bg-green-700`}
      >
        <FaWhatsapp className="w-5 h-5" aria-hidden />
        WhatsApp
      </a>
      <a
        href={directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="sticky_bar"
        className={`${item} text-amber-900`}
      >
        <Navigation className="w-5 h-5" aria-hidden />
        Directions
      </a>
    </nav>
  )
}
