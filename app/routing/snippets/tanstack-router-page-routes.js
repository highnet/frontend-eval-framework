export const tanstackRouterPageRoutes = `// routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="page">
      <h1>Welcome to Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  ),
})

// routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => (
    <div className="page">
      <h1>About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  ),
})

// routes/contact.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: () => (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
    </div>
  ),
})`;
