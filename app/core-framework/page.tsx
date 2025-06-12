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
import useReactRouterCode from './snippets/use-react-router';
import viteFrontendApiCallsCode from './snippets/vite-frontend-api-calls';
import viteSeoOptimizationCode from './snippets/vite-seo-optimization';
import viteProjectStructureCode from './snippets/vite-project-structure';
import nextjsFileBasedRoutingCode from './snippets/nextjs-file-based-routing';
import nextjsApiRoutesCode from './snippets/nextjs-api-routes';
import nextjsSeoOptimizationCode from './snippets/nextjs-seo-optimization';
import nextjsImageOptimizationCode from './snippets/nextjs-image-optimization';
import nextjsCodeSplittingCode from './snippets/nextjs-code-splitting';
import nextjsProjectStructureCode from './snippets/nextjs-project-structure';
import viteStructureComparisonCode from './snippets/vite-structure-comparison';
import nextjsStructureComparisonCode from './snippets/nextjs-structure-comparison';
import viteFrontendCommandsCode from './snippets/vite-frontend-commands';
import viteBackendCommandsCode from './snippets/vite-backend-commands';
import nextjsFullstackCommandsCode from './snippets/nextjs-fullstack-commands';
import nextjsUnifiedDevelopmentCode from './snippets/nextjs-unified-development';
import viteManualRoutingSetupCode from './snippets/vite-manual-routing-setup';
import viteApiCallsManualCode from './snippets/vite-api-calls-manual';
import viteSeoMetaTagsCode from './snippets/vite-seo-meta-tags';
import nextjsFileBasedRoutingExampleCode from './snippets/nextjs-file-based-routing-example';
import nextjsApiRoutesExampleCode from './snippets/nextjs-api-routes-example';
import nextjsBuiltinSeoCode from './snippets/nextjs-builtin-seo';

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
                <CodeBlock language="tsx" code={useReactRouterCode} />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">
                  2. Separate backend/API server:
                </h5>
                <CodeBlock language="tsx" code={viteFrontendApiCallsCode} />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">
                  3. Manual SEO optimization:
                </h5>
                <CodeBlock language="tsx" code={viteSeoOptimizationCode} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Project Structure):</h4>
            <CodeBlock language="bash" code={viteProjectStructureCode} />
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
                <CodeBlock language="bash" code={nextjsFileBasedRoutingCode} />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">
                  2. API routes (built-in backend):
                </h5>
                <CodeBlock language="tsx" code={nextjsApiRoutesCode} />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">
                  3. SEO optimization (SSR/SSG):
                </h5>
                <CodeBlock language="tsx" code={nextjsSeoOptimizationCode} />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">
                  4. Image optimization:
                </h5>
                <CodeBlock language="tsx" code={nextjsImageOptimizationCode} />
              </div>

              <div>
                <h5 className="text-sm font-medium mb-1">
                  5. Automatic code splitting:
                </h5>
                <CodeBlock language="tsx" code={nextjsCodeSplittingCode} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Project Structure):</h4>
            <CodeBlock language="bash" code={nextjsProjectStructureCode} />
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
              <CodeBlock language="bash" code={viteStructureComparisonCode} />
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
              <CodeBlock language="bash" code={nextjsStructureComparisonCode} />
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
            codeExamples: [
              {
                label: 'Routing Setup',
                code: viteManualRoutingSetupCode,
              },
              {
                label: 'API Calls',
                code: viteApiCallsManualCode,
              },
              {
                label: 'SEO Meta Tags',
                code: viteSeoMetaTagsCode,
              },
            ],
          },
          {
            title: 'Next.js: Convention-Based',
            description: 'Built-in solutions with minimal configuration needed',
            codeExamples: [
              {
                label: 'File-Based Routing',
                code: nextjsFileBasedRoutingExampleCode,
              },
              {
                label: 'API Routes',
                code: nextjsApiRoutesExampleCode,
              },
              {
                label: 'Built-in SEO',
                code: nextjsBuiltinSeoCode,
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
                <CodeBlock language="bash" code={viteFrontendCommandsCode} />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Backend Development (separate):
                </h5>
                <CodeBlock language="bash" code={viteBackendCommandsCode} />
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
                <CodeBlock language="bash" code={nextjsFullstackCommandsCode} />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Everything in one project:
                </h5>
                <CodeBlock
                  language="bash"
                  code={nextjsUnifiedDevelopmentCode}
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
