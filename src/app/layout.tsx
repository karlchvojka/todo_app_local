
// CSS imports
import './globals.css'

// NextJS Imports
import { Inter } from 'next/font/google'

// Variable Declarations
const inter = Inter({ subsets: ['latin'] })

// Exports
export const metadata = {
  title: 'Todo App Local',
  description: 'Todo App practice project built with NextJS, TypeScript and Material UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
