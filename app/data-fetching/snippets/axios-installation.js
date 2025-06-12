export const axiosInstallation = `# Install axios
npm install axios
# or
pnpm add axios

# For TypeScript projects, types are included
# Define your data interfaces
interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}

interface ApiError {
  message: string
  status: number
}

// React state setup
const [todos, setTodos] = useState<Todo[]>([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
const [mutationLoading, setMutationLoading] = useState<{ [key: string]: boolean }>({})`;
