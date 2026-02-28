import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hudson County One-Stop Career Center – Training Forms',
  description: 'ITA Program Forms – Hudson County One-Stop Career Center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
