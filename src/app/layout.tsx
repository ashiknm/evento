import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // title: 'Evento - Find events around you',
  // description: 'Browse more than 10,000 events worldwide',

  openGraph: {
    title: 'Evento',
    description: 'Browse more than 10,000 events worldwide',
    url: 'https://evento-neon-six.vercel.app/',
    siteName: 'Evento',
    images: [
      {
        url: "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white overflow-y-scroll`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
       
      </body>
    </html>
  )
}
