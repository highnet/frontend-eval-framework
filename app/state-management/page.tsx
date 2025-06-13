'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/code-block';
import { KeyDifferences } from '@/components/key-differences';
import { ContextApiExample } from '@/components/examples/context-api-example';
import { ReduxExample } from '@/components/examples/redux-example';
import { ZustandExample } from '@/components/examples/zustand-example';

// Import all code snippets
import { contextApiSetup } from './snippets/context-api-setup';
import { contextApiProvider } from './snippets/context-api-provider';
import { contextApiConsumer } from './snippets/context-api-consumer';
import { reduxInstallation } from './snippets/redux-installation';
import { reduxSliceSetup } from './snippets/redux-slice-setup';
import { reduxStoreConfig } from './snippets/redux-store-config';
import { reduxProviderSetup } from './snippets/redux-provider-setup';
import { reduxComponentUsage } from './snippets/redux-component-usage';
import { zustandInstallation } from './snippets/zustand-installation';
import { zustandBasicStore } from './snippets/zustand-basic-store';
import { zustandAdvancedStore } from './snippets/zustand-advanced-store';
import { zustandComponentUsage } from './snippets/zustand-component-usage';
import { contextApiDiffSetup } from './snippets/context-api-diff-setup';
import { contextApiDiffUsage } from './snippets/context-api-diff-usage';
import { contextApiDiffWrapper } from './snippets/context-api-diff-wrapper';
import { reduxDiffSetup } from './snippets/redux-diff-setup';
import { reduxDiffUsage } from './snippets/redux-diff-usage';
import { reduxDiffActions } from './snippets/redux-diff-actions';
import { zustandDiffStore } from './snippets/zustand-diff-store';
import { zustandDiffUsage } from './snippets/zustand-diff-usage';
import { zustandDiffNoProvider } from './snippets/zustand-diff-no-provider';

export default function StateManagementPage() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 w-full min-w-0">
      <h1 className="text-3xl font-bold tracking-tight mb-6">
        State Management
      </h1>
      <p className="mb-4">
        This section discusses how you will manage application-wide state that
        is shared across many components.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>
          Centralizing and managing data that needs to be accessible by multiple
          components, often across different parts of the component tree,
          ensuring consistency and reactivity.
        </p>
      </div>{' '}
      <Tabs defaultValue="context" className="mb-8">
        <TabsList className="flex flex-col sm:flex-row w-full h-auto sm:h-10 gap-1 p-1">
          <TabsTrigger value="context" className="flex-1">
            Context API
          </TabsTrigger>
          <TabsTrigger value="redux" className="flex-1">
            Redux Toolkit
          </TabsTrigger>
          <TabsTrigger value="zustand" className="flex-1">
            Zustand
          </TabsTrigger>
        </TabsList>

        <TabsContent value="context" className="space-y-4 mt-4">
          {' '}
          <h3 className="text-lg font-medium">Context API (React)</h3>
          <p>
            React&apos;s built-in way to pass data through the component tree
            without having to pass props down manually at every level.
          </p>
          <p className="mb-2">
            <a
              href="https://react.dev/learn/passing-props-with-context"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              React Docs - Context
            </a>
          </p>{' '}
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Good for small to medium-sized applications or for less frequently
              updated global state. Can lead to re-renders for consuming
              components if not optimized.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <ContextApiExample />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">
                TypeScript Setup & Context Creation:
              </h4>{' '}
              <CodeBlock language="typescript" code={contextApiSetup} />
            </div>{' '}
            <div>
              <h4 className="font-medium mb-1">Provider Implementation:</h4>{' '}
              <CodeBlock
                language="tsx"
                isShortSnippet={true}
                code={contextApiProvider}
              />
            </div>{' '}
            <div>
              <h4 className="font-medium mb-1">
                Consuming Context in Components:
              </h4>{' '}
              <CodeBlock
                language="tsx"
                isShortSnippet={true}
                code={contextApiConsumer}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="redux" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Redux Toolkit</h3>
          <p>
            A predictable state container for JavaScript apps. Redux Toolkit is
            the official, opinionated, batteries-included toolset for efficient
            Redux development.
          </p>
          <p className="mb-2">
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Redux Official Documentation
            </a>
            {' | '}
            <a
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Redux Toolkit Official Documentation
            </a>
          </p>{' '}
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Provides a centralized store for global state, with a strict
              unidirectional data flow. Best for complex applications with large
              and frequently changing state. Redux Toolkit simplifies
              boilerplate.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <ReduxExample />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Installation & Store Setup:</h4>{' '}
              <CodeBlock language="bash" code={reduxInstallation} />
            </div>
            <div>
              <h4 className="font-medium mb-1">
                Creating Slices with Redux Toolkit:
              </h4>{' '}
              <CodeBlock language="typescript" code={reduxSliceSetup} />
            </div>
            <div>
              <h4 className="font-medium mb-1">Store Configuration:</h4>{' '}
              <CodeBlock language="typescript" code={reduxStoreConfig} />
            </div>
            <div>
              <h4 className="font-medium mb-1">Provider Setup:</h4>{' '}
              <CodeBlock language="tsx" code={reduxProviderSetup} />
            </div>
            <div>
              <h4 className="font-medium mb-1">Using Redux in Components:</h4>{' '}
              <CodeBlock language="tsx" code={reduxComponentUsage} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="zustand" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Zustand</h3>
          <p>
            A small, fast, and scalable bear-necessities state-management
            solution for React.
          </p>
          <p className="mb-2">
            <a
              href="https://github.com/pmndrs/zustand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Zustand GitHub Repository
            </a>
          </p>{' '}
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              A lightweight and flexible alternative, offering a simplified API
              inspired by Redux, but with less boilerplate and often preferred
              for its ease of use and performance for mid-sized applications.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <ZustandExample />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Installation & Basic Store:</h4>{' '}
              <CodeBlock language="bash" code={zustandInstallation} />
            </div>
            <div>
              <h4 className="font-medium mb-1">Creating a Zustand Store:</h4>{' '}
              <CodeBlock language="typescript" code={zustandBasicStore} />
            </div>
            <div>
              <h4 className="font-medium mb-1">
                Advanced Store with Middleware:
              </h4>{' '}
              <CodeBlock language="typescript" code={zustandAdvancedStore} />
            </div>
            <div>
              <h4 className="font-medium mb-1">Using Zustand in Components:</h4>{' '}
              <CodeBlock language="tsx" code={zustandComponentUsage} />
            </div>
          </div>
        </TabsContent>
      </Tabs>{' '}
      <KeyDifferences
        title="Code Differences"
        differences={[
          {
            title: "Context API: React's Built-in Solution",
            description:
              'Native React state sharing mechanism with manual optimization',
            codeExamples: [
              {
                label: 'Context Setup',
                code: contextApiDiffSetup,
              },
              {
                label: 'Component Usage',
                code: contextApiDiffUsage,
              },
              {
                label: 'Provider Wrapper',
                code: contextApiDiffWrapper,
              },
            ],
          },
          {
            title: 'Redux Toolkit: Predictable State Container',
            description:
              'Centralized store with time-travel debugging and predictable updates',
            codeExamples: [
              {
                label: 'Store Setup',
                code: reduxDiffSetup,
              },
              {
                label: 'Component Usage',
                code: reduxDiffUsage,
              },
              {
                label: 'Actions & Store',
                code: reduxDiffActions,
              },
            ],
          },
          {
            title: 'Zustand: Lightweight & Flexible',
            description:
              'Minimal boilerplate with maximum flexibility and great performance',
            codeExamples: [
              {
                label: 'Store Creation',
                code: zustandDiffStore,
              },
              {
                label: 'Component Usage',
                code: zustandDiffUsage,
              },
              {
                label: 'No Provider Needed',
                code: zustandDiffNoProvider,
              },
            ],
          },
        ]}
      />
      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/data-fetching">Previous: Data Fetching</Link>
        </Button>
        <Button asChild>
          <Link href="/">Next: Summary</Link>
        </Button>
      </div>
    </div>
  );
}
