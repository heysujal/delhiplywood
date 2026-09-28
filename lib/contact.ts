import businessConfig from "@/config/business.json"

export const baseUrl = `https://${businessConfig.website}`

export const telHref = `tel:${businessConfig.phone}`

export function whatsappHref(message: string) {
  const number = businessConfig.whatsapp.replace(/[^0-9]/g, "")
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const directionsHref = businessConfig.googleMapsLink

export function productEnquiry(productName?: string) {
  return productName
    ? `Hi! I need ${productName}. Please share price and availability.`
    : "Hi! I'm interested in your plywood products. Please share more details and pricing."
}
