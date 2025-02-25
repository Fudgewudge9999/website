import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
        
        <div className="mt-8 bg-blue-50 p-6 rounded-lg max-w-2xl">
          <p className="text-lg italic text-gray-700">"Josef's tutoring transformed my understanding of GCSE maths. His patient approach and clear explanations helped me achieve an 8 when I was previously struggling to get a 5. Highly recommended!"</p>
          <p className="text-right font-semibold mt-2">- Student Name, GCSE Student</p>
        </div>
      </div>
    </div>
  )
}

