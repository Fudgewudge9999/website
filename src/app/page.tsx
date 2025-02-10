import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-evenly min-h-full py-12 space-y-16">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to MathsWithJosef</h1>
        <p className="text-xl text-center max-w-2xl">
          Expert math tutoring for students from KS2 to GCSE, including 11+ maths & NVR, and A-level maths. Personalized
          lessons tailored to your needs and learning style.
        </p>
        <div className="text-center mt-8">
          <Link href="/contact">
            <Button className="text-xl py-6 px-8 rounded-xl hover:scale-105 transition-transform bg-blue-600 hover:bg-blue-700 text-white">
              Book Your Free Consultation Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">KS2-GCSE</h2>
          <p>Comprehensive tutoring for all levels of primary and secondary school mathematics.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">11+ Maths & NVR</h2>
          <p>Specialized preparation for 11+ exams, including Non-Verbal Reasoning.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">A-Level Maths</h2>
          <p>Advanced tutoring for A-Level mathematics, helping you excel in your exams.</p>
        </div>
      </div>
    </div>
  )
}

