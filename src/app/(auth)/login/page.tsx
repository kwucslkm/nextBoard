// src/app/(auth)/login/page.tsx
'use client'

import LoginForm from '@/components/auth/LoginForm'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  useEffect(() => {
    if (message) {
      alert(message) // 쿼리 파라미터로 받은 안내문 띄우기
    }
  }, [message])

  return <LoginForm />
}
