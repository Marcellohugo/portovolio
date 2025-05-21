import { cn } from "../lib/utils"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import Nav from "@/components/navbar/Nav"
import "./globals.css"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "Marcello Hugo | %s",
    default: "Marcello Hugo",
  },
  description:
    "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
  metadataBase: new URL("https://aafrzl.my.id"),
  openGraph: {
    title: {
      template: "Marcello Hugo | %s",
      default: "Marcello Hugo",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    url: "https://aafrzl.my.id",
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
    creator: "@aafrzl",
    images: [
      {
        url: "/public/images/og-images.jpg",
        width: 1000,
        height: 1200,
      },
    ],
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          font.className
        )}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
