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
        <TabsList className="grid grid-cols-2 sm:flex sm:flex-row w-full h-auto sm:h-10 gap-1 p-1">
          <TabsTrigger value="formik" className="sm:flex-1">
            Formik with Yup
          </TabsTrigger>
          <TabsTrigger value="react-hook-form" className="sm:flex-1">
            React Hook Form with Zod
          </TabsTrigger>
          <TabsTrigger value="react-hook-form-wiener" className="sm:flex-1">
            RHF + Zod + Wiener Melange
          </TabsTrigger>
          <TabsTrigger value="wienermelange" className="sm:flex-1">
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

          <div className="mb-4">
            <h4 className="font-medium mb-1">Basic Setup:</h4>
            <CodeBlock
              language="tsx"
              isShortSnippet={true}
              code={`npm install formik yup
// Setup with validation schema
const formik = useFormik({
  initialValues: { name: '', message: '' },
  validationSchema: Yup.object({ name: Yup.string().required() })`}
            />
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

          <div className="mb-4">
            <h4 className="font-medium mb-1">Basic Setup:</h4>
            <CodeBlock
              language="tsx"
              isShortSnippet={true}
              code={`npm install react-hook-form @hookform/resolvers zod
// Schema-first validation with type inference
const schema = z.object({ name: z.string().min(2) })
const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) })
const onSubmit = (data) => console.log(data)`}
            />
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

          <div className="mb-4">
            <h4 className="font-medium mb-1">Code Example:</h4>
            <CodeBlock
              language="tsx"
              isShortSnippet={true}
              code={`import { useForm, Controller } from "react-hook-form"
// Use Controller for custom web components
<Controller name="email" control={control}
  render={({ field }) => <wm-input {...field} />}
/>`}
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
      </Tabs>

      <KeyDifferences
        title="Code Differences You'll Actually Write"
        differences={[
          {
            title: 'Formik + Yup: Object-Oriented Approach',
            description:
              'Component-based form handling with object schema validation',
            badges: ['useFormik Hook', 'Object Schema', 'Field-by-Field'],
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: `npm install formik yup

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required')
})`,
              },
              {
                label: 'Form Implementation',
                code: `const formik = useFormik({
  initialValues: { email: '', password: '' },
  validationSchema,
  onSubmit: (values) => console.log(values)
})`,
              },
              {
                label: 'Field Binding',
                code: `<input
  name="email"
  onChange={formik.handleChange}
  value={formik.values.email}
/>`,
              },
            ],
            considerations: [
              'You prefer explicit form state management and control',
              'Working with complex forms that need custom validation',
              'Team is familiar with object-oriented form patterns',
              'You want a mature, stable library with extensive documentation',
              "Performance isn't a critical concern for your forms",
            ],
          },
          {
            title: 'React Hook Form + Zod: Hook-Based Approach',
            description:
              'Performance-focused with TypeScript-first schema validation',
            badges: ['useForm Hook', 'TypeScript-First', 'Auto-Registration'],
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: `npm install react-hook-form @hookform/resolvers zod

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password too short')
})`,
              },
              {
                label: 'Form Implementation',
                code: `const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
})

const onSubmit = (data) => console.log(data)`,
              },
              {
                label: 'Auto-Wiring Fields',
                code: `<input {...register('email')} type="email" />
{errors.email && <div>{errors.email.message}</div>}

<button type="submit">Submit</button>`,
              },
            ],
            considerations: [
              'Performance is critical - minimal re-renders needed',
              'You want TypeScript-first schema validation and auto-completion',
              'Building forms with many fields or complex validation',
              'Team values modern hooks-based patterns',
              'You need built-in integration with validation libraries',
            ],
          },
        ]}
      />

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
                code={`// All form state in formik object
const formik = useFormik({
  initialValues: { name: '', email: '', message: '' },
  onSubmit: (values) => { /* submit */ }
})`}
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
                code={`// Hooks for different aspects
const { register, handleSubmit, formState } = useForm()

// Auto-registration with spread operator
<input {...register('email')} />`}
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
                code={`import * as Yup from 'yup'
// Object-based schema definition  
const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()`}
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
                code={`import { z } from 'zod'
// TypeScript-first schema definition
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)`}
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
                code={`// Formik re-renders entire component on each change
function MyForm() {
  const formik = useFormik({ initialValues: { name: '' } })
  return <input value={formik.values.name} onChange={formik.handleChange} />
}`}
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
                code={`// React Hook Form uses uncontrolled inputs
function MyForm() {
  const { register } = useForm()
  return <input {...register('email')} /> // No re-renders
}`}
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
