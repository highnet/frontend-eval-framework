import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import { KeyDifferences } from "@/components/key-differences"

export default function RoutingPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Routing</h1>

      <p className="mb-4">This defines how users navigate between different pages or views within your application.</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>Managing URLs, navigation history, and rendering the correct components based on the current path.</p>
      </div>

      <Tabs defaultValue="react-router" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="react-router">React Router</TabsTrigger>
          <TabsTrigger value="tanstack-router">TanStack Router</TabsTrigger>
          <TabsTrigger value="next-app-router">Next.js App Router</TabsTrigger>
        </TabsList>

        <TabsContent value="react-router" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">React Router</h3>
          <p>The standard routing library for React applications, providing declarative routing with component-based navigation.</p>
          <p className="mb-2">
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              React Router Official Documentation
            </a>
          </p>
          
          <div className="mb-4">
            <h4 className="font-medium mb-1">Required File Structure:</h4>
            <CodeBlock
              language="bash"
              code={`src/
├── App.jsx                 # Main app with router setup
├── index.js               # Entry point
├── pages/
│   ├── Home.jsx          # Home page component
│   ├── About.jsx         # About page component
│   ├── Contact.jsx       # Contact page component
│   └── NotFound.jsx      # 404 page component
└── components/
    └── Navbar.jsx        # Navigation component`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Basic Setup & Navigation:</h4>
            <CodeBlock
              language="jsx"
              code={`// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Navigation Component:</h4>
            <CodeBlock
              language="jsx"
              code={`// components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">My App</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Page Components:</h4>
            <CodeBlock
              language="jsx"
              code={`// pages/Home.jsx
function Home() {
  return (
    <div className="page">
      <h1>Welcome to Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  );
}

export default Home;

// pages/About.jsx
function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  );
}

export default About;

// pages/Contact.jsx
function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
    </div>
  );
}

export default Contact;`}
            />
          </div>
        </TabsContent>

        <TabsContent value="tanstack-router" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">TanStack Router</h3>
          <p>
            A fully type-safe router for React applications with TypeScript-first approach and powerful runtime validation.
          </p>
          <p className="mb-2">
            <a
              href="https://tanstack.com/router/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              TanStack Router Official Documentation
            </a>
          </p>
          
          <div className="mb-4">
            <h4 className="font-medium mb-1">Required File Structure (File-based):</h4>
            <CodeBlock
              language="bash"
              code={`src/
├── main.tsx               # Entry point
├── App.tsx               # App component
├── routes/
│   ├── __root.tsx        # Root route (layout)
│   ├── index.tsx         # Home page (/)
│   ├── about.tsx         # About page (/about)
│   └── contact.tsx       # Contact page (/contact)
└── routeTree.gen.ts      # Generated route tree (auto-generated)`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Root Route Setup:</h4>
            <CodeBlock
              language="tsx"
              code={`// routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">My App</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="[&.active]:font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      
      <main className="content">
        <Outlet />
      </main>
      
      <TanStackRouterDevtools />
    </div>
  ),
})`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Page Routes:</h4>
            <CodeBlock
              language="tsx"
              code={`// routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="page">
      <h1>Welcome to Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  ),
})

// routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => (
    <div className="page">
      <h1>About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  ),
})

// routes/contact.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: () => (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
    </div>
  ),
})`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">App Setup:</h4>
            <CodeBlock
              language="tsx"
              code={`// App.tsx
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App`}
            />
          </div>
        </TabsContent>

        <TabsContent value="next-app-router" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Next.js App Router</h3>
          <p>
            The modern routing system in Next.js 13+ built on React Server Components, using file-system based routing 
            with powerful conventions for layouts and pages.
          </p>
          <p className="mb-2">
            <a
              href="https://nextjs.org/docs/app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js App Router Documentation
            </a>
          </p>
          
          <div className="mb-4">
            <h4 className="font-medium mb-1">Required File Structure:</h4>
            <CodeBlock
              language="bash"
              code={`app/
├── layout.tsx          # Root layout (required)
├── page.tsx           # Home page (/)
├── loading.tsx        # Loading UI (optional)
├── error.tsx          # Error UI (optional)
├── not-found.tsx      # 404 page (optional)
├── about/
│   └── page.tsx       # About page (/about)
└── contact/
    └── page.tsx       # Contact page (/contact)

components/
└── navbar.tsx         # Shared navigation component`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Root Layout:</h4>
            <CodeBlock
              language="tsx"
              code={`// app/layout.tsx - Required root layout
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
}`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Page Components:</h4>
            <CodeBlock
              language="tsx"
              code={`// app/page.tsx - Home page
export default function HomePage() {
  return (
    <div className="page">
      <h1>Welcome to Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  )
}

// app/about/page.tsx - About page
export default function AboutPage() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  )
}

// app/contact/page.tsx - Contact page
export default function ContactPage() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
    </div>
  )
}`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Optional Special Files:</h4>
            <CodeBlock
              language="tsx"
              code={`// app/loading.tsx - Loading UI
export default function Loading() {
  return (
    <div className="loading">
      <p>Loading...</p>
    </div>
  )
}

// app/error.tsx - Error UI
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

// app/not-found.tsx - 404 page
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}`}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Navigation Component:</h4>
            <CodeBlock
              language="tsx"
              code={`// components/navbar.tsx - Reusable navigation
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
}`}
            />
          </div>
        </TabsContent>
      </Tabs>

      <KeyDifferences 
        title="Code Differences You'll Actually Write"
        differences={[
          {
            title: "React Router: Component-Based Setup",
            description: "Manual configuration with JSX route definitions",
            badges: ["Manual Setup", "JSX Routes", "Component-based"],
            codeExamples: [
              {
                label: "Installation & Setup",
                code: `npm install react-router-dom

// App.jsx - Manual router configuration
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}`
              },
              {
                label: "Navigation Links",
                code: `import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  return (
    <nav>
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'active' : ''}
      >
        Home
      </Link>
      <Link 
        to="/about"
        className={location.pathname === '/about' ? 'active' : ''}
      >
        About
      </Link>
    </nav>
  )
}`
              },
              {
                label: "Dynamic Routes",
                code: `// Route definition
<Route path="/user/:id" element={<UserProfile />} />

// Component using route params
import { useParams } from 'react-router-dom'

function UserProfile() {
  const { id } = useParams()
  
  return <div>User ID: {id}</div>
}`
              }
            ]
          },
          {
            title: "TanStack Router: File-Based + Type-Safe",
            description: "File-system routing with TypeScript-first approach",
            badges: ["File-Based", "Type-Safe", "Auto-Generated"],
            codeExamples: [
              {
                label: "Installation & Setup",
                code: `npm install @tanstack/react-router
npm install -D @tanstack/router-vite-plugin

// vite.config.ts
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  plugins: [react(), TanStackRouterVite()]
})`
              },
              {
                label: "File-Based Route Definition",
                code: `// routes/index.tsx - Automatic / route
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <div>Home Page</div>
})

// routes/about.tsx - Automatic /about route
export const Route = createFileRoute('/about')({
  component: () => <div>About Page</div>
})`
              },
              {
                label: "Type-Safe Navigation",
                code: `// Automatic type safety for routes
import { Link } from '@tanstack/react-router'

function Navbar() {
  return (
    <nav>
      {/* TypeScript knows these routes exist */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user/$userId" params={{ userId: '123' }}>
        User
      </Link>
    </nav>
  )
}`
              }
            ]
          },
          {
            title: "Next.js App Router: File-System Conventions",
            description: "Zero-config routing with built-in layouts and loading states",
            badges: ["Zero Config", "File-System", "Server Components"],
            codeExamples: [
              {
                label: "File Structure = Routes",
                code: `// No installation needed - built into Next.js
app/
├── page.tsx           # / route
├── about/
│   └── page.tsx       # /about route
├── users/
│   ├── page.tsx       # /users route
│   └── [id]/
│       └── page.tsx   # /users/[id] route
└── layout.tsx         # Shared layout`
              },
              {
                label: "Navigation with Next.js",
                code: `import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav>
      <Link 
        href="/" 
        className={pathname === '/' ? 'active' : ''}
      >
        Home
      </Link>
      <Link 
        href="/about"
        className={pathname === '/about' ? 'active' : ''}
      >
        About
      </Link>
    </nav>
  )
}`
              },
              {
                label: "Dynamic Routes",
                code: `// app/users/[id]/page.tsx - Dynamic route
export default function UserPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  return <div>User ID: {params.id}</div>
}

// Built-in loading and error states
// app/users/[id]/loading.tsx
export default function Loading() {
  return <div>Loading user...</div>
}`
              }
            ]
          }
        ]}
      />

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Route Definition Comparison</h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">React Router</CardTitle>
              <CardDescription>Programmatic route definitions</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`// All routes defined in one place
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/blog" element={<Blog />}>
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}`}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">TanStack Router</CardTitle>
              <CardDescription>File-based with explicit definitions</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`routes/
├── __root.tsx          # Root layout
├── index.tsx           # / route
├── about.tsx           # /about route
├── users/
│   ├── index.tsx       # /users route
│   └── $userId.tsx     # /users/$userId route
└── blog/
    ├── index.tsx       # /blog route
    └── $slug.tsx       # /blog/$slug route

# Auto-generates routeTree.gen.ts with types`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next.js App Router</CardTitle>
              <CardDescription>Pure file-system conventions</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`app/
├── page.tsx            # / route
├── about/
│   └── page.tsx        # /about route
├── users/
│   ├── page.tsx        # /users route
│   └── [id]/
│       └── page.tsx    # /users/[id] route
├── blog/
│   ├── page.tsx        # /blog route
│   └── [slug]/
│       └── page.tsx    # /blog/[slug] route
└── not-found.tsx       # 404 page

# No configuration needed`}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Navigation & State Management</h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">React Router</CardTitle>
              <CardDescription>Hooks and imperative navigation</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`import { 
  useNavigate, 
  useLocation, 
  useParams, 
  useSearchParams 
} from 'react-router-dom'

function MyComponent() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const handleLogin = () => {
    // Programmatic navigation
    navigate('/dashboard', { replace: true })
  }
  
  const updateSearch = () => {
    setSearchParams({ filter: 'active' })
  }
  
  return (
    <div>
      <p>Current path: {location.pathname}</p>
      <p>User ID: {params.id}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}`}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">TanStack Router</CardTitle>
              <CardDescription>Type-safe navigation and search params</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`import { 
  useNavigate, 
  useLocation, 
  useParams, 
  useSearch 
} from '@tanstack/react-router'

function MyComponent() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams({ from: '/users/$userId' })
  const search = useSearch({ from: '/users' })
  
  const handleLogin = () => {
    // Type-safe navigation
    navigate({ 
      to: '/dashboard',
      search: { tab: 'overview' }
    })
  }
  
  return (
    <div>
      <p>Current path: {location.pathname}</p>
      <p>User ID: {params.userId}</p> {/* Type-safe */}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next.js App Router</CardTitle>
              <CardDescription>Server and client navigation hooks</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`'use client'
import { 
  useRouter, 
  usePathname, 
  useSearchParams 
} from 'next/navigation'

function MyComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const handleLogin = () => {
    // Client-side navigation
    router.push('/dashboard')
    // Or server-side redirect in Server Component
    // redirect('/dashboard')
  }
  
  const updateSearch = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('filter', 'active')
    router.push(pathname + '?' + params.toString())
  }
  
  return (
    <div>
      <p>Current path: {pathname}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}`}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/css-styling">Previous: CSS & Styling</Link>
        </Button>
        <Button asChild>
          <Link href="/forms">Next: Forms</Link>
        </Button>
      </div>
    </div>
  )
}
