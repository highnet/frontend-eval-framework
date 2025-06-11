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

      <Tabs defaultValue="plain-css" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="plain-css">Plain CSS</TabsTrigger>
          <TabsTrigger value="scss">SCSS (Sass)</TabsTrigger>
          <TabsTrigger value="tailwind">Tailwind CSS</TabsTrigger>
        </TabsList>

        <TabsContent value="plain-css" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Plain CSS</h3>
          <p>
            Standard Cascading Style Sheets with string classnames. Simple, performant, and universally supported.
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
            <CodeBlock
              language="css"
              code={`/* styles/components.css */
:root {
  --primary-color: #3b82f6;
  --success-color: #10b981;
  --border-radius: 8px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover { background-color: #2563eb; }

.card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid #e5e7eb;
  position: relative;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-header { padding: 1.5rem 1.5rem 0.75rem; }
.card-title { margin: 0; font-size: 1.25rem; font-weight: 600; }
.card-body { padding: 1.5rem; }
.card-footer { padding: 0.75rem 1.5rem 1.5rem; display: flex; gap: 0.75rem; }

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
}

.card-success { border-left: 4px solid var(--success-color); }`}
            />
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-1">React Component with String Classnames:</h4>
            <CodeBlock
              language="jsx"
              code={`import './Card.css';

function Card({ title, children, onPrimary, badge, status }) {
  const cardClasses = [
    'card',
    status === 'success' && 'card-success'
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {badge && <span className="card-badge">{badge}</span>}
      
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      
      <div className="card-body">{children}</div>
      
      <div className="card-footer">
        <button className="btn btn-primary" onClick={onPrimary}>
          Primary Action
        </button>
      </div>
    </div>
  );
}

// Usage
<Card 
  title="Success Story" 
  badge="New"
  status="success"
  onPrimary={() => console.log('clicked')}
>
  Your order has been processed!
</Card>`}
            />
          </div>
        </TabsContent>

        <TabsContent value="scss" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">SCSS (Sass)</h3>
          <p>
            A powerful CSS preprocessor with variables, nesting, mixins, and functions. Perfect for modular component styling.
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
            <CodeBlock
              language="scss"
              code={`// styles/_variables.scss
$primary-color: #3b82f6;
$border-radius: 8px;
$shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
$shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);

// mixins/_buttons.scss
@mixin button-variant($bg-color) {
  background-color: $bg-color;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: $border-radius;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: darken($bg-color, 10%);
    transform: translateY(-1px);
  }
}

@mixin card-hover {
  &:hover {
    box-shadow: $shadow-md;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
}`}
            />
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-1">Card.module.scss:</h4>
            <CodeBlock
              language="scss"
              code={`// components/Card/Card.module.scss
@import '../../styles/variables';
@import '../../mixins/buttons';

.card {
  background: white;
  border-radius: $border-radius;
  box-shadow: $shadow-sm;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  position: relative;
  @include card-hover;
}

.header {
  margin-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.75rem;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.content {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 0.75rem;
}

.primaryButton {
  @include button-variant($primary-color);
}

.badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: $primary-color;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
}`}
            />
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-1">React with SCSS Modules:</h4>
            <CodeBlock
              language="jsx"
              code={`import styles from './Card.module.scss';

function Card({ title, children, onPrimary, badge }) {
  return (
    <div className={styles.card}>
      {badge && <span className={styles.badge}>{badge}</span>}
      
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      
      <div className={styles.content}>{children}</div>
      
      <div className={styles.actions}>
        <button 
          className={styles.primaryButton}
          onClick={onPrimary}
        >
          Primary Action
        </button>
      </div>
    </div>
  );
}

// Usage
<Card 
  title="Product Card" 
  badge="New"
  onPrimary={() => console.log('Primary clicked')}
>
  This card uses SCSS modules for scoped styling!
</Card>`}
            />
          </div>
        </TabsContent>

        <TabsContent value="tailwind" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Tailwind CSS</h3>
          <p>
            A utility-first CSS framework for rapidly building custom designs. Provides low-level utility classes
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
            <h4 className="font-medium mb-1">Dashboard Component Example:</h4>
            <CodeBlock
              language="jsx"
              code={`function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <img className="h-8 w-8 rounded-full ring-2 ring-blue-500" 
                 src="/avatar.jpg" alt="User" />
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {['Dashboard', 'Analytics', 'Users'].map((item, index) => (
                <li key={item}>
                  <a href="#" className={\`px-4 py-2 rounded-lg transition-colors \${
                      index === 0 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }\`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Users', value: '2,651', change: '+12%', positive: true },
              { title: 'Revenue', value: '$45,231', change: '+8%', positive: true }
            ].map((stat) => (
              <div key={stat.title} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={\`px-2 py-1 rounded-full text-xs \${
                      stat.positive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }\`}>
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart Component Here</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}`}
            />
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-1">Customization (tailwind.config.js):</h4>
            <CodeBlock
              language="javascript"
              code={`module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}`}
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
