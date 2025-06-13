export const fetchBasicDataFetching = `const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(false)
const fetchTodos = async () => {
  setLoading(true)
  const response = await fetch('/api/todos')
}`;
