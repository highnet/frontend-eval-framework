import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/code-block';
import { KeyDifferences } from '@/components/key-differences';
import { FetchApiExample } from '@/components/examples/fetch-api-example';
import { AxiosExample } from '@/components/examples/axios-example';
import { TanStackQueryExample } from '@/components/examples/tanstack-query-example';
import { fetchApiInterfaces } from './snippets/fetch-api-interfaces';
import { fetchApiBasic } from './snippets/fetch-api-basic';
import { fetchApiMutations } from './snippets/fetch-api-mutations';
import { axiosInstallation } from './snippets/axios-installation';
import { axiosFetching } from './snippets/axios-fetching';
import { axiosMutations } from './snippets/axios-mutations';
import { tanstackInstallation } from './snippets/tanstack-installation';
import { tanstackProvider } from './snippets/tanstack-provider';
import { tanstackLayout } from './snippets/tanstack-layout';
import { tanstackUsage } from './snippets/tanstack-usage';
import { tanstackMutations } from './snippets/tanstack-mutations';
import { fetchBasicDataFetching } from './snippets/fetch-basic-data-fetching';
import { fetchCreatingData } from './snippets/fetch-creating-data';
import { fetchErrorHandling } from './snippets/fetch-error-handling';
import { axiosInstallationSetup } from './snippets/axios-installation-setup';
import { axiosSimplifiedFetching } from './snippets/axios-simplified-fetching';
import { axiosCrudOperations } from './snippets/axios-crud-operations';
import { tanstackInstallationProvider } from './snippets/tanstack-installation-provider';
import { tanstackAutomaticFetching } from './snippets/tanstack-automatic-fetching';
import { tanstackOptimisticMutations } from './snippets/tanstack-optimistic-mutations';

export default function DataFetchingPage() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 w-full min-w-0">
      <h1 className="text-3xl font-bold tracking-tight mb-6">
        Data Fetching & Queries
      </h1>

      <p className="mb-4">
        This section deals with how your application requests and manages data
        from APIs, including both queries (reading data) and mutations
        (creating, updating, deleting data).
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>
          Handling asynchronous data requests, mutations, caching, revalidation,
          optimistic updates, and error management for API interactions.
        </p>
      </div>

      <Tabs defaultValue="fetch" className="mb-8">
        <TabsList className="flex flex-col sm:flex-row w-full h-auto sm:h-10 gap-1 p-1">
          <TabsTrigger value="fetch" className="flex-1">
            Fetch API
          </TabsTrigger>
          <TabsTrigger value="axios" className="flex-1">
            Axios
          </TabsTrigger>
          <TabsTrigger value="react-query" className="flex-1">
            TanStack Query
          </TabsTrigger>
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
              Built-in to browsers, simple for basic requests, but requires
              manual handling of caching, loading states, and error handling.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <FetchApiExample />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">
                TypeScript Interface & Basic Setup:
              </h4>
              <CodeBlock language="typescript" code={fetchApiInterfaces} />
            </div>

            <div>
              <h4 className="font-medium mb-1">Fetching Data:</h4>
              <CodeBlock
                language="javascript"
                isShortSnippet={true}
                code={fetchApiBasic}
              />
            </div>

            <div>
              <h4 className="font-medium mb-1">
                Mutations (Create, Update, Delete):
              </h4>
              <CodeBlock language="javascript" code={fetchApiMutations} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="axios" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Axios</h3>
          <p>
            A popular promise-based HTTP client for the browser and Node.js.
          </p>
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
              Provides a more convenient API than `fetch`, with features like
              automatic JSON parsing, request/response interceptors, and better
              error handling.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <AxiosExample />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">
                Installation & TypeScript Setup:
              </h4>
              <CodeBlock language="bash" code={axiosInstallation} />
            </div>

            <div>
              <h4 className="font-medium mb-1">Fetching Data:</h4>
              <CodeBlock language="javascript" code={axiosFetching} />
            </div>

            <div>
              <h4 className="font-medium mb-1">
                Mutations (Create, Update, Delete):
              </h4>
              <CodeBlock language="javascript" code={axiosMutations} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="react-query" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">TanStack Query</h3>
          <p>
            A powerful data fetching and caching library for React (and other
            frameworks under TanStack). It handles server state, revalidation,
            optimistic updates, and more.
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
              Manages &quot;server state&quot; with intelligent caching,
              background re-fetching, and synchronization, significantly
              simplifying complex data flows.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <TanStackQueryExample />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Installation & Dependencies:</h4>
              <CodeBlock language="bash" code={tanstackInstallation} />
            </div>

            <div>
              <h4 className="font-medium mb-1">
                Setup QueryProvider with DevTools:
              </h4>
              <CodeBlock language="jsx" code={tanstackProvider} />
            </div>

            <div>
              <h4 className="font-medium mb-1">Using in Layout/App:</h4>
              <CodeBlock language="jsx" code={tanstackLayout} />
            </div>

            <div>
              <h4 className="font-medium mb-1">Component Usage:</h4>
              <CodeBlock language="jsx" code={tanstackUsage} />
            </div>

            <div>
              <h4 className="font-medium mb-1">Mutations with useMutation:</h4>
              <CodeBlock language="jsx" code={tanstackMutations} />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <KeyDifferences
        title="Code Differences You'll Actually Write"
        differences={[
          {
            title: 'Fetch API: Manual State Management',
            description:
              'Native browser API requiring manual handling of loading, errors, and caching',
            badges: ['Native', 'No dependencies', 'Manual control'],
            codeExamples: [
              {
                label: 'Basic Data Fetching',
                code: fetchBasicDataFetching,
              },
              {
                label: 'Creating Data (Mutations)',
                code: fetchCreatingData,
              },
              {
                label: 'Error Handling',
                code: fetchErrorHandling,
              },
            ],
            considerations: [
              'You want zero dependencies and native browser support',
              'Building simple applications with basic data needs',
              'You prefer manual control over caching and state',
              'Working with modern browsers only',
              'Team is comfortable with manual error handling and loading states',
            ],
          },
          {
            title: 'Axios: Enhanced HTTP Client',
            description:
              'Feature-rich HTTP client with interceptors, automatic transforms, and better error handling',
            badges: ['Interceptors', 'Auto-transforms', 'Battle-tested'],
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: axiosInstallationSetup,
              },
              {
                label: 'Simplified Data Fetching',
                code: axiosSimplifiedFetching,
              },
              {
                label: 'CRUD Operations',
                code: axiosCrudOperations,
              },
            ],
            considerations: [
              'You need advanced features like request/response interceptors',
              'Working with complex API authentication flows',
              'You want automatic request/response transformations',
              'Team prefers a familiar, established library for CRUD operations',
              'Better error handling and debugging capabilities are important',
            ],
          },
          {
            title: 'TanStack Query: Smart Data Management',
            description:
              'Intelligent caching, background updates, optimistic mutations, and automatic state management',
            badges: [
              'Smart caching',
              'Optimistic updates',
              'Auto-sync',
              'DevTools',
            ],
            codeExamples: [
              {
                label: 'Installation & Provider',
                code: tanstackInstallationProvider,
              },
              {
                label: 'Automatic Data Fetching',
                code: tanstackAutomaticFetching,
              },
              {
                label: 'Optimistic Mutations',
                code: tanstackOptimisticMutations,
              },
            ],
            considerations: [
              'You need sophisticated caching and background updates',
              'Building data-heavy applications with frequent mutations',
              'Real-time synchronization and optimistic updates are important',
              'You want built-in loading states, error handling, and rollback logic',
              'Developer experience with automatic cache invalidation matters',
              'Complex data dependencies and server state management are required',
            ],
          },
        ]}
      />

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/forms">Previous: Forms</Link>
        </Button>
        <Button asChild>
          <Link href="/state-management">Next: State Management</Link>
        </Button>
      </div>
    </div>
  );
}
