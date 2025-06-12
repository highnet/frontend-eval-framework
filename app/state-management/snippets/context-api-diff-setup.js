export const contextApiDiffSetup = `const TodoContext = createContext(null)

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])
  const value = useMemo(() => ({ todos, addTodo }), [todos])
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}`;
