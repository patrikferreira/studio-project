import './globals.css'
import { Inter } from 'next/font/google'
import DataProvider from './store/DataContext'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Studio Malima',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/5621bbdc8a.js" crossOrigin="anonymous"></script>
        <link rel="icon" href="/Assets/favicon.ico" sizes="any" />

      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
