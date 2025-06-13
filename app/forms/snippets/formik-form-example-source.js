export const formikFormExampleSource = `"use client"

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
    validateOnMount: true,
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
}`;
