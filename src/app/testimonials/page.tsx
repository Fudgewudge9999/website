'use client'

import { ConsultationButton } from "@/components/consultation-button"
import { testimonials } from "@/lib/testimonials"
import Link from "next/link"

export default function Testimonials() {
  return (
    <div className="max-w-4xl mx-auto mb-24 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Testimonials</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="font-bold">- {testimonial.author}, {testimonial.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center space-y-6">
        <p className="text-center text-lg max-w-2xl">
          Ready to experience the difference personalized tutoring can make? Book a free consultation today.
        </p>
        <ConsultationButton />
        <Link href="/" className="text-blue-600 hover:underline">
          Return to home
        </Link>
      </div>
    </div>
  )
}

