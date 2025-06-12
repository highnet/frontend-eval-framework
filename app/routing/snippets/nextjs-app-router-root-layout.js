export const nextjsAppRouterRootLayout = `// app/layout.tsx - Required root layout
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'My App',
  description: 'A simple Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-brand">
            <Link href="/">My App</Link>
          </div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <main className="content">
          {children}
        </main>
      </body>
    </html>
  )
}`;
