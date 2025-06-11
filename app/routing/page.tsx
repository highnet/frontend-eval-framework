import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

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
          <TabsTrigger value="next-app-router">Next.js App Router</TabsTrigger>
          <TabsTrigger value="tanstack-router">TanStack Router</TabsTrigger>
        </TabsList>

        <TabsContent value="react-router" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">React Router</h3>
          <p>The standard routing library for React applications, providing declarative routing.</p>
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
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>Uses React components to define routes and provides hooks for navigation.</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Route Definition):</h4>
            <CodeBlock
              language="jsx"
              code={`import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav><Link to="/">Home</Link> | <Link to="/about">About</Link></nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="next-app-router" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Next.js App Router</h3>
          <p>
            The new routing paradigm introduced in Next.js 13, built on React Server Components, offering powerful
            features like shared layouts, streaming, and nested routing.
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
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              File-system based routing where folders define routes and `page.js` files render UI. Optimized for
              server-side rendering and client-side navigation.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Nested Route in `app` directory):</h4>
            <CodeBlock
              language="jsx"
              code={`// app/dashboard/page.js
export default function DashboardPage() {
  return <h1>Dashboard Overview</h1>;
}

// app/dashboard/settings/page.js
export default function DashboardSettingsPage() {
  return <h2>Dashboard Settings</h2>;
}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="tanstack-router" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">TanStack Router</h3>
          <p>
            A fully type-safe router for React and Solid, designed to be performant, accessible, and developer-friendly.
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
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>Emphasizes type safety and a robust API for complex routing needs.</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Route Definition - excerpt):</h4>
            <CodeBlock
              language="jsx"
              code={`import { Router, Route, RootRoute } from '@tanstack/react-router'

const rootRoute = new RootRoute()
const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/', component: IndexComponent })
// ... more routes

const routeTree = rootRoute.addChildren([indexRoute])
const router = new Router({ routeTree })
// ... render with <RouterProvider router={router} />`}
            />
          </div>
        </TabsContent>
      </Tabs>

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
