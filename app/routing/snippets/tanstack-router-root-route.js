export const tanstackRouterRootRoute = `// routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">My App</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="[&.active]:font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      
      <main className="content">
        <Outlet />
      </main>
      
      <TanStackRouterDevtools />
    </div>
  ),
})`;
