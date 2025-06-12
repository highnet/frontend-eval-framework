export const reactRouterNavigationLinks = `import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  return <Link to="/" className={location.pathname === '/' ? 'active' : ''}>`;
