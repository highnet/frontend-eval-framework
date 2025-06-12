export const tanstackRouterStateManagement = `import { 
  useNavigate, 
  useLocation, 
  useParams, 
  useSearch 
} from '@tanstack/react-router'

function MyComponent() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams({ from: '/users/$userId' })
  const search = useSearch({ from: '/users' })
  
  const handleLogin = () => {
    // Type-safe navigation
    navigate({ 
      to: '/dashboard',
      search: { tab: 'overview' }
    })
  }
  
  return (
    <div>
      <p>Current path: {location.pathname}</p>
      <p>User ID: {params.userId}</p> {/* Type-safe */}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}`;
