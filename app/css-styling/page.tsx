import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function CssStylingPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">CSS & Styling</h1>

      <p className="mb-4">
        This section addresses how you will apply styles to your components and manage your application's visual
        presentation.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>How styles are written, organized, and applied to components, affecting modularity and maintainability.</p>
      </div>

      <Tabs defaultValue="scss" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="scss">SCSS (Sass)</TabsTrigger>
          <TabsTrigger value="plain-css">Plain CSS</TabsTrigger>
          <TabsTrigger value="tailwind">Tailwind CSS</TabsTrigger>
        </TabsList>

        <TabsContent value="scss" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">SCSS (Sass)</h3>
          <p>
            A powerful CSS preprocessor that extends CSS with features like variables, nesting, mixins, and functions.
          </p>
          <p className="mb-2">
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Sass Official Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Enhances standard CSS with programmatic capabilities, aiding in larger stylesheets and design system
              management.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Variables & Nesting):</h4>
            <CodeBlock
              language="scss"
              code={`// styles/_variables.scss
$primary-color: #007bff;

// components/_button.scss
.button {
  background-color: $primary-color;
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="plain-css" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Plain CSS</h3>
          <p>
            Standard Cascading Style Sheets, often used with methodologies like BEM or CSS Modules for better
            organization.
          </p>
          <p className="mb-2">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              MDN Web Docs - CSS
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Direct and universally supported, but can become cumbersome for large projects without proper
              organization.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (CSS Module):</h4>
            <CodeBlock
              language="css"
              code={`/* MyComponent.module.css */
.button {
  background-color: blue;
  color: white;
}`}
            />
            <div className="mt-2">
              <CodeBlock
                language="jsx"
                code={`// MyComponent.jsx
import styles from './MyComponent.module.css';

function MyComponent() {
  return <button className={styles.button}>Plain CSS Button</button>;
}`}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tailwind" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Tailwind CSS</h3>
          <p>
            A utility-first CSS framework for rapidly building custom designs. It provides low-level utility classes
            that can be composed to build any design directly in your markup.
          </p>
          <p className="mb-2">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Tailwind CSS Official Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Focuses on composing small, single-purpose utility classes directly in HTML/JSX, minimizing context
              switching and promoting consistency.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Utility Classes):</h4>
            <CodeBlock
              language="html"
              code={`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Tailwind Button
</button>`}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/ui-components">Previous: UI Components</Link>
        </Button>
        <Button asChild>
          <Link href="/routing">Next: Routing</Link>
        </Button>
      </div>
    </div>
  )
}
