export const contextApiProvider = `function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])
  const addTodo = (text) => setTodos(prev => [...prev, { id: Date.now(), text }])
  const value = useMemo(() => ({ todos, addTodo }), [todos])
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}`;
