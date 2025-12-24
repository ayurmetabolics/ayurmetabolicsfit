import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#1a1a1a]">
              Ayur<span className="text-[#87a96b]">Metabolics</span>
            </span>
            <span className="text-sm text-gray-500">.fit</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#87a96b] transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/research" 
              className="text-gray-700 hover:text-[#87a96b] transition-colors font-medium"
            >
              Research
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-[#87a96b] transition-colors font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

