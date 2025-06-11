"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import { FormikFormExample } from "@/components/examples/formik-form-example"
import { ReactHookFormExample } from "@/components/examples/react-hook-form-example"
import { KeyDifferences } from "@/components/key-differences"

export default function FormsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Forms</h1>

      <p className="mb-4">This covers how you handle user input, validation, and state for forms.</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>Managing form state, validating user input, handling submissions, and providing feedback.</p>
      </div>

      <Tabs defaultValue="formik" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="formik">Formik with Yup</TabsTrigger>
          <TabsTrigger value="react-hook-form">React Hook Form with Zod</TabsTrigger>
          <TabsTrigger value="react-hook-form-wiener">RHF + Zod + Wiener Melange</TabsTrigger>
          <TabsTrigger value="wienermelange">WienerMelange Forms ❓</TabsTrigger>
        </TabsList>

        <TabsContent value="formik" className="space-y-6 mt-4">
          <h3 className="text-lg font-medium">Formik with Yup</h3>
          <p>
            Formik is a popular library for building forms in React with built-in validation, error handling, and submission logic. 
            Yup provides schema-based validation that integrates seamlessly with Formik.
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
            {" | "}
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
              showLineNumbers={true}
              code={`"use client"

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'

// Manual type definition needed for TypeScript support
interface FormValues {
  name: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
    .required('Message is required'),
})

export function FormikFormExample() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null)
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      message: '',
    },
    validationSchema,
    validateOnMount: true, // This ensures validation runs immediately on mount
    onSubmit: (values: FormValues, { setSubmitting, resetForm }) => {
      // Simulate API call
      setTimeout(() => {
        setSubmittedData(values)
        setSubmitted(true)
        setSubmitting(false)
        resetForm()
        
        // Reset success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000)
      }, 1000)
    },
  })

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-black">Contact Form (Formik + Yup)</h3>
      
      {submitted && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 text-sm">Form submitted successfully!</p>
          <pre className="text-xs mt-2 text-green-600">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className='text-black'>Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={formik.touched.name && formik.errors.name ? 'border-red-500' : ''}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className='text-black'>Message</Label>
          <Textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={formik.touched.message && formik.errors.message ? 'border-red-500' : ''}
            placeholder="Tell us about yourself..."
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={formik.isSubmitting || !formik.isValid}
          className="w-full"
          variant={"secondary"}
        >
          {formik.isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  )
}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="react-hook-form" className="space-y-6 mt-4">
          <h3 className="text-lg font-medium">React Hook Form with Zod</h3>
          <p>
            React Hook Form is a performant, flexible form library with minimal re-renders and easy validation. 
            Zod provides TypeScript-first schema validation with excellent developer experience.
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
            {" | "}
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
              showLineNumbers={true}
              code={`"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'

const schema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),
})

type FormData = z.infer<typeof schema>

export function ReactHookFormExample() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmittedData(data)
    setSubmitted(true)
    reset()
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-black">Contact Form (React Hook Form + Zod)</h3>
      
      {submitted && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 text-sm">Form submitted successfully!</p>
          <pre className="text-xs mt-2 text-green-600">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name" className='text-black'>Name</Label>
          <Input
            id="name"
            {...register('name')}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className='text-black'>Message</Label>
          <Textarea
            id="message"
            {...register('message')}
            className={errors.message ? 'border-red-500' : ''}
            placeholder="Tell us about yourself..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting || !isValid}
          className="w-full"
          variant="secondary"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  )
}`}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="react-hook-form-wiener" className="space-y-6 mt-4">
          <h3 className="text-lg font-medium">React Hook Form with Zod and Wiener Melange Styling</h3>
          <p>
            This example shows how to combine React Hook Form with Zod validation and Wiener Melange styling components. 
            It demonstrates using custom web components (`wm-input`, `wm-select`, etc.) with React Hook Form's Controller component.
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
              showLineNumbers={true}
              code={`"use client";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useEffect, useState } from "react";

const advancedSearchSchema = z.object({
  searchTerm: z.string().min(1, "Bitte geben Sie einen Suchbegriff ein"),
  wahlperiode: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
  year: z.number().min(1983).max(2024).optional(),
  gremium: z.array(z.string()),
  landesgesetzblatt: z.string().optional(),
  aktenzahl: z.string().optional(),
  sitzungsnummer: z.string().optional(),
  bezirk: z.string().optional(),
  vorgangTyp: z.string().optional(),
  erledigung: z.string().optional(),
  abstimmungsverhalten: z.enum(["zustimmung", "ablehnung"]).optional(),
  klub: z.string().optional(),
  person: z.string().optional(),
  fraktion: z.string().optional(),
  funktion: z.string().optional(),
  rolle: z.string().optional(),
  schlagwoerter: z.array(z.string()),
  themen: z.array(z.string()),
});

type AdvancedSearchFormValues = z.infer<typeof advancedSearchSchema>;

export default function ReactHookFormZodWienerMelangeExample() {
  const [helpVisible, setHelpVisible] = useState<{ [key: string]: boolean }>({});
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AdvancedSearchFormValues>({
    resolver: zodResolver(advancedSearchSchema),
    defaultValues: {
      searchTerm: "",
      gremium: ["1", "2"],
      schlagwoerter: [],
      themen: [],
    },
  });

  const onSubmit = (data: AdvancedSearchFormValues) => {
    console.log("Advanced search form submitted with values:", data);
  };

  return (
    <wm-section highlight="nebelgrau" contentsize="full">
      <div className="max-w-5xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="searchTerm">Suchbegriff</label>
            <Controller
              name="searchTerm"
              control={control}
              render={({ field }) => (
                <wm-input
                  id="searchTerm"
                  type="text"
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            {errors.searchTerm && (
              <wm-notification type="error" className="text-xs">
                {errors.searchTerm.message}
              </wm-notification>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="wahlperiode">Wahlperiode</label>
            <Controller
              name="wahlperiode"
              control={control}
              render={({ field }) => (
                <wm-select
                  id="wahlperiode"
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <option value="">keine bestimmte Wahlperiode</option>
                  <option value="1">21. Periode (24.11.2020 - derzeit)</option>
                  <option value="2">20. Periode (24.11.2015 - 24.11.2020)</option>
                </wm-select>
              )}
            />
          </div>
          
          <wm-button>
            <button type="submit">Suchen</button>
          </wm-button>
        </form>
      </div>
    </wm-section>
  );
}`}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="wienermelange" className="space-y-6 mt-4">
          <h3 className="text-lg font-medium">WienerMelange Forms ❓</h3>
          <p>
            WienerMelange provides form patterns and components for creating consistent form experiences.
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
              <strong>⚠️ Uncertain Implementation:</strong> WienerMelange forms integration details are not yet confirmed. 
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <KeyDifferences 
        title="Code Differences You'll Actually Write"
        differences={[
          {
            title: "Formik + Yup: Object-Oriented Approach",
            description: "Component-based form handling with object schema validation",
            badges: ["useFormik Hook", "Object Schema", "Field-by-Field"],
            codeExamples: [
              {
                label: "Installation & Setup",
                code: `npm install formik yup
npm install @types/yup  # TypeScript types

// Basic form setup
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required')
})`
              },
              {
                label: "Form Implementation",
                code: `function LoginForm() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <div>{formik.errors.email}</div>
      )}
      
      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <div>{formik.errors.password}</div>
      )}
      
      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  )
}`
              },
              {
                label: "TypeScript Integration",
                code: `interface FormValues {
  email: string
  password: string
}

// Manual type annotation required
const formik = useFormik<FormValues>({
  initialValues: { email: '', password: '' },
  validationSchema,
  onSubmit: (values: FormValues) => {
    // values is typed, but no inference from schema
    console.log(values)
  }
})`
              }
            ]
          },
          {
            title: "React Hook Form + Zod: Hook-Based Approach",
            description: "Performance-focused with TypeScript-first schema validation",
            badges: ["useForm Hook", "TypeScript-First", "Auto-Registration"],
            codeExamples: [
              {
                label: "Installation & Setup",
                code: `npm install react-hook-form @hookform/resolvers zod

// TypeScript-first schema definition
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password too short')
})

type FormData = z.infer<typeof schema>  // Auto-generated types`
              },
              {
                label: "Form Implementation",
                code: `import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)  // Fully typed
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email')}  // Auto-wiring
        type="email"
      />
      {errors.email && <div>{errors.email.message}</div>}
      
      <input
        {...register('password')}  // Auto-wiring
        type="password"
      />
      {errors.password && <div>{errors.password.message}</div>}
      
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  )
}`
              },
              {
                label: "TypeScript Benefits",
                code: `// Schema defines both validation AND types
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  age: z.number().min(18)
})

type FormData = z.infer<typeof schema>
// ^ Automatically: { email: string; password: string; age: number }

// Full type safety throughout
const onSubmit = (data: FormData) => {
  data.email     // ✅ string
  data.age       // ✅ number
  data.invalid   // ❌ TypeScript error
}`
              }
            ]
          }
        ]}
      />

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Form State Management Comparison</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Formik Approach</CardTitle>
              <CardDescription>Centralized form object with explicit field handling</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`// All form state in formik object
const formik = useFormik({
  initialValues: { name: '', email: '', message: '' },
  onSubmit: (values) => { /* submit */ }
})

// Explicit field handling required
<input
  name="email"
  value={formik.values.email}       // Manual value binding
  onChange={formik.handleChange}    // Manual change handler
  onBlur={formik.handleBlur}        // Manual blur handler
/>

// Access form state
formik.values.email              // Current value
formik.errors.email              // Field error
formik.touched.email             // Has been touched
formik.isSubmitting              // Submission state
formik.isValid                   // Overall validity

// Manual reset
formik.resetForm()`}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">React Hook Form Approach</CardTitle>
              <CardDescription>Hook-based with automatic field registration</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`// Hooks for different aspects
const {
  register,           // Field registration
  handleSubmit,       // Form submission
  watch,             // Watch field values
  formState,         // Form state
  reset              // Reset function
} = useForm()

// Auto-registration with spread operator
<input {...register('email')} />
// ^ Automatically handles value, onChange, onBlur, name

// Access form state
const { errors, isSubmitting, isValid } = formState
watch('email')                   // Watch specific field
watch()                          // Watch all values

// Automatic reset
reset()`}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Validation Schema Comparison</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Yup Schema</CardTitle>
              <CardDescription>Object-based validation with method chaining</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`import * as Yup from 'yup'

// Object-based schema definition
const schema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
    
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain uppercase letter')
    .matches(/[0-9]/, 'Must contain number')
    .required('Password is required'),
    
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm password'),
    
  age: Yup.number()
    .positive('Age must be positive')
    .integer('Age must be a whole number')
    .min(18, 'Must be at least 18')
    .required('Age is required')
})

// Separate type definition needed
interface FormValues {
  email: string
  password: string
  confirmPassword: string
  age: number
}`}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Zod Schema</CardTitle>
              <CardDescription>TypeScript-first with automatic type inference</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`import { z } from 'zod'

// TypeScript-first schema definition
const schema = z.object({
  email: z.string()
    .email('Invalid email format'),
    
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain uppercase letter')
    .regex(/[0-9]/, 'Must contain number'),
    
  confirmPassword: z.string(),
  
  age: z.number()
    .positive('Age must be positive')
    .int('Age must be a whole number')
    .min(18, 'Must be at least 18')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword']
})

// Types automatically inferred
type FormData = z.infer<typeof schema>
// ^ { email: string; password: string; confirmPassword: string; age: number }`}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Performance & Re-renders</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Formik Re-render Behavior</CardTitle>
              <CardDescription>Re-renders on every keystroke by default</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`// Formik re-renders entire component on each change
function MyForm() {
  console.log('Component re-rendered')  // Logs on every keystroke
  
  const formik = useFormik({
    initialValues: { name: '', email: '' },
    onSubmit: (values) => { /* submit */ }
  })

  return (
    <form>
      {/* Every keystroke triggers full component re-render */}
      <input
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
      />
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        name="email"
      />
      
      {/* All sibling components also re-render */}
      <ExpensiveComponent />
    </form>
  )
}

// Optimization needed for large forms
// Use FastField or Field components to prevent re-renders`}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">React Hook Form Performance</CardTitle>
              <CardDescription>Minimal re-renders with uncontrolled inputs</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`// React Hook Form uses uncontrolled inputs
function MyForm() {
  console.log('Component re-rendered')  // Rarely logs
  
  const { register, handleSubmit } = useForm()

  return (
    <form>
      {/* No re-renders on keystroke - uncontrolled inputs */}
      <input {...register('name')} />
      <input {...register('email')} />
      
      {/* Sibling components don't re-render */}
      <ExpensiveComponent />
    </form>
  )
}

// Watch specific fields when you need controlled behavior
function ControlledSection() {
  const { register, watch } = useForm()
  const watchedName = watch('name')  // Only re-renders when name changes
  
  return (
    <div>
      <input {...register('name')} />
      <p>Hello {watchedName}</p>  {/* Controlled when needed */}
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
          <Link href="/routing">Previous: Routing</Link>
        </Button>
        <Button asChild>
          <Link href="/data-fetching">Next: Data Fetching</Link>
        </Button>
      </div>
    </div>
  )
}
