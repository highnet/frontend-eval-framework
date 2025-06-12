export const fetchApiInterfaces = `// Define Todo interface
interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}

// React state setup for managing todos
const [todos, setTodos] = useState<Todo[]>([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
const [mutationLoading, setMutationLoading] = useState<{ [key: string]: boolean }>({})
const [successMessage, setSuccessMessage] = useState<string | null>(null)`;
