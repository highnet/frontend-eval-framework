import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { MuiButtonExample } from "@/components/examples/mui-button-example"
import { BaseButtonExample } from "@/components/examples/base-ui-button-example"
import { ShadcnButtonExample } from "@/components/examples/shadcn-button-example"

export default function UIComponentsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">UI Components & Design System</h1>

      <p className="mb-4">
        This category focuses on pre-built UI elements and the overall visual language of your application.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>The look and feel of the application, consistency, and acceleration of UI development.</p>
      </div>

      <Tabs defaultValue="material-ui" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="material-ui">Material UI</TabsTrigger>
          <TabsTrigger value="base-ui">Base UI</TabsTrigger>
          <TabsTrigger value="shadcn">Shadcn/ui</TabsTrigger>
          <TabsTrigger value="wiener">WienerMelange</TabsTrigger>
        </TabsList>

        <TabsContent value="material-ui" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Material UI</h3>
          <p>A comprehensive library of React components that implements Google's Material Design.</p>
          <p className="mb-2">
            <a
              href="https://mui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Material UI Official Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>Provides ready-to-use, customizable components adhering to a specific design language.</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">Live Example:</h4>
            <div className="p-4 border rounded-lg bg-white">
              <MuiButtonExample />
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-1">Code Example (Basic Button):</h4>
            <CodeBlock
              language="jsx"
              code={`import Button from '@mui/material/Button';

function MyComponent() {
  return (
    <Button variant="contained" color="primary">
      Material UI Button
    </Button>
  );
}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="base-ui" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Base UI</h3>
          <p>
            A headless UI library from MUI that provides low-level components with no
            default styles, giving full control over styling.
          </p>
          <p className="mb-2">
            <a
              href="https://base-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Base UI Official Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Offers unstyled components, perfect for building custom design systems or integrating with styling
              solutions like Tailwind CSS.
            </p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">Live Example:</h4>
            <div className="p-4 border rounded-lg bg-white">
              <BaseButtonExample />
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-1">Code Example (Styled Button):</h4>
            <CodeBlock
              language="jsx"
              code={`import { clsx } from 'clsx';

const baseStyles = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2";
const primaryStyles = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";

function MyButton() {
  return (
    <button className={clsx(baseStyles, primaryStyles)}>
      Base UI Button
    </button>
  );
}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="shadcn" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Shadcn/ui</h3>
          <p>
            A collection of re-usable components that you can copy and paste into your apps. Not a traditional component
            library, but a set of recipes.
          </p>
          <p className="mb-2">
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Shadcn/ui Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              "You own the code." It provides pre-styled (often using Tailwind CSS) and accessible components that are
              copied directly into your project for full customization.
            </p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">Live Example:</h4>
            <div className="p-4 border rounded-lg">
              <ShadcnButtonExample />
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">How the button above was rendered:</h4>
            <CodeBlock
              language="tsx"
              code={`// components/examples/shadcn-button-example.tsx
'use client'

import { Button } from '@/components/ui/button'

export function ShadcnButtonExample() {
  return (
    <Button variant="default">
      Shadcn/ui Button
    </Button>
  )
}`}
            />
          </div>

          <div>
            <h4 className="font-medium mb-1">Code Example (Full Button Component):</h4>
            <CodeBlock
              language="tsx"
              code={`// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

// Usage:
import { Button } from "@/components/ui/button"

function MyComponent() {
  return <Button>Shadcn/ui Button</Button>;
}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="wiener" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">WienerMelange</h3>
          <p>A bespoke design system or a collection of internal components tailored to specific project needs.</p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Represents a custom design system tailored to specific project requirements, potentially combining
              elements from other libraries with custom components.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/core-framework">Previous: Core Framework</Link>
        </Button>
        <Button asChild>
          <Link href="/css-styling">Next: CSS & Styling</Link>
        </Button>
      </div>
    </div>
  )
}
