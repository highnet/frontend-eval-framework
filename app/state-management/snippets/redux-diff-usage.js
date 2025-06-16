export const reduxDiffUsage = `function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.reduxTodos.todos)
  return <div>{todos.map(todo => <TodoItem key={todo.id} />)}</div>
}`;
