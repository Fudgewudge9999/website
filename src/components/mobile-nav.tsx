'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu } from "lucide-react"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="block py-2 text-lg">
            Home
          </Link>
          <Link href="/about" className="block py-2 text-lg">
            About
          </Link>
          <Link href="/resources" className="block py-2 text-lg">
            Resources
          </Link>
          <Link href="/testimonials" className="block py-2 text-lg">
            Testimonials
          </Link>
          <Link href="/contact" className="block py-2 text-lg">
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 