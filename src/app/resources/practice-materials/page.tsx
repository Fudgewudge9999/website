import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PracticeMaterials() {
  return (
    <div className="max-w-4xl mx-auto mb-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Practice Materials</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Past Papers & Mark Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources/practice-materials/edexcel">
              <Button className="w-full h-24 text-lg" variant="outline">
                Edexcel GCSE
              </Button>
            </Link>
            <Link href="/resources/practice-materials/edexcel-igcse">
              <Button className="w-full h-24 text-lg" variant="outline">
                Edexcel IGCSE
              </Button>
            </Link>
            <Link href="/resources/practice-materials/ocr">
              <Button className="w-full h-24 text-lg" variant="outline">
                OCR GCSE
              </Button>
            </Link>
            <Link href="/resources/practice-materials/aqa">
              <Button className="w-full h-24 text-lg" variant="outline">
                AQA GCSE
              </Button>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Topic-Based Questions</h2>
          <Link href="/resources/practice-materials/topic-questions">
            <Button className="w-full h-24 text-lg" variant="outline">
              Practice Questions by Topic
            </Button>
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Other Materials</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-3">
              <li>• 11+ Sample Questions and Solutions</li>
              <li>• KS2/KS3 Weekly Worksheets</li>
              <li>• Progress Tests</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
} 