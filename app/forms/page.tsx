"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { FormikFormExample } from "@/components/examples/formik-form-example"
import { ReactHookFormExample } from "@/components/examples/react-hook-form-example"

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
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="formik">Formik with Yup</TabsTrigger>
          <TabsTrigger value="react-hook-form">React Hook Form with Zod</TabsTrigger>
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
      </Tabs>

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
