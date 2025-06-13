import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/code-block';
import { KeyDifferences } from '@/components/key-differences';
import { plainCssStyles } from './snippets/plain-css-styles';
import { reactComponentWithClassnames } from './snippets/react-component-classnames';
import { scssVariablesMixins } from './snippets/scss-variables-mixins';
import { cardModuleScss } from './snippets/card-module-scss';
import { reactWithScssModules } from './snippets/react-scss-modules';
import { tailwindDashboard } from './snippets/tailwind-dashboard';
import { tailwindConfig } from './snippets/tailwind-config';
import { plainCssComponentStyling } from './snippets/plain-css-component-styling';
import { plainCssDynamicClasses } from './snippets/plain-css-dynamic-classes';
import { scssVariablesMixinsShort } from './snippets/scss-variables-mixins-short';
import { scssComponentUsage } from './snippets/scss-component-usage';
import { tailwindComponentStyling } from './snippets/tailwind-component-styling';
import { tailwindResponsiveLayout } from './snippets/tailwind-responsive-layout';

export default function CssStylingPage() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 w-full min-w-0">
      <h1 className="text-3xl font-bold tracking-tight mb-6">CSS & Styling</h1>

      <p className="mb-4">
        This section addresses how you will apply styles to your components and
        manage your application&apos;s visual presentation.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>
          How styles are written, organized, and applied to components,
          affecting modularity and maintainability.
        </p>
      </div>

      <Tabs defaultValue="plain-css" className="mb-8">
        <TabsList className="flex flex-col sm:flex-row w-full h-auto sm:h-10 gap-1 p-1">
          <TabsTrigger value="plain-css" className="flex-1">
            Plain CSS
          </TabsTrigger>
          <TabsTrigger value="scss" className="flex-1">
            SCSS (Sass)
          </TabsTrigger>
          <TabsTrigger value="tailwind" className="flex-1">
            Tailwind CSS
          </TabsTrigger>
        </TabsList>

        <TabsContent value="plain-css" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Plain CSS</h3>
          <p>
            Standard Cascading Style Sheets with string classnames. Simple,
            performant, and universally supported.
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
            <h4 className="font-medium mb-1">CSS with String Classnames:</h4>
            <CodeBlock language="css" code={plainCssStyles} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">
              React Component with String Classnames:
            </h4>
            <CodeBlock language="jsx" code={reactComponentWithClassnames} />
          </div>
        </TabsContent>

        <TabsContent value="scss" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">SCSS (Sass)</h3>
          <p>
            A powerful CSS preprocessor with variables, nesting, mixins, and
            functions. Perfect for modular component styling.
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
            <h4 className="font-medium mb-1">SCSS Variables & Mixins:</h4>
            <CodeBlock language="scss" code={scssVariablesMixins} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">Card.module.scss:</h4>
            <CodeBlock language="scss" code={cardModuleScss} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">React with SCSS Modules:</h4>
            <CodeBlock language="jsx" code={reactWithScssModules} />
          </div>
        </TabsContent>

        <TabsContent value="tailwind" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Tailwind CSS</h3>
          <p>
            A utility-first CSS framework for rapidly building custom designs.
            Provides low-level utility classes that can be composed to build any
            design directly in your markup.
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
            <h4 className="font-medium mb-1">Dashboard Component Example:</h4>
            <CodeBlock language="jsx" code={tailwindDashboard} />
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-1">
              Customization (tailwind.config.js):
            </h4>
            <CodeBlock language="javascript" code={tailwindConfig} />
          </div>
        </TabsContent>
      </Tabs>

      <KeyDifferences
        title="Code Differences"
        differences={[
          {
            title: 'Plain CSS',
            description:
              'Traditional approach with standard CSS files and string classnames',
            codeExamples: [
              {
                label: 'Component Styling',
                code: plainCssComponentStyling,
              },
              {
                label: 'Dynamic Classes',
                code: plainCssDynamicClasses,
              },
            ],
          },
          {
            title: 'SCSS (Sass)',
            description:
              'CSS preprocessor with variables, nesting, and advanced features',
            codeExamples: [
              {
                label: 'Variables & Mixins',
                code: scssVariablesMixinsShort,
              },
              {
                label: 'Component Usage',
                code: scssComponentUsage,
              },
            ],
          },
          {
            title: 'Tailwind CSS',
            description: 'Utility-first framework for rapid UI development',
            codeExamples: [
              {
                label: 'Component Styling',
                code: tailwindComponentStyling,
              },
              {
                label: 'Responsive Layout',
                code: tailwindResponsiveLayout,
              },
            ],
          },
        ]}
      />

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/ui-components">Previous: UI Components</Link>
        </Button>
        <Button asChild>
          <Link href="/routing">Next: Routing</Link>
        </Button>
      </div>
    </div>
  );
}
