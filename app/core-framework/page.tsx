import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CodeBlock } from '@/components/code-block';
import { KeyDifferences } from '@/components/key-differences';

export default function CoreFrameworkPage() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 w-full min-w-0">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Core Framework</h1>

      <p className="mb-4">
        This choice determines your application&apos;s architecture,
        capabilities, and complexity. Consider whether you need a simple
        client-side application (SPA) or a full-stack solution with server-side
        features.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>
          Application architecture, rendering strategy, development workflow,
          and deployment complexity. Choose based on your project&apos;s
          requirements for SEO, performance, and backend integration.
        </p>
      </div>

      <Tabs defaultValue="vite" className="mb-8">
        <TabsList className="flex flex-col sm:flex-row w-full h-auto sm:h-10 gap-1 p-1">
          <TabsTrigger value="vite" className="flex-1">
            Vite + React
          </TabsTrigger>
          <TabsTrigger value="nextjs" className="flex-1">
            Next.js
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vite" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">
            Vite + React (Single Page Application)
          </h3>
          <p>
            A fast build tool combined with React for creating client-side
            rendered applications. Provides minimal setup with manual
            configuration for routing, APIs, and SEO.
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
            <h4 className="font-medium mb-2">
              Additional setup typically needed:
            </h4>

            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium mb-1">
                  1. React Router for routing:
                </h5>
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
                <h5 className="text-sm font-medium mb-1">
                  2. Separate backend/API server:
                </h5>
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
                <h5 className="text-sm font-medium mb-1">
                  3. Manual SEO optimization:
                </h5>
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
          <h3 className="text-lg font-medium">
            Next.js (Full-stack Framework)
          </h3>
          <p>
            A comprehensive React framework with built-in solutions for routing,
            APIs, SEO, and optimization. Provides production-ready features out
            of the box with minimal configuration.
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
            <h4 className="font-medium mb-2">
              Features included out of the box:
            </h4>

            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium mb-1">
                  1. File-based routing (no React Router needed):
                </h5>
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
                <h5 className="text-sm font-medium mb-1">
                  2. API routes (built-in backend):
                </h5>
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
                <h5 className="text-sm font-medium mb-1">
                  3. SEO optimization (SSR/SSG):
                </h5>
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
                <h5 className="text-sm font-medium mb-1">
                  4. Image optimization:
                </h5>
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
                <h5 className="text-sm font-medium mb-1">
                  5. Automatic code splitting:
                </h5>
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

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Project Structure Comparison
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vite + React Structure</CardTitle>
              <CardDescription>
                Manual organization, explicit imports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`src/
├── App.tsx                  # Main app with router setup
├── main.tsx                 # Entry point
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/                   # Manual page organization
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── hooks/                   # Custom hooks
├── utils/                   # Utility functions
└── styles/
    └── globals.css

# Separate backend required
backend/
├── server.js               # Express server
├── routes/
│   └── api.js
└── models/`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next.js Structure</CardTitle>
              <CardDescription>
                Convention-based, automatic features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`app/
├── layout.tsx              # Root layout (automatic)
├── page.tsx                # Home page (automatic route)
├── about/
│   └── page.tsx            # /about route (automatic)
├── contact/
│   └── page.tsx            # /contact route (automatic)
├── api/                    # Built-in API (same project)
│   ├── users/
│   │   └── route.ts        # /api/users endpoint
│   └── posts/
│       └── route.ts        # /api/posts endpoint
├── globals.css             # Global styles
└── components/             # Shared components
    ├── Header.tsx
    └── Footer.tsx

# Everything in one project - no separate backend needed`}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <KeyDifferences
        title="Code Differences You'll Actually Write"
        differences={[
          {
            title: 'Vite + React: Manual Setup',
            description:
              'Explicit configuration and manual integration of tools',
            badges: ['Explicit', 'Manual', 'Granular control'],
            codeExamples: [
              {
                label: 'Routing Setup',
                code: `// Manual React Router setup in App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return <BrowserRouter>/* routes */</BrowserRouter>`,
              },
              {
                label: 'API Calls',
                code: `// Separate backend required
const API_BASE = 'http://localhost:3001/api'

const fetchUsers = async () => {
  const response = await fetch(\`\${API_BASE}/users\`)`,
              },
              {
                label: 'SEO Meta Tags',
                code: `// Manual meta management with React Helmet
import { Helmet } from 'react-helmet-async'

function Page() {
  return <><Helmet><title>Page Title</title></Helmet>`,
              },
            ],
          },
          {
            title: 'Next.js: Convention-Based',
            description: 'Built-in solutions with minimal configuration needed',
            badges: ['Convention', 'Built-in', 'Zero-config'],
            codeExamples: [
              {
                label: 'File-Based Routing',
                code: `// app/about/page.tsx - No router setup needed
export default function AboutPage() {
  return <div>About page</div>
}
// Automatically creates /about route`,
              },
              {
                label: 'API Routes',
                code: `// app/api/users/route.ts - Built-in backend
export async function GET() {
  const users = await db.users.findMany()
  return Response.json(users)
}`,
              },
              {
                label: 'Built-in SEO',
                code: `// app/page.tsx - Type-safe metadata
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Description'
}`,
              },
            ],
          },
        ]}
      />

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Development Commands Comparison
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vite + React Commands</CardTitle>
              <CardDescription>
                Multiple tools, separate backend
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Frontend Development:
                </h5>
                <CodeBlock
                  language="bash"
                  code={`# Start frontend (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview`}
                />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Backend Development (separate):
                </h5>
                <CodeBlock
                  language="bash"
                  code={`# Start Express server (port 3001)
cd backend
npm start

# Or with nodemon for development
npm run dev`}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next.js Commands</CardTitle>
              <CardDescription>Unified full-stack development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Full-stack Development:
                </h5>
                <CodeBlock
                  language="bash"
                  code={`# Start full-stack app (frontend + API)
npm run dev

# Build for production
npm run build

# Start production server
npm start`}
                />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Everything in one project:
                </h5>
                <CodeBlock
                  language="bash"
                  code={`# Frontend: http://localhost:3000
# API routes: http://localhost:3000/api/*
# No separate backend server needed`}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/introduction">Previous: Introduction</Link>
        </Button>
        <Button asChild>
          <Link href="/ui-components">Next: UI Components</Link>
        </Button>
      </div>
    </div>
  );
}
