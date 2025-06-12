export const contextApiDiffUsage = `function TodoList() {
  const { todos, toggleTodo } = useTodos()
  return <div>{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</div>
}`;
