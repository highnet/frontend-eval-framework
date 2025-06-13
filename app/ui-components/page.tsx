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

// Import all code snippets
import { muiBasicButton } from './snippets/mui-basic-button';
import { baseUiStyledButton } from './snippets/base-ui-styled-button';
import { shadcnButtonExample } from './snippets/shadcn-button-example';
import { shadcnFullButtonComponent } from './snippets/shadcn-full-button-component';
import { wienerMelangeButton } from './snippets/wiener-melange-button';
import { muiInstallSetup } from './snippets/mui-install-setup';
import { muiComponentUsage } from './snippets/mui-component-usage';
import { baseUiInstallSetup } from './snippets/base-ui-install-setup';
import { baseUiComponentUsage } from './snippets/base-ui-component-usage';
import { shadcnInstallSetup } from './snippets/shadcn-install-setup';
import { shadcnComponentUsage } from './snippets/shadcn-component-usage';
import { wienerMelangeInstallSetup } from './snippets/wiener-melange-install-setup';
import { wienerMelangeComponentUsage } from './snippets/wiener-melange-component-usage';
import { wienerMelangeReactIntegration } from './snippets/wiener-melange-react-integration';
import { muiGlobalThemeOverride } from './snippets/mui-global-theme-override';
import { muiOneOffCustomization } from './snippets/mui-one-off-customization';
import { baseUiStyledComponents } from './snippets/base-ui-styled-components';
import { baseUiCssClasses } from './snippets/base-ui-css-classes';
import { shadcnEditComponentFile } from './snippets/shadcn-edit-component-file';
import { shadcnTailwindOverride } from './snippets/shadcn-tailwind-override';
import { wienerMelangeCssCustomProperties } from './snippets/wiener-melange-css-custom-properties';
import { wienerMelangePredefinedClasses } from './snippets/wiener-melange-predefined-classes';

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
            <CodeBlock language="jsx" code={muiBasicButton} />
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
            <CodeBlock language="jsx" code={baseUiStyledButton} />
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
            <CodeBlock language="tsx" code={shadcnButtonExample} />
          </div>

          <div>
            <h4 className="font-medium mb-1">
              Code Example (Full Button Component):
            </h4>
            <CodeBlock language="tsx" code={shadcnFullButtonComponent} />
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
            <CodeBlock language="jsx" code={wienerMelangeButton} />
          </div>
        </TabsContent>
      </Tabs>

      <KeyDifferences
        title="Code Differences"
        differences={[
          {
            title: 'Material UI: Pre-built Components',
            description:
              'Import and use ready-made components with built-in styling',
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: muiInstallSetup,
              },
              {
                label: 'Component Usage',
                code: muiComponentUsage,
              },
            ],
          },
          {
            title: 'Base UI: Headless Components',
            description:
              'Unstyled components with full control over appearance',
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: baseUiInstallSetup,
              },
              {
                label: 'Component Usage',
                code: baseUiComponentUsage,
              },
            ],
          },
          {
            title: 'Shadcn/ui: Copy-Paste Components',
            description:
              'Copy component code into your project for full ownership',
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: shadcnInstallSetup,
              },
              {
                label: 'Component Usage',
                code: shadcnComponentUsage,
              },
            ],
          },
          {
            title: 'WienerMelange: Web Components',
            description:
              "Vienna city government's official design system as web components",
            codeExamples: [
              {
                label: 'Installation & Setup',
                code: wienerMelangeInstallSetup,
              },
              {
                label: 'Component Usage',
                code: wienerMelangeComponentUsage,
              },
              {
                label: 'React Integration',
                code: wienerMelangeReactIntegration,
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
                <CodeBlock language="tsx" code={muiGlobalThemeOverride} />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  One-off Customization:
                </h5>
                <CodeBlock language="tsx" code={muiOneOffCustomization} />
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
                <CodeBlock language="tsx" code={baseUiStyledComponents} />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">CSS Classes:</h5>
                <CodeBlock language="tsx" code={baseUiCssClasses} />
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
                <CodeBlock language="tsx" code={shadcnEditComponentFile} />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Tailwind Class Override:
                </h5>
                <CodeBlock language="tsx" code={shadcnTailwindOverride} />
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
                  code={wienerMelangeCssCustomProperties}
                />
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">
                  Predefined Classes:
                </h5>
                <CodeBlock
                  language="tsx"
                  code={wienerMelangePredefinedClasses}
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
