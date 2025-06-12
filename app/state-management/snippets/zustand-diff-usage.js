export const zustandDiffUsage = `function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const addTodo = useTodoStore(state => state.addTodo)
  return <div>{todos.map(todo => <TodoItem key={todo.id} />)}</div>
}`;
