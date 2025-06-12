export const nextjsAppRouterNavigationComponent = `// components/navbar.tsx - Reusable navigation
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path
  
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link href="/">My App</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link 
            href="/" 
            className={isActive('/') ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className={isActive('/about') ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className={isActive('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}`;
