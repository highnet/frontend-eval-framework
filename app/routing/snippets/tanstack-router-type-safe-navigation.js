export const tanstackRouterTypeSafeNavigation = `// Automatic type safety for routes
import { Link } from '@tanstack/react-router'

function Navbar() {
  return <Link to="/user/$userId" params={{ userId: '123' }}>`;
