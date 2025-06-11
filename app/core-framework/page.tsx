import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function CoreFrameworkPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Core Framework</h1>

      <p className="mb-4">
        This choice determines your application's architecture, capabilities, and complexity. Consider whether you need 
        a simple client-side application (SPA) or a full-stack solution with server-side features.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>Application architecture, rendering strategy, development workflow, and deployment complexity. Choose based on your project's requirements for SEO, performance, and backend integration.</p>
      </div>

      <Tabs defaultValue="vite" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vite">Vite + React</TabsTrigger>
          <TabsTrigger value="nextjs">Next.js</TabsTrigger>
        </TabsList>

        <TabsContent value="vite" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Vite + React (Single Page Application)</h3>
          <p>
            A fast build tool combined with React for creating client-side rendered applications. 
            Provides minimal setup with manual configuration for routing, APIs, and SEO.
          </p>
          <p className="mb-2">
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Vite Official Documentation
            </a>
          </p>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">Additional setup typically needed:</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium mb-1">1. React Router for routing:</h5>
                <CodeBlock
                  language="tsx"
                  code={`// Install React Router
npm install react-router-dom

// App.tsx - Manual routing setup
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}`}
                />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">2. Separate backend/API server:</h5>
                <CodeBlock
                  language="tsx"
                  code={`// Frontend API calls to separate backend
const fetchUsers = async () => {
  const response = await fetch('http://localhost:3001/api/users')
  return response.json()
}

// Or using a library like Axios
import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3001/api'
})

// Requires separate Express/Node.js server running
// on different port (3001) than frontend (3000)`}
                />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">3. Manual SEO optimization:</h5>
                <CodeBlock
                  language="tsx"
                  code={`// Manual meta tag management with React Helmet
npm install react-helmet-async

import { Helmet } from 'react-helmet-async'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - My App</title>
        <meta name="description" content="Welcome to my app" />
        <meta property="og:title" content="Home - My App" />
      </Helmet>
      <div>Content rendered on client-side only</div>
    </>
  )
}`}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Project Structure):</h4>
            <CodeBlock 
              language="bash" 
              code={`# Create new Vite React project
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install

# Basic SPA project structure
my-react-app/
├── public/
├── src/
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css
├── index.html               # Single HTML file
├── package.json
├── tsconfig.json
└── vite.config.ts

# Start development server
npm run dev
`} 
            />
          </div>
        </TabsContent>

        <TabsContent value="nextjs" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Next.js (Full-stack Framework)</h3>
          <p>
            A comprehensive React framework with built-in solutions for routing, APIs, SEO, and optimization. 
            Provides production-ready features out of the box with minimal configuration.
          </p>
          <p className="mb-2">
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js Official Documentation
            </a>
          </p>

          <div className="mb-4">
            <h4 className="font-medium mb-2">Features included out of the box:</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium mb-1">1. File-based routing (no React Router needed):</h5>
                <CodeBlock
                  language="bash"
                  code={`# Automatic routing based on file structure
app/
├── page.tsx                 # → /
├── about/
│   └── page.tsx             # → /about
├── blog/
│   ├── page.tsx             # → /blog
│   └── [slug]/
│       └── page.tsx         # → /blog/[slug] (dynamic route)
└── api/
    └── users/
        └── route.ts         # → /api/users`}
                />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">2. API routes (built-in backend):</h5>
                <CodeBlock
                  language="tsx"
                  code={`// app/api/users/route.ts - Built-in API endpoints
export async function GET() {
  const users = await fetchUsersFromDB()
  return Response.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newUser = await createUser(body)
  return Response.json(newUser)
}

// Frontend can call directly without separate server
const response = await fetch('/api/users')
const users = await response.json()`}
                />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">3. SEO optimization (SSR/SSG):</h5>
                <CodeBlock
                  language="tsx"
                  code={`// app/page.tsx - Automatic SEO with metadata
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
}`}
                />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">4. Image optimization:</h5>
                <CodeBlock
                  language="tsx"
                  code={`// Automatic image optimization with next/image
import Image from 'next/image'

function ProfilePage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={300}
      height={300}
      // Automatic: WebP conversion, lazy loading, 
      // responsive images, blur placeholder
    />
  )
}`}
                />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">5. Automatic code splitting:</h5>
                <CodeBlock
                  language="tsx"
                  code={`// Automatic code splitting per page/component
import dynamic from 'next/dynamic'

// Heavy component loaded only when needed
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false // Optional: disable server-side rendering
})

// Each page automatically gets its own bundle
// /about → about.js, /blog → blog.js, etc.`}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Project Structure):</h4>
            <CodeBlock
              language="bash"
              code={`# Create new Next.js project
npx create-next-app@latest my-next-app --typescript --tailwind --eslint --app

# Full-stack project structure with built-in features
my-next-app/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # File-based routing
│   └── api/                 # Built-in API routes
│       └── users/
│           └── route.ts     # Backend endpoints
├── components/              # Component directory
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS config
├── tsconfig.json           # TypeScript config
└── package.json
`}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/introduction">Previous: Introduction</Link>
        </Button>
        <Button asChild>
          <Link href="/ui-components">Next: UI Components</Link>
        </Button>
      </div>
    </div>
  )
}
