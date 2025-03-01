'use client'

import { ConsultationButton } from "@/components/consultation-button"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto mb-24">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          Hi, I'm Josef, a dedicated mathematics tutor with a strong mathematical background, 
          having achieved A-levels in Mathematics, Further Mathematics, Physics, and Economics.
          I am currently in my final year at Cardiff University studying economics, and based in Maidenhead when I'm back home.
          My passion for mathematics and teaching has driven me to help students unlock their full potential since 2023.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Me?</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Strong academic background with excellent grades in Mathematics and Further Mathematics</li>
          <li>Fresh perspective on current curriculum and examination techniques</li>
          <li>Patient and adaptable teaching style</li>
          <li>Experience with both online and in-person tutoring</li>
          <li>Flexible scheduling to accommodate your needs</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">My Approach</h2>
        <p className="mb-6">
          I understand that every student is unique, and I take the time to discover what works best for you. 
          Instead of a one-size-fits-all approach, I tailor each session to your specific goals, whether that's 
          fine-tuning exam techniques, boosting problem-solving skills, or simply gaining more confidence in maths.
        </p>
        
        <p className="mb-6">
          My sessions typically include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Personalized learning plans based on your current level and goals</li>
          <li>Regular progress assessments and feedback</li>
          <li>Exam-style questions and past paper practice</li>
          <li>Clear explanations using real-world examples</li>
          <li>Study techniques and revision strategies</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Services Offered</h2>
        <p className="mb-6">
          My focus is on providing high-quality tutoring for KS3 and KS4 students, with special attention given to GCSE
          preparation. While I offer online one-on-one sessions from university, I can also accommodate in-person tutoring 
          in the Thames Valley area and group sessions if needed.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">Available Subjects:</h3>
          <ul className="list-disc pl-6">
            <li>KS3 Mathematics</li>
            <li>GCSE Mathematics (All exam boards)</li>
            <li>11+ Maths & Non-Verbal Reasoning (Please enquire)</li>
            <li>A-level Mathematics and Further Mathematics (Please enquire)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Get Started</h2>
        <p className="mb-6">
          Ready to improve your mathematical skills? Book a free consultation where we can discuss your goals,
          assess your current level, and create a personalized learning plan. I'm here to help you succeed!
        </p>

        <ConsultationButton />
      </div>
    </div>
  )
} 