import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Analytics } from '@vercel/analytics/react'
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MathsWithJosef - Online Tutoring Services",
  description: "Expert math tutoring for KS2-GCSE, 11+ maths & NVR, and A-level maths",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background flex flex-col`}>
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold">MathsWithJosef</h1>
            </Link>
            <MobileNav />
            <ul className="hidden md:flex space-x-4">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/resources">Resources</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/testimonials">Testimonials</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto mt-8 px-4 flex-1">{children}</main>
        <footer className="bg-blue-600 text-white p-4">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} MathsWithJosef. All rights reserved.
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}

