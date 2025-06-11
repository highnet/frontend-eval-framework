import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function DataFetchingPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Data Fetching & Queries</h1>

      <p className="mb-4">This section deals with how your application requests and manages data from APIs.</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>Handling asynchronous data requests, caching, revalidation, and error management for API interactions.</p>
      </div>

      <Tabs defaultValue="fetch" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fetch">Fetch API</TabsTrigger>
          <TabsTrigger value="axios">Axios</TabsTrigger>
          <TabsTrigger value="react-query">React Query / TanStack Query</TabsTrigger>
        </TabsList>

        <TabsContent value="fetch" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Fetch API</h3>
          <p>The native JavaScript API for making network requests.</p>
          <p className="mb-2">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              MDN Web Docs - Fetch API
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Built-in to browsers, simple for basic requests, but requires manual handling of caching, loading states,
              and error handling.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (GET Request):</h4>
            <CodeBlock
              language="javascript"
              code={`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
            />
          </div>
        </TabsContent>

        <TabsContent value="axios" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Axios</h3>
          <p>A popular promise-based HTTP client for the browser and Node.js.</p>
          <p className="mb-2">
            <a
              href="https://github.com/axios/axios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Axios GitHub Repository
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Provides a more convenient API than `fetch`, with features like automatic JSON parsing, request/response
              interceptors, and better error handling.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (GET Request):</h4>
            <CodeBlock
              language="javascript"
              code={`import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`}
            />
          </div>
        </TabsContent>

        <TabsContent value="react-query" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">React Query / TanStack Query</h3>
          <p>
            A powerful data fetching and caching library for React (and other frameworks under TanStack). It handles
            server state, revalidation, optimistic updates, and more.
          </p>
          <p className="mb-2">
            <a
              href="https://tanstack.com/query/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              TanStack Query Official Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Manages "server state" with intelligent caching, background re-fetching, and synchronization,
              significantly simplifying complex data flows.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Fetching with `useQuery`):</h4>
            <CodeBlock
              language="jsx"
              code={`import { useQuery } from '@tanstack/react-query';

function Todos() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()),
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <ul>
      {data.map(todo => (<li key={todo.id}>{todo.title}</li>))}
    </ul>
  );
}`}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/forms">Previous: Forms</Link>
        </Button>
        <Button asChild>
          <Link href="/state-management">Next: State Management</Link>
        </Button>
      </div>
    </div>
  )
}
