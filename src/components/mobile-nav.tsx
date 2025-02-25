'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  
  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="block py-2 text-lg" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" className="block py-2 text-lg" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/faq" className="block py-2 text-lg" onClick={handleLinkClick}>
            FAQ
          </Link>
          <Link href="/resources" className="block py-2 text-lg" onClick={handleLinkClick}>
            Resources
          </Link>
          <Link href="/testimonials" className="block py-2 text-lg" onClick={handleLinkClick}>
            Testimonials
          </Link>
          <Link href="/contact" className="block py-2 text-lg" onClick={handleLinkClick}>
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 