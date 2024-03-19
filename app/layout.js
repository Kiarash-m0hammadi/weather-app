import './globals.css'

export const metadata = {
  title: 'A',
  description: 'B',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
