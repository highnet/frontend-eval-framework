import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Frontend Library and Tool Evaluation Framework</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A structured approach to evaluating and selecting frontend technologies for your projects
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Making strategic decisions about frontend libraries and tools is a paramount step in any web development
            project. These foundational choices ripple across the entire development lifecycle, profoundly impacting
            <strong> developer experience</strong>, <strong>application performance</strong>, and the
            <strong> long-term maintainability</strong> of the codebase.
          </p>
          <p className="mb-6">
            This framework establishes a structured approach for evaluating diverse options across critical areas of
            frontend development, ensuring a well-informed and strategic selection process.
          </p>
          <Button asChild>
            <Link href="/introduction" className="flex items-center">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Key Evaluation Areas</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {evaluationAreas.map((area) => (
            <Card key={area.title} className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {area.options.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full mt-4">
                  <Link href={area.href}>Explore {area.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const evaluationAreas = [
  {
    title: "Core Framework",
    description: "The foundational structure and rendering paradigm of your application",
    options: ["Vite", "Next.js"],
    href: "/core-framework",
  },
  {
    title: "UI Components & Design System",
    description: "Pre-built UI elements and visual language of your application",
    options: ["Material UI", "Base UI", "Shadcn/ui", "WienerMelange"],
    href: "/ui-components",
  },
  {
    title: "CSS & Styling",
    description: "How styles are written, organized, and applied to components",
    options: ["SCSS (Sass)", "Plain CSS", "Tailwind CSS"],
    href: "/css-styling",
  },
  {
    title: "Routing",
    description: "How users navigate between different pages or views",
    options: ["React Router", "Next.js App Router", "TanStack Router"],
    href: "/routing",
  },
  {
    title: "Forms",
    description: "Handling user input, validation, and form state",
    options: ["Formik with Yup", "React Hook Form with Zod", "WienerMelange Forms"],
    href: "/forms",
  },
  {
    title: "Data Fetching & Queries",
    description: "How your application requests and manages data from APIs",
    options: ["Fetch API", "Axios", "React Query / TanStack Query"],
    href: "/data-fetching",
  },
  {
    title: "State Management",
    description: "Managing application-wide state shared across components",
    options: ["Context API (React)", "Redux / Redux Toolkit", "Zustand"],
    href: "/state-management",
  },
]
