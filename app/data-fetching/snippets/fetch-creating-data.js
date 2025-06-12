export const fetchCreatingData = `const createTodo = async (newTodo) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: { 'Content-Type': 'application/json' }`;
