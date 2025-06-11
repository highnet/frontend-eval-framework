import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function CoreFrameworkPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Core Framework</h1>

      <p className="mb-4">
        This foundational choice dictates the underlying structure and rendering paradigm of your application.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>How the application is built, rendered, and structured from the ground up.</p>
      </div>

      <Tabs defaultValue="vite" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vite">Vite</TabsTrigger>
          <TabsTrigger value="nextjs">Next.js</TabsTrigger>
        </TabsList>

        <TabsContent value="vite" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Vite</h3>
          <p>
            A next-generation frontend tooling that provides an extremely fast development environment with a lean build
            process.
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
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>Focuses on speed and modern web standards.</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Project Creation):</h4>
            <CodeBlock language="bash" code={`npm create vite@latest my-vite-app -- --template react`} />
          </div>
        </TabsContent>

        <TabsContent value="nextjs" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Next.js</h3>
          <p>
            A React framework for building full-stack web applications. It enables React features like server-side
            rendering (SSR), static site generation (SSG), and API routes out of the box.
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
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Offers opinionated solutions for routing, data fetching, and rendering strategies, particularly powerful
              for SEO and performance-sensitive applications.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Page Component):</h4>
            <CodeBlock
              language="jsx"
              code={`// pages/index.js (or app/page.js in App Router)
export default function HomePage() {
  return <h1>Welcome to Next.js!</h1>;
}`}
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
