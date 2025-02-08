import Link from "next/link"

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto mb-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Learning Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/resources/practice-materials" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Practice Materials</h2>
            <ul className="space-y-2">
              <li>• GCSE Past Papers</li>
              <li>• 11+ Sample Questions</li>
              <li>• KS2/KS3 Worksheets</li>
            </ul>
          </div>
        </Link>

        <Link href="/resources/online-resources" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Online Resources</h2>
            <ul className="space-y-2">
              <li>• Video Tutorials</li>
              <li>• Interactive Tools</li>
              <li>• Study Guides</li>
            </ul>
          </div>
        </Link>

        <Link href="/resources/exam-preparation" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Exam Preparation</h2>
            <ul className="space-y-2">
              <li>• Revision Tips</li>
              <li>• Exam Techniques</li>
              <li>• Study Strategies</li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  )
} 