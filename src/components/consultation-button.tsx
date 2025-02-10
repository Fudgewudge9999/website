'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ConsultationButton() {
  return (
    <div className="text-center mt-12">
      <Link href="/contact">
        <Button className="text-xl py-6 px-8 rounded-xl hover:scale-105 transition-transform bg-blue-600 hover:bg-blue-700 text-white">
          Book Your Free Consultation Now
        </Button>
      </Link>
    </div>
  )
} 