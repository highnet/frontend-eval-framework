export const reduxDiffUsage = `function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)
  return <div>{todos.map(todo => <TodoItem key={todo.id} />)}</div>
}`;
