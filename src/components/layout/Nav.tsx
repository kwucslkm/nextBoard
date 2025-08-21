'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Login from './Login'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      })
      
      if (response.ok) {
        router.push('/login')
      }
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              NextBoard
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex justify-between">
            <Link href="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors" >
              홈
            </Link>
            <Link href="/members" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors" >
              회원 관리
            </Link>
            <Link href="/board" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors" >
              게시판
            </Link>
          </nav>
          <div>알림</div>
          {/* SHOWLOGIN RESISTOR */}
          {/* <div><Login/></div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-primary-600 p-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex justify-center">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/" onClick={() => setIsMenuOpen(false)}
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                홈
              </Link>
              <Link
                href="/members" onClick={() => setIsMenuOpen(false)}
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                회원 관리
              </Link>
              <Link
                href="/board" onClick={() => setIsMenuOpen(false)}
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                
              >
                게시판
              </Link>
              <button
                onClick={() => {
                  handleLogout()
                  setIsMenuOpen(false)
                }}
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                로그아웃
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 