'use client';

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
import { FormikFormExample } from '@/components/examples/formik-form-example';
import { ReactHookFormExample } from '@/components/examples/react-hook-form-example';
import { KeyDifferences } from '@/components/key-differences';

// Import code snippets
import { reactHookFormWienerMelange } from './snippets/react-hook-form-wiener-melange';
import { formikInstallationSetup } from './snippets/formik-installation-setup';
import { formikFormImplementation } from './snippets/formik-form-implementation';
import { formikFieldBinding } from './snippets/formik-field-binding';
import { formikFormExampleSource } from './snippets/formik-form-example-source';
import { reactHookFormInstallationSetup } from './snippets/react-hook-form-installation-setup';
import { reactHookFormImplementation } from './snippets/react-hook-form-implementation';
import { reactHookFormExampleSource } from './snippets/react-hook-form-example-source';
import { reactHookFormAutoWiring } from './snippets/react-hook-form-auto-wiring';
import { formikStateManagement } from './snippets/formik-state-management';
import { reactHookFormStateManagement } from './snippets/react-hook-form-state-management';
import { yupSchemaExample } from './snippets/yup-schema-example';
import { zodSchemaExample } from './snippets/zod-schema-example';
import { formikReRenderBehavior } from './snippets/formik-rerender-behavior';
import { reactHookFormPerformance } from './snippets/react-hook-form-performance';
import { validationLibraryComparison } from './snippets/validation-library-comparison';
import { inputRegistrationComparison } from './snippets/input-registration-comparison';
import { typescriptIntegrationComparison } from './snippets/typescript-integration-comparison';
import { formApiComparison } from './snippets/form-api-comparison';
import { errorHandlingComparison } from './snippets/error-handling-comparison';

export default function FormsPage() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 w-full min-w-0">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Forms</h1>
      <p className="mb-4">
        This covers how you handle user input, validation, and state for forms.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>
          Managing form state, validating user input, handling submissions, and
          providing feedback.
        </p>
      </div>
      <Tabs defaultValue="formik" className="mb-8">
        <TabsList className="grid grid-cols-2 w-full h-auto gap-1 p-1">
          <TabsTrigger value="formik" className="">
            Formik with Yup
          </TabsTrigger>
          <TabsTrigger value="react-hook-form" className="">
            React Hook Form with Zod
          </TabsTrigger>
          <TabsTrigger value="react-hook-form-wiener" className="">
            RHF + Zod + Wiener Melange
          </TabsTrigger>
          <TabsTrigger value="wienermelange" className="">
            WienerMelange Forms ❓
          </TabsTrigger>
        </TabsList>

        <TabsContent value="formik" className="space-y-6 mt-4">
          <h3 className="text-lg font-medium">Formik with Yup</h3>
          <p>
            Formik is a popular library for building forms in React with
            built-in validation, error handling, and submission logic. Yup
            provides schema-based validation that integrates seamlessly with
            Formik.
          </p>
          <p className="mb-4">
            <a
              href="https://formik.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Formik Official Documentation
            </a>
            {' | '}
            <a
              href="https://github.com/jquense/yup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Yup Official Documentation
            </a>
          </p>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Live Example</h4>
            <FormikFormExample />
          </div>
          <div className="mb-6">
            <h4 className="font-medium mb-3">Code Example</h4>
            <CodeBlock language="tsx" code={formikFormExampleSource} />
          </div>
        </TabsContent>

        <TabsContent value="react-hook-form" className="space-y-6 mt-4">
          <h3 className="text-lg font-medium">React Hook Form with Zod</h3>
          <p>
            React Hook Form is a performant, flexible form library with minimal
            re-renders and easy validation. Zod provides TypeScript-first schema
            validation with excellent developer experience.
          </p>
          <p className="mb-4">
            <a
              href="https://react-hook-form.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              React Hook Form Official Documentation
            </a>
            {' | '}
            <a
              href="https://zod.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Zod Official Documentation
            </a>
          </p>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Live Example</h4>
            <ReactHookFormExample />
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Code Example</h4>
            <CodeBlock language="tsx" code={reactHookFormExampleSource} />
          </div>
        </TabsContent>

        <TabsContent value="react-hook-form-wiener" className="space-y-6 mt-4">
          <h3 className="text-lg font-medium">
            React Hook Form with Zod and Wiener Melange Styling
          </h3>
          <p>
            This example shows how to combine React Hook Form with Zod
            validation and Wiener Melange styling components. It demonstrates
            using custom web components (`wm-input`, `wm-select`, etc.) with
            React Hook Form&apos;s Controller component.
          </p>
          <p className="mb-4">
            <a
              href="https://react-hook-form.com/api/usecontroller/controller/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Controller Component Documentation
            </a>
          </p>
          <p className="mb-4">
            <a
              href="https://infodat-fe-snapshot.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              WienerMelange Form Prototype
            </a>
          </p>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Code Example:</h4>
            <CodeBlock
              language="tsx"
              isShortSnippet={true}
              code={reactHookFormWienerMelange}
            />
          </div>
        </TabsContent>

        <TabsContent value="wienermelange" className="space-y-6 mt-4">
          <h3 className="text-lg font-medium">WienerMelange Forms ❓</h3>
          <p>
            WienerMelange provides form patterns and components for creating
            consistent form experiences.
          </p>
          <p className="mb-4">
            <a
              href="https://wm-handbuch2.netlify.app/pattern-library/patterns/formular-block/#tabs--html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              WienerMelange Form Block Documentation
            </a>
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-amber-800 text-sm">
              <strong>⚠️ Uncertain Implementation:</strong> WienerMelange forms
              integration details are not yet confirmed.
            </p>
          </div>
        </TabsContent>
      </Tabs>{' '}
      <KeyDifferences
        title="Code Differences"
        differences={[
          {
            title: 'Formik + Yup: Object-Oriented Approach',
            description:
              'Component-based form handling with explicit field binding and manual TypeScript types',
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: formikInstallationSetup,
              },
              {
                label: 'Form Implementation',
                code: formikFormImplementation,
              },
              {
                label: 'Field Binding (Verbose)',
                code: formikFieldBinding,
              },
            ],
          },
          {
            title: 'React Hook Form + Zod: Hook-Based Approach',
            description:
              'Performance-focused with automatic TypeScript inference and minimal boilerplate',
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: reactHookFormInstallationSetup,
              },
              {
                label: 'Form Implementation',
                code: reactHookFormImplementation,
              },
              {
                label: 'Auto-Wiring Fields (Minimal)',
                code: reactHookFormAutoWiring,
              },
            ],
          },
        ]}
      />
      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Detailed Feature Comparison
        </h2>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Validation Library Integration
              </CardTitle>
              <CardDescription>
                How each approach handles schema validation and type safety
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h5 className="font-medium text-sm mb-2 text-green-700">
                    React Hook Form + Zod
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    TypeScript-first validation with automatic type inference
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={validationLibraryComparison.reactHookForm}
                  />
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2 text-blue-700">
                    Formik + Yup
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Traditional object-based validation with manual types
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={validationLibraryComparison.formik}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Input Registration & Boilerplate
              </CardTitle>
              <CardDescription>
                Comparing the amount of code needed to wire up form inputs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h5 className="font-medium text-sm mb-2 text-green-700">
                    React Hook Form - Minimal
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Simple spread operator for field registration
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={inputRegistrationComparison.reactHookForm}
                  />
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2 text-blue-700">
                    Formik - Explicit
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Manual prop binding for each input field
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={inputRegistrationComparison.formik}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">TypeScript Integration</CardTitle>
              <CardDescription>
                How type safety is achieved and maintained
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h5 className="font-medium text-sm mb-2 text-green-700">
                    React Hook Form + Zod
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Automatic type inference from schema
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={typescriptIntegrationComparison.reactHookForm}
                  />
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2 text-blue-700">
                    Formik + Yup
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Manual interface definition required
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={typescriptIntegrationComparison.formik}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Form State & API</CardTitle>
              <CardDescription>
                How form state and methods are accessed and organized
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h5 className="font-medium text-sm mb-2 text-green-700">
                    React Hook Form
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Destructured API with specific functions
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={formApiComparison.reactHookForm}
                  />
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2 text-blue-700">
                    Formik
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Single object containing all form logic
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={formApiComparison.formik}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Error Handling</CardTitle>
              <CardDescription>
                When and how validation errors are displayed to users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h5 className="font-medium text-sm mb-2 text-green-700">
                    React Hook Form
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Immediate error display on validation failure
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={errorHandlingComparison.reactHookForm}
                  />
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2 text-blue-700">
                    Formik
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Errors shown only after field is touched
                  </p>
                  <CodeBlock
                    language="tsx"
                    isShortSnippet={true}
                    code={errorHandlingComparison.formik}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Form State Management Comparison
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Formik Approach</CardTitle>
              <CardDescription>
                Centralized form object with explicit field handling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                isShortSnippet={true}
                code={formikStateManagement}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                React Hook Form Approach
              </CardTitle>
              <CardDescription>
                Hook-based with automatic field registration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                isShortSnippet={true}
                code={reactHookFormStateManagement}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Validation Schema Comparison
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Yup Schema</CardTitle>
              <CardDescription>
                Object-based validation with method chaining
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                isShortSnippet={true}
                code={yupSchemaExample}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Zod Schema</CardTitle>
              <CardDescription>
                TypeScript-first with automatic type inference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                isShortSnippet={true}
                code={zodSchemaExample}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Performance & Re-renders
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Formik Re-render Behavior
              </CardTitle>
              <CardDescription>
                Re-renders on every keystroke by default
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                isShortSnippet={true}
                code={formikReRenderBehavior}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                React Hook Form Performance
              </CardTitle>
              <CardDescription>
                Minimal re-renders with uncontrolled inputs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                isShortSnippet={true}
                code={reactHookFormPerformance}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/routing">Previous: Routing</Link>
        </Button>
        <Button asChild>
          <Link href="/data-fetching">Next: Data Fetching</Link>
        </Button>
      </div>
    </div>
  );
}
