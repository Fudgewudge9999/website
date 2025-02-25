'use client'

import { ConsultationButton } from "@/components/consultation-button"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// FAQ Item component for accordion functionality
function FAQItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={`border rounded-md overflow-hidden mb-2 ${isOpen ? 'bg-gray-50' : 'bg-white'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-base font-medium text-blue-600">{question}</h3>
        {isOpen ? 
          <ChevronUp className="h-4 w-4 text-blue-600 flex-shrink-0 ml-2" /> : 
          <ChevronDown className="h-4 w-4 text-blue-600 flex-shrink-0 ml-2" />
        }
      </button>
      
      {isOpen && (
        <div className="px-4 py-2 border-t">
          {answer}
        </div>
      )}
    </div>
  )
}

// Category component for main FAQ categories
function CategoryItem({ 
  category, 
  items 
}: { 
  category: string, 
  items: { question: string, answer: React.ReactNode }[] 
}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="mb-8 border rounded-lg overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors border-b"
      >
        <h2 className="text-2xl font-semibold text-blue-700">{category}</h2>
        {isOpen ? 
          <ChevronUp className="h-6 w-6 text-blue-700 flex-shrink-0 ml-2" /> : 
          <ChevronDown className="h-6 w-6 text-blue-700 flex-shrink-0 ml-2" />
        }
      </button>
      
      {isOpen && (
        <div className="p-5 bg-white">
          {items.map((item, index) => (
            <FAQItem 
              key={`faq-${category}-${index}`}
              question={item.question} 
              answer={item.answer}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  // Define FAQ categories and their items
  const faqCategories = [
    {
      category: "General Information",
      items: [
        {
          question: "What subjects and levels do you tutor?",
          answer: (
            <p className="text-sm">
              I primarily focus on mathematics for KS3 and KS4 students. 
              I also offer tutoring for 11+ Maths & NVR and A-level Mathematics and Further Mathematics upon request.
            </p>
          )
        },
        {
          question: "What exam boards do you cover?",
          answer: (
            <p className="text-sm">
              I cover all major exam boards including AQA, Edexcel, OCR, WJEC, and IGCSE. I'm familiar with the 
              specific requirements and formats of each board, ensuring students are well-prepared for their specific exams.
            </p>
          )
        },
        {
          question: "What are your qualifications and experience?",
          answer: (
            <p className="text-sm">
              I'm currently studying Mathematics at Imperial College London. I have over 3 years of tutoring experience, 
              helping students achieve excellent results in their mathematics exams. I achieved A* grades in Mathematics 
              and Further Mathematics at A-level and have a deep understanding of the curriculum and examination requirements.
            </p>
          )
        }
      ]
    },
    {
      category: "Lesson Structure & Policies",
      items: [
        {
          question: "Do you offer online or in-person tutoring?",
          answer: (
            <p className="text-sm">
              I offer both online and in-person tutoring. While at university, I primarily conduct online sessions. 
              When I'm back home in Maidenhead, I may be able to provide in-person tutoring throughout the Thames Valley area.
            </p>
          )
        },
        {
          question: "Do you offer group sessions or only one-on-one lessons?",
          answer: (
            <p className="text-sm">
              I primarily offer one-on-one tutoring to provide personalized attention and tailored instruction. 
              However, I can accommodate small group sessions (2-3 students) at a reduced per-student rate for 
              friends or siblings working at the same level.
            </p>
          )
        },
        {
          question: "How does online tutoring work, and what equipment is needed?",
          answer: (
            <p className="text-sm">
              Online sessions are conducted via Google Meet, which can be accessed without an account. You'll need a computer or tablet 
              with a stable internet connection, a microphone, and ideally a webcam. I'll provide all necessary digital 
              resources and materials before each session. 
            </p>
          )
        },
        {
          question: "Can parents sit in on lessons?",
          answer: (
            <p className="text-sm">
              You're more than welcome to sit in for the free trial session to see how I teach, but I encourage
               students to attend lessons independently for regular sessions. If you have any specific concerns, I'm always
               happy to dicuss them, so please get in touch.            
            </p>
          )
        }
      ]
    },
    {
      category: "Pricing & Booking",
      items: [
        {
          question: "How much do lessons cost, and what are your payment policies?",
          answer: (
            <p className="text-sm">
              My rates vary depending on the level of study, session duration, and whether it's online or in-person. 
              Please get in touch for a personalized quote based on your specific needs. I offer discounts for block 
              bookings and siblings. Payment is typically requested before each session or monthly for regular students.
            </p>
          )
        },
        {
          question: "Do you offer a free trial session?",
          answer: (
            <p className="text-sm">
              I offer a completely free 30-minute session which you are welcome to sit in for.  
              This gives you a chance to see how I teach firsthand, and determine whether I would be a good fit for your child.
              If you are interested in booking a session, don't hesitate to get in touch.             
              
            </p>
          )
        },
        {
          question: "What is your cancellation and rescheduling policy?",
          answer: (
            <p className="text-sm">
              I understand that schedules can change. Please provide at least 24 hours' notice for cancellations or rescheduling
              when possible. For last-minute emergencies, please contact me as soon as you can, and we'll work together to find
              a suitable alternative time. Sessions cancelled with less than 24 hours' notice may be charged at 50% of the full rate.
            </p>
          )
        },
        {
          question: "How do I book a session?",
          answer: (
            <p className="text-sm">
              The easiest way to get started is to book a free consultation using the button below. 
              We'll discuss your needs, goals, and availability to find the best arrangement for your tutoring sessions.
              You can also contact me via email at josefbasarab@gmail.com or on WhatsApp: 07788206510.
            </p>
          )
        }
      ]
    },
    {
      category: "Student Progress & Support",
      items: [
        {
          question: "How do you track student progress, and how can parents stay informed?",
          answer: (
            <p className="text-sm">
              I provide session-to-session feedback to keep you informed of your child's progress and am always open to a quick call 
              if you'd like to discuss things in more detail.
              
            </p>
          )
        },
        {
          question: "What if my child has specific learning needs?",
          answer: (
            <p className="text-sm">
              I adapt my teaching approach to accommodate various learning styles and needs. Please let me know about any specific
               learning requirements, as I have experience supporting students with diverse needs, and should be able to accommodate.
            </p>
          )
        },
        {
          question: "Do you provide additional resources or homework?",
          answer: (
            <p className="text-sm">
              Yes, I provide supplementary materials, practice problems, and recommended resources tailored to each student's
              needs. I generally don't assign mandatory homework, but can provide optional practice problems for students who want extra reinforcement.
                         
            </p>
          )
        },
        {
          question: "What is the typical duration and frequency of tutoring sessions?",
          answer: (
            <p className="text-sm">
              Standard sessions are 60 minutes, but I can accommodate 45-minute or 90-minute sessions depending on 
              the student's age, attention span, and learning objectives. Most students benefit from weekly sessions, 
              but we can arrange more frequent sessions during exam periods or less frequent sessions for maintenance support.
            </p>
          )
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 mb-16 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center pt-6">Frequently Asked Questions</h1>
      
      {/* Main categories with nested subquestions */}
      <div className="space-y-8">
        {faqCategories.map((category, index) => (
          <CategoryItem 
            key={`category-${index}`}
            category={category.category} 
            items={category.items}
          />
        ))}
      </div>

      <div className="mt-12 text-center pb-8">
        <ConsultationButton />
      </div>
    </div>
  )
} 