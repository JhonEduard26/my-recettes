import type { Metadata } from 'next'
import '@fontsource-variable/plus-jakarta-sans';
import './normalize.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Recettes',
  description: 'My Recettes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
