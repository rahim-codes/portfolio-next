import { navLinks } from "@/lib/data/site"

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rahim-codes.vercel.app"

  return navLinks.map((link) => ({
    url: `${baseUrl}${link.href === "/" ? "" : link.href}`,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }))
}
