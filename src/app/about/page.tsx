'use client'

import { ConsultationButton } from "@/components/consultation-button"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto mb-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          Hi, I'm Josef, a dedicated mathematics tutor with a strong mathematical background, 
          having achieved A-levels in Mathematics, Further Mathematics, Physics, and Economics.
          I am currently in my final year at Cardiff University studing economics, and based in Maidenhead when I'm back home.
          I started my tutoring in 2023, and have been tutoring both online and in-person ever since.
          
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">My Approach</h2>
        <p className="mb-6">
         I understand that every student is unique, and I take the time to discover what works best for you. 
         Instead of a one-size-fits-all approach, I tailor each session to your specific goals, whether that's 
         fine-tuning exam techniques, boosting problem-solving skills, or simply gaining more confidence in maths.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Services Offered</h2>
        <p className="mb-6">
         My focus is on providing high-quality tutoring for KS3 and KS4 students, with special attention given to GCSE
          preparation. While I offer online one-on-one sessions from university, I can also accommodate in-person tutoring 
          in the Thames Valley area and group sessions if needed; for 11+ Maths & NVR or A-level Maths and Further Maths, 
          please enquire for further details.
        </p>

        <ConsultationButton />
      </div>
    </div>
  )
} 