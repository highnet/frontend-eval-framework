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
import { MuiButtonExample } from '@/components/examples/mui-button-example';
import { BaseButtonExample } from '@/components/examples/base-ui-button-example';
import { ShadcnButtonExample } from '@/components/examples/shadcn-button-example';
import { WienerMelangeButtonExample } from '@/components/examples/wiener-melange-button-example';
import { KeyDifferences } from '@/components/key-differences';

export default function UIComponentsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 w-full min-w-0">
      <h1 className="text-3xl font-bold tracking-tight mb-6">
        UI Components & Design System
      </h1>

      <p className="mb-4">
        This category focuses on pre-built UI elements and the overall visual
        language of your application.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>
          The look and feel of the application, consistency, and acceleration of
          UI development.
        </p>
      </div>

      <Tabs defaultValue="material-ui" className="mb-8">
        <TabsList className="grid grid-cols-2 sm:flex sm:flex-row w-full h-auto sm:h-10 gap-1 p-1">
          <TabsTrigger value="material-ui" className="sm:flex-1">
            Material UI
          </TabsTrigger>
          <TabsTrigger value="base-ui" className="sm:flex-1">
            Base UI
          </TabsTrigger>
          <TabsTrigger value="shadcn" className="sm:flex-1">
            Shadcn/ui
          </TabsTrigger>
          <TabsTrigger value="wiener" className="sm:flex-1">
            WienerMelange
          </TabsTrigger>
        </TabsList>

        <TabsContent value="material-ui" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Material UI</h3>
          <p>
            A comprehensive library of React components that implements
            Google&apos;s Material Design.
          </p>
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
            <p>
              Provides ready-to-use, customizable components adhering to a
              specific design language.
            </p>
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
            A headless UI library from MUI that provides low-level components
            with no default styles, giving full control over styling.
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
              Offers unstyled components, perfect for building custom design
              systems or integrating with styling solutions like Tailwind CSS.
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
            A collection of re-usable components that you can copy and paste
            into your apps. Not a traditional component library, but a set of
            recipes.
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
              &quot;You own the code.&quot; It provides pre-styled (often using
              Tailwind CSS) and accessible components that are copied directly
              into your project for full customization.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-2">Live Example:</h4>
            <div className="p-4 border rounded-lg">
              <ShadcnButtonExample />
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">
              How the button above was rendered:
            </h4>
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
            <h4 className="font-medium mb-1">
              Code Example (Full Button Component):
            </h4>
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
          <h3 className="text-lg font-medium">WienerMelange Pattern Library</h3>
          <p>
            The official pattern library provided by MA53 (Presse- und
            Informationsdienst der Stadt Wien) for creating consistent and
            accessible websites for the City of Vienna. WienerMelange offers a
            collection of standardized UI components built as web components for
            use across wien.gv.at and related municipal websites.
          </p>
          <p className="mb-2">
            <a
              href="https://wm-handbuch2.netlify.app/pattern-library/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              WienerMelange Pattern Library Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              WienerMelange uses web components technology to provide
              framework-agnostic, reusable UI elements that maintain the
              official Vienna city design standards. These components can be
              easily integrated into any web project regardless of the
              underlying technology stack, ensuring consistent branding and user
              experience across all municipal digital services.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-2">Live Example:</h4>
            <div className="p-4 border rounded-lg bg-white">
              <WienerMelangeButtonExample />
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-1">
              Code Example (Wiener Melange Button):
            </h4>
            <CodeBlock
              language="jsx"
              code={`<wm-button>
  <a href="#" class="wm-e-button">Wiener Melange Button</a>
</wm-button>`}
            />
          </div>
        </TabsContent>
      </Tabs>

      <KeyDifferences
        title="Code Differences You'll Actually Write"
        differences={[
          {
            title: 'Material UI: Pre-built Components',
            description:
              'Import and use ready-made components with built-in styling',
            badges: ['Import & Use', 'Built-in Themes', 'Props-based'],
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: `npm install @mui/material @emotion/react

// Theme setup in layout
import { ThemeProvider, createTheme } from '@mui/material/styles'
const theme = createTheme({ /* config */ })`,
              },
              {
                label: 'Component Usage',
                code: `import { Button, TextField, Card } from '@mui/material'

function LoginForm() {
  return <Card><TextField label="Email" /><Button>Sign In</Button></Card>
}`,
              },
            ],
          },
          {
            title: 'Base UI: Headless Components',
            description:
              'Unstyled components with full control over appearance',
            badges: ['Headless', 'Unstyled', 'Full Control'],
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: `npm install @base_ui/react

// No theme setup needed - you control all styling
import { Button } from '@base_ui/react/Button'`,
              },
              {
                label: 'Component Usage',
                code: `import { Button } from '@base_ui/react/Button'

function LoginForm() {
  return <Button className="custom-styles">Sign In</Button>
}`,
              },
              {
                label: 'Custom Styling',
                code: `// Complete control over styling
const StyledButton = styled(Button)\`
  background: linear-gradient(45deg, #FE6B8B, #FF8E53);
  border: 0;
  border-radius: 3px;`,
              },
            ],
          },
          {
            title: 'Shadcn/ui: Copy-Paste Components',
            description:
              'Copy component code into your project for full ownership',
            badges: ['Copy-Paste', 'Tailwind CSS', 'Full Ownership'],
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: `npx shadcn-ui@latest init

# Copy specific components
npx shadcn-ui@latest add button input card`,
              },
              {
                label: 'Component Usage',
                code: `import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function LoginForm() {
  return <><Input placeholder="Email" /><Button>Sign In</Button></>`,
              },
            ],
          },
          {
            title: 'WienerMelange: Web Components',
            description:
              "Vienna city government's official design system as web components",
            badges: [
              'Web Components',
              'Framework Agnostic',
              'Government Standard',
            ],
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: `<!-- Include via CDN -->
<script src="https://cdn.jsdelivr.net/npm/@wiener-melange/components"></script>

<!-- Or install via npm -->`,
              },
              {
                label: 'Component Usage',
                code: `<!-- Web components work in any framework -->
<wm-card class="wm-e-card">
  <wm-input placeholder="Email"></wm-input>
  <wm-button class="wm-e-button--primary">Anmelden</wm-button>
</wm-card>`,
              },
              {
                label: 'React Integration',
                code: `// In React (with proper JSX attributes)
function LoginForm() {
  return <wm-card className="wm-e-card">
    <wm-input placeholder="Email" />
    <wm-button className="wm-e-button--primary">Anmelden</wm-button>`,
              },
            ],
          },
        ]}
      />

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Customization Workflow Comparison
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Material UI</CardTitle>
              <CardDescription>
                Theme-based and sx prop overrides
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Global Theme Override:
                </h5>
                <CodeBlock
                  language="tsx"
                  code={`const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none'
        }
      }
    }
  }
})`}
                />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  One-off Customization:
                </h5>
                <CodeBlock
                  language="tsx"
                  code={`<Button 
  sx={{ 
    backgroundColor: 'red', 
    '&:hover': { backgroundColor: 'darkred' } 
  }}
>
  Custom Button
</Button>`}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Base UI</CardTitle>
              <CardDescription>
                Full control with custom CSS/styled-components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-medium text-sm mb-2">Styled Components:</h5>
                <CodeBlock
                  language="tsx"
                  code={`const StyledButton = styled(Button)\`
  background: linear-gradient(45deg, #FE6B8B, #FF8E53);
  border: 0;
  border-radius: 8px;
  color: white;
  padding: 12px 24px;
  
  &:hover {
    transform: scale(1.05);
  }
\``}
                />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">CSS Classes:</h5>
                <CodeBlock
                  language="tsx"
                  code={`<Button className="custom-button">
  Custom Button
</Button>

/* CSS */
.custom-button {
  background: linear-gradient(45deg, #FE6B8B, #FF8E53);
  border: 0;
  border-radius: 8px;
}`}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shadcn/ui</CardTitle>
              <CardDescription>
                Direct code modification and CSS classes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Edit Component File:
                </h5>
                <CodeBlock
                  language="tsx"
                  code={`// components/ui/button.tsx - Edit directly
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg", 
  {
    variants: {
      variant: {
        default: "bg-red-600 hover:bg-red-700"
      }
    }
  }
)`}
                />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Tailwind Class Override:
                </h5>
                <CodeBlock
                  language="tsx"
                  code={`<Button className="bg-red-600 hover:bg-red-700 rounded-lg">
  Custom Button
</Button>`}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">WienerMelange</CardTitle>
              <CardDescription>
                CSS custom properties and predefined classes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-medium text-sm mb-2">
                  CSS Custom Properties:
                </h5>
                <CodeBlock
                  language="css"
                  code={`:root {
  --wm-color-primary: #DC143C;
  --wm-color-secondary: #B71C1C;
  --wm-border-radius: 8px;
}

/* Affects all WM components globally */`}
                />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Predefined Classes:
                </h5>
                <CodeBlock
                  language="tsx"
                  code={`<wm-button className="wm-e-button wm-e-button--secondary wm-e-button--large">
  Vienna Style Button
</wm-button>

<!-- Limited customization - follows city design standards -->`}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/core-framework">Previous: Core Framework</Link>
        </Button>
        <Button asChild>
          <Link href="/css-styling">Next: CSS & Styling</Link>
        </Button>
      </div>
    </div>
  );
}
