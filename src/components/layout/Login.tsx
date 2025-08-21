'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  return (
    <header className="w-full bg-white">
      <div className=" mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center ">
        {/* 오른쪽 끝으로 밀기 bg-[#03C75A] */}
        <div className="ml-auto  items-center gap-4 border border-gray-300 rounded-md px-4 py-2 shadow-sm bg-blue-500 font-bold">
          <button onClick={() => router.push('/login')} className="text-sm text-white hover:text-primary-600" >
            로그인
          </button>
        </div>
        <div>
          <Link href="/register" className=" text-sm text-white hover:text-primary-600" >
            회원가입
          </Link>
        </div>
        
      </div>
    </header>
  )
}