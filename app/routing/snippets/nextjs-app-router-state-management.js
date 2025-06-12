export const nextjsAppRouterStateManagement = `'use client'
import { 
  useRouter, 
  usePathname, 
  useSearchParams 
} from 'next/navigation'

function MyComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const handleLogin = () => {
    // Client-side navigation
    router.push('/dashboard')
    // Or server-side redirect in Server Component
    // redirect('/dashboard')
  }
  
  const updateSearch = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('filter', 'active')
    router.push(pathname + '?' + params.toString())
  }
  
  return (
    <div>
      <p>Current path: {pathname}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}`;
