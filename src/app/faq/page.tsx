'use client'

import { ConsultationButton } from "@/components/consultation-button"

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto mb-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h1>
      
      <div className="space-y-8">
        <div className="border-b pb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">What subjects do you tutor?</h2>
          <p className="text-lg">
            I primarily focus on mathematics for KS3 and KS4 students, with special attention to GCSE preparation. 
            I also offer tutoring for 11+ Maths & NVR and A-level Mathematics and Further Mathematics upon request.
          </p>
        </div>

        <div className="border-b pb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Do you offer online or in-person tutoring?</h2>
          <p className="text-lg">
            I offer both online and in-person tutoring. While at university, I primarily conduct online sessions. 
            When I'm back home in Maidenhead, I can provide in-person tutoring throughout the Thames Valley area.
          </p>
        </div>

        <div className="border-b pb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">How much do you charge?</h2>
          <p className="text-lg">
            My rates vary depending on the level of study, session duration, and whether it's online or in-person. 
            Please get in touch for a personalized quote based on your specific needs.
          </p>
        </div>

        <div className="border-b pb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">How long are your tutoring sessions?</h2>
          <p className="text-lg">
            Standard sessions are 60 minutes, but I can accommodate 45-minute or 90-minute sessions depending on 
            the student's age, attention span, and learning objectives.
          </p>
        </div>

        <div className="border-b pb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Do you assign homework?</h2>
          <p className="text-lg">
            I typically provide optional practice problems to reinforce concepts covered during our sessions. 
            The amount of homework can be adjusted based on the student's schedule and other commitments.
          </p>
        </div>

        <div className="border-b pb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">How do I book a session?</h2>
          <p className="text-lg">
            The easiest way to get started is to book a free consultation using the button below. 
            We'll discuss your needs, goals, and availability to find the best arrangement for your tutoring sessions.
          </p>
        </div>

        <div className="mt-10 text-center">
          <ConsultationButton />
        </div>
      </div>
    </div>
  )
} 