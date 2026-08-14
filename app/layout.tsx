import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/sonner"
import { profile } from "@/lib/site-data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const siteUrl = "https://rosslerboquiren.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI Engineering Student & Aspiring AI Developer`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Rossler Boquiren is an AI engineering student and aspiring AI developer in Montréal, Québec, building skills in artificial intelligence, software development, automation, and data.",
  keywords: [
    "Rossler Boquiren",
    "AI engineering student Montréal",
    "aspiring AI developer Montréal",
    "junior AI developer",
    "junior software developer",
    "Python and AI projects",
    "generative AI learner",
    "business process automation",
    "data engineering student",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: profile.name,
    title: `${profile.name} — AI Engineering Student & Aspiring AI Developer`,
    description:
      "AI engineering student and aspiring AI developer based in Montréal, Québec. Building practical technology that helps people.",
    // OG image placeholder — add /public/og-image.png (1200x630) to enable rich previews.
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineering Student & Aspiring AI Developer`,
    description:
      "AI engineering student and aspiring AI developer based in Montréal, Québec.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to main content
          </a>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
