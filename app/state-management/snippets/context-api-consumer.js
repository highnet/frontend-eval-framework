export const contextApiConsumer = `function TodoList() {
  const { todos, addTodo } = useTodoContext()
  return <div>{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</div>
}`;
