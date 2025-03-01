'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ConsultationButtonProps {
  className?: string
}

export function ConsultationButton({ className }: ConsultationButtonProps) {
  return (
    <div className="text-center mt-12">
      <Link href="/contact">
        <Button className={cn("text-xl py-6 px-8 rounded-xl hover:scale-105 transition-transform bg-black hover:bg-gray-800 text-white", className)}>
          Book a free trial session now
        </Button>
      </Link>
    </div>
  )
} 