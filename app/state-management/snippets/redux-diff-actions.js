export const reduxDiffActions = `// Export actions
export const { addTodo, toggleTodo } = todoSlice.actions

// Configure store
const store = configureStore({ reducer: { todos: todoSlice.reducer } })`;
