import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
      <body className={`${inter.className} min-h-screen bg-background`}>
        <header className="bg-primary text-primary-foreground p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">MathsWithJosef</h1>
            <ul className="flex space-x-4">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/">Home</Link>
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
        <main className="container mx-auto mt-8 px-4">{children}</main>
        <footer className="bg-primary text-primary-foreground p-4 mt-8">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} MathsWithJosef. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

