import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to MathsWithJosef</h1>
      <Image
        src="/placeholder.svg?height=300&width=300"
        alt="Josef teaching math"
        width={300}
        height={300}
        className="rounded-full mb-8"
      />
      <p className="text-xl text-center max-w-2xl mb-8">
        Expert math tutoring for students from KS2 to GCSE, including 11+ maths & NVR, and A-level maths. Personalized
        lessons tailored to your needs and learning style.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

