import { Footer } from '@/components/footer/page'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'luyaridesigns',
  description: 'luyaridesigns:experience design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
