export default function AQAResources() {
  return (
    <div className="max-w-4xl mx-auto mb-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">AQA GCSE Resources</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Past Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-3">June 2023</h3>
              <ul className="space-y-2">
                <li>• Paper 1 (Non-Calculator)</li>
                <li>• Paper 2 (Calculator)</li>
                <li>• Paper 3 (Calculator)</li>
                <li>• Mark Schemes</li>
                <li>• Grade Boundaries</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-3">November 2022</h3>
              <ul className="space-y-2">
                <li>• Paper 1 (Non-Calculator)</li>
                <li>• Paper 2 (Calculator)</li>
                <li>• Paper 3 (Calculator)</li>
                <li>• Mark Schemes</li>
                <li>• Grade Boundaries</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Additional Resources</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-2">
              <li>• Examiner Reports</li>
              <li>• Specification</li>
              <li>• Formula Sheet</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
} 