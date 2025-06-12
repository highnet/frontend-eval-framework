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

// Import code snippets
import { reactRouterFileStructure } from './snippets/react-router-file-structure';
import { reactRouterBasicSetup } from './snippets/react-router-basic-setup';
import { reactRouterNavigation } from './snippets/react-router-navigation';
import { reactRouterPageComponents } from './snippets/react-router-page-components';
import { tanstackRouterFileStructure } from './snippets/tanstack-router-file-structure';
import { tanstackRouterRootRoute } from './snippets/tanstack-router-root-route';
import { tanstackRouterPageRoutes } from './snippets/tanstack-router-page-routes';
import { tanstackRouterAppSetup } from './snippets/tanstack-router-app-setup';
import { nextjsAppRouterFileStructure } from './snippets/nextjs-app-router-file-structure';
import { nextjsAppRouterRootLayout } from './snippets/nextjs-app-router-root-layout';
import { nextjsAppRouterPageComponents } from './snippets/nextjs-app-router-page-components';
import { nextjsAppRouterSpecialFiles } from './snippets/nextjs-app-router-special-files';
import { nextjsAppRouterNavigationComponent } from './snippets/nextjs-app-router-navigation-component';
import { reactRouterInstallationSetup } from './snippets/react-router-installation-setup';
import { reactRouterNavigationLinks } from './snippets/react-router-navigation-links';
import { reactRouterDynamicRoutes } from './snippets/react-router-dynamic-routes';
import { tanstackRouterInstallationSetup } from './snippets/tanstack-router-installation-setup';
import { tanstackRouterFileBasedDefinition } from './snippets/tanstack-router-file-based-definition';
import { tanstackRouterTypeSafeNavigation } from './snippets/tanstack-router-type-safe-navigation';
import { nextjsFileStructureRoutes } from './snippets/nextjs-file-structure-routes';
import { nextjsNavigationExample } from './snippets/nextjs-navigation-example';
import { nextjsDynamicRoutes } from './snippets/nextjs-dynamic-routes';
import { reactRouterRouteDefinitions } from './snippets/react-router-route-definitions';
import { tanstackRouterFileBasedComparison } from './snippets/tanstack-router-file-based-comparison';
import { nextjsAppRouterComparison } from './snippets/nextjs-app-router-comparison';
import { reactRouterStateManagement } from './snippets/react-router-state-management';
import { tanstackRouterStateManagement } from './snippets/tanstack-router-state-management';
import { nextjsAppRouterStateManagement } from './snippets/nextjs-app-router-state-management';

export default function RoutingPage() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 w-full min-w-0">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Routing</h1>

      <p className="mb-4">
        This defines how users navigate between different pages or views within
        your application.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>
          Managing URLs, navigation history, and rendering the correct
          components based on the current path.
        </p>
      </div>

      <Tabs defaultValue="react-router" className="mb-8">
        <TabsList className="flex flex-col sm:flex-row w-full h-auto sm:h-10 gap-1 p-1">
          <TabsTrigger value="react-router" className="flex-1">
            React Router
          </TabsTrigger>
          <TabsTrigger value="tanstack-router" className="flex-1">
            TanStack Router
          </TabsTrigger>
          <TabsTrigger value="next-app-router" className="flex-1">
            Next.js App Router
          </TabsTrigger>
        </TabsList>

        <TabsContent value="react-router" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">React Router</h3>
          <p>
            The standard routing library for React applications, providing
            declarative routing with component-based navigation.
          </p>
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
            <CodeBlock language="bash" code={reactRouterFileStructure} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Basic Setup & Navigation:</h4>
            <CodeBlock language="jsx" code={reactRouterBasicSetup} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Navigation Component:</h4>
            <CodeBlock language="jsx" code={reactRouterNavigation} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Page Components:</h4>
            <CodeBlock language="jsx" code={reactRouterPageComponents} />
          </div>
        </TabsContent>

        <TabsContent value="tanstack-router" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">TanStack Router</h3>
          <p>
            A fully type-safe router for React applications with
            TypeScript-first approach and powerful runtime validation.
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
            <h4 className="font-medium mb-1">
              Required File Structure (File-based):
            </h4>
            <CodeBlock language="bash" code={tanstackRouterFileStructure} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Root Route Setup:</h4>
            <CodeBlock language="tsx" code={tanstackRouterRootRoute} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Page Routes:</h4>
            <CodeBlock language="tsx" code={tanstackRouterPageRoutes} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">App Setup:</h4>
            <CodeBlock language="tsx" code={tanstackRouterAppSetup} />
          </div>
        </TabsContent>

        <TabsContent value="next-app-router" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Next.js App Router</h3>
          <p>
            The modern routing system in Next.js 13+ built on React Server
            Components, using file-system based routing with powerful
            conventions for layouts and pages.
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
            <CodeBlock language="bash" code={nextjsAppRouterFileStructure} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Root Layout:</h4>
            <CodeBlock language="tsx" code={nextjsAppRouterRootLayout} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Page Components:</h4>
            <CodeBlock language="tsx" code={nextjsAppRouterPageComponents} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Optional Special Files:</h4>
            <CodeBlock language="tsx" code={nextjsAppRouterSpecialFiles} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Navigation Component:</h4>
            <CodeBlock
              language="tsx"
              code={nextjsAppRouterNavigationComponent}
            />
          </div>
        </TabsContent>
      </Tabs>

      <KeyDifferences
        title="Code Differences You'll Actually Write"
        differences={[
          {
            title: 'React Router: Component-Based Setup',
            description: 'Manual configuration with JSX route definitions',
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: reactRouterInstallationSetup,
              },
              {
                label: 'Navigation Links',
                code: reactRouterNavigationLinks,
              },
              {
                label: 'Dynamic Routes',
                code: reactRouterDynamicRoutes,
              },
            ],
          },
          {
            title: 'TanStack Router: File-Based + Type-Safe',
            description: 'File-system routing with TypeScript-first approach',
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: tanstackRouterInstallationSetup,
              },
              {
                label: 'File-Based Route Definition',
                code: tanstackRouterFileBasedDefinition,
              },
              {
                label: 'Type-Safe Navigation',
                code: tanstackRouterTypeSafeNavigation,
              },
            ],
          },
          {
            title: 'Next.js App Router: File-System Conventions',
            description:
              'Zero-config routing with built-in layouts and loading states',
            codeExamples: [
              {
                label: 'File Structure = Routes',
                code: nextjsFileStructureRoutes,
              },
              {
                label: 'Navigation with Next.js',
                code: nextjsNavigationExample,
              },
              {
                label: 'Dynamic Routes',
                code: nextjsDynamicRoutes,
              },
            ],
          },
        ]}
      />

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Route Definition Comparison
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">React Router</CardTitle>
              <CardDescription>Programmatic route definitions</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="tsx" code={reactRouterRouteDefinitions} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">TanStack Router</CardTitle>
              <CardDescription>
                File-based with explicit definitions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={tanstackRouterFileBasedComparison}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next.js App Router</CardTitle>
              <CardDescription>Pure file-system conventions</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="bash" code={nextjsAppRouterComparison} />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Navigation & State Management
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">React Router</CardTitle>
              <CardDescription>Hooks and imperative navigation</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="tsx" code={reactRouterStateManagement} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">TanStack Router</CardTitle>
              <CardDescription>
                Type-safe navigation and search params
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="tsx" code={tanstackRouterStateManagement} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next.js App Router</CardTitle>
              <CardDescription>
                Server and client navigation hooks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="tsx" code={nextjsAppRouterStateManagement} />
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
  );
}
