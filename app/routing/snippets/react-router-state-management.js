export const reactRouterStateManagement = `import { 
  useNavigate, 
  useLocation, 
  useParams, 
  useSearchParams 
} from 'react-router-dom'

function MyComponent() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const handleLogin = () => {
    // Programmatic navigation
    navigate('/dashboard', { replace: true })
  }
  
  const updateSearch = () => {
    setSearchParams({ filter: 'active' })
  }
  
  return (
    <div>
      <p>Current path: {location.pathname}</p>
      <p>User ID: {params.id}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}`;
