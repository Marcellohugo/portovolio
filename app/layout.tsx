import React from "react"
import { cn } from "../lib/utils"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"
import PreloadWrapper from "@/components/preload/PreloadWrapper"
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "Marcello Hugo | %s",
    default: "Marcello Hugo",
  },
  description:
    "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
  metadataBase: new URL("https://marcello.web.id/"),
  openGraph: {
    title: {
      template: "Marcello Hugo | %s",
      default: "Marcello Hugo",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    url: "https://marcello.web.id/",
    siteName: "Marcello Hugo",
    images: [
      {
        url: "/public/images/Profile.png",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Marco Marcello Hugo",
    "Marco",
    "Marcello",
    "Hugo",
    "frontend web developer",
    "frontend developer",
    "frontend engineer",
    "react",
    "nextjs",
    "creative",
    "creative developer",
    "creative frontend developer",
    "web developer",
    "web engineer",
    "tech",
    "indonesia",
    "indonesian",
    "indonesian developer",
    "indonesian web developer",
    "indonesian frontend developer",
    "indonesian web engineer",
    "indonesian frontend engineer",
    "indonesian creative developer",
    "portfolio",
    "portfolio website",
    "portfolio web",
    "portfolio web developer",
    "portfolio frontend developer",
    "portfolio web engineer",
  ],
  twitter: {
    card: "summary_large_image",
    title: {
      template: "Marcello Hugo | %s",
      default: "Marcello Hugo",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    creator: "@marcellohugo__",
    images: [
      {
        url: "/icons/logo.png",
        width: 1000,
        height: 1200,
      },
    ],
  },
  category: "technology",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(font.className)}>
        <PreloadWrapper>
          {children}
          <SpeedInsights />
        </PreloadWrapper>
      </body>
    </html>
  )
}
