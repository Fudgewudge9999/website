import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel"
import { testimonials } from "@/lib/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-evenly min-h-full py-12 space-y-16">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to MathsWithJosef</h1>
        <p className="text-xl text-center max-w-2xl">
          Specialized GCSE mathematics tutoring to help students achieve their best results. Also offering support for A-level maths, 11+ maths & NVR, and KS2/KS3 mathematics. Personalized lessons tailored to your needs and learning style.
        </p>
        <div className="text-center mt-8">
          <Link href="/contact">
            <Button className="text-xl py-7 px-10 rounded-xl hover:scale-105 transition-transform bg-blue-600 hover:bg-blue-700 text-white font-bold">
              Book a free trial session now
            </Button>
          </Link>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">What My Students Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
          <div className="text-center mt-4">
            <Link href="/testimonials" className="text-blue-600 hover:underline font-medium">
              View all testimonials
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

