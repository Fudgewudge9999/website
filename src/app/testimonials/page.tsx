'use client'

import { ConsultationButton } from "@/components/consultation-button"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah P.",
      text: "Josef's tutoring helped my daughter improve her GCSE math grade from a C to an A. Highly recommended!",
    },
    {
      name: "Michael R.",
      text: "Thanks to Josef, I was able to ace my A-Level maths exam. His explanations are clear and easy to understand.",
    },
    {
      name: "Emma L.",
      text: "Josef's 11+ maths preparation was excellent. My son felt confident and well-prepared for his exam.",
    },
    {
      name: "David T.",
      text: "I struggled with KS3 maths, but Josef's patient teaching style helped me catch up and even get ahead in class.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto mb-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">&ldquo;{testimonial.text}&rdquo;</p>
            <p className="text-blue-600 font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>

      <ConsultationButton />
    </div>
  )
}

