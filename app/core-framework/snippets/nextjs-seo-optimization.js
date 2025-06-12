export default `// app/page.tsx - Automatic SEO with metadata
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - My App',
  description: 'Welcome to my app',
  openGraph: {
    title: 'Home - My App',
    description: 'Welcome to my app',
  },
}

// Content is rendered on server for SEO
export default function HomePage() {
  return <div>Content pre-rendered for search engines</div>
}`;
