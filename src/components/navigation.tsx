export function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo or site name */}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Existing navigation links */}
              <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                About
              </a>
              {/* Add the new FAQ link */}
              <a href="/faq" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                FAQ
              </a>
              {/* Other links */}
            </div>
          </div>
          {/* Mobile menu button and menu items */}
        </div>
      </div>
    </nav>
  )
} 