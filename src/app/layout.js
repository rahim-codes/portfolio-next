import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.bio,
  keywords: [
    "Abdur Rahim",
    "rahim-codes",
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: site.github,
    siteName: `${site.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider delay={200}>
          <Navbar />
          <main className="flex flex-1 flex-col pt-24">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
