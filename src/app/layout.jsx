import './globals.css'

export const metadata = {
  title: 'Aniket Singh - Full Stack Developer',
  description: 'Portfolio website of Aniket Singh - Full Stack Developer & Problem Solver',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}