import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="glass border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-3">DevToolkit</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Free online tools for developers and creators
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-6">
          <p className="mb-2">© {new Date().getFullYear()} DevToolkit. All rights reserved.</p>
          <p className="text-sm">Free online tools for developers</p>
        </div>
      </div>
    </footer>
  )
}
