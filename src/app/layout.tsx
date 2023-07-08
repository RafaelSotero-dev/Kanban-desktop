import { BackGroundImage } from '@/components/BackGroundImage'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Landing Page',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex items-start justify-center relative h-screen`}
      >
        {/* <BackGroundImage /> */}
        {children}
      </body>
    </html>
  )
}
