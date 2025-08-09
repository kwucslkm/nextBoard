// app/layout.tsx
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400','500','700'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
  // preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nextboard.example.com'),
  title: { default: 'NextBoard', template: '%s | NextBoard' },
  description: 'Next.js + Prisma + PostgreSQL 기반 회원제 게시판',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    title: 'NextBoard',
    description: '회원제 게시판 SaaS',
    url: '/',
    siteName: 'NextBoard',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${noto.className} antialiased`}>

        <a href="#content" className="sr-only focus:not-sr-only">본문으로 건너뛰기</a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
