import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from 'app/(shared)/Navbar';
import Footer from 'app/(shared)/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Future Trend AI Blog',
  description: 'Blog built in Next JS that uses AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
