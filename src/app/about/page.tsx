'use client'

import { ConsultationButton } from "@/components/consultation-button"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto mb-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          Hi, I'm Josef! I'm a dedicated mathematics tutor with a strong academic background, 
          having achieved A-levels in <strong>Mathematics, Further Mathematics, Physics, and Economics</strong>, 
          earning <strong>A grades in Maths and Further Maths</strong>. Since <strong>summer 2023</strong>, I have been tutoring 
          <strong> both online and in-person</strong>, working with students of all abilities.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">My Approach</h2>
        <p className="mb-6">
          I believe that every student learns differently, which is why I tailor my teaching 
          to their specific goals—whether that's <strong>exam preparation, building confidence, or improving problem-solving skills</strong>. 
          My lessons are <strong>interactive and engaging</strong>, designed to help students truly understand mathematical concepts 
          rather than just memorizing formulas.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Services Offered</h2>
        <p className="mb-6">
          I currently offer <strong>one-on-one tutoring</strong>, but please feel free to 
          <strong>enquire about group sessions</strong> if you're interested.
        </p>

        

        <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Why I Became a Tutor</h2>
        <p className="mb-6">
          I started tutoring because it allows me to combine my <strong>passion for mathematics</strong> 
          with my drive to help students <strong>achieve their goals</strong>. Seeing students grow in confidence 
          and succeed in their studies is what makes tutoring so rewarding for me.
        </p>

        <ConsultationButton />
      </div>
    </div>
  )
} 