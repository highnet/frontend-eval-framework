"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function FormsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Forms</h1>

      <p className="mb-4">This covers how you handle user input, validation, and state for forms.</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>Managing form state, validating user input, handling submissions, and providing feedback.</p>
      </div>

      <Tabs defaultValue="formik" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="formik">Formik with Yup</TabsTrigger>
          <TabsTrigger value="react-hook-form">React Hook Form with Zod</TabsTrigger>
          <TabsTrigger value="wiener">WienerMelange Forms</TabsTrigger>
        </TabsList>

        <TabsContent value="formik" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Formik with Yup</h3>
          <p>
            Formik is a popular library for building forms in React, and Yup is a schema validator often used alongside
            it for robust validation.
          </p>
          <p className="mb-2">
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
              href="https://github.com/jquery/yup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Yup Official Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>Provides helpers for managing form state, validation, and submission logic.</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Basic Formik Field):</h4>
            <CodeBlock
              language="jsx"
              code={`import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({ email: Yup.string().email().required() }),
    onSubmit: values => alert(JSON.stringify(values)),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="email" onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
      <button type="submit">Submit</button>
    </form>
  );
};`}
            />
          </div>
        </TabsContent>

        <TabsContent value="react-hook-form" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">React Hook Form with Zod</h3>
          <p>
            React Hook Form is known for its performance by leveraging uncontrolled components, and Zod is a
            TypeScript-first schema declaration and validation library.
          </p>
          <p className="mb-2">
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
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>Minimizes re-renders for performance and offers strong type inference with Zod for robust validation.</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Basic React Hook Form with Zod):</h4>
            <CodeBlock
              language="jsx"
              code={`import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({ email: z.string().email() });

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="wiener" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">WienerMelange Forms</h3>
          <p>
            A bespoke form handling solution or a wrapper around existing libraries, specifically tailored for your
            project's patterns.
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Represents a custom form handling solution tailored to specific project requirements, potentially
              combining elements from other libraries with custom validation and state management.
            </p>
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
