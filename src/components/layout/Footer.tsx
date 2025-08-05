export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © 2024 NextBoard. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
            >
              이용약관
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-500 text-xs text-center">
            Next.js • Prisma • PostgreSQL • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
} 