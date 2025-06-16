export const reduxDiffSetup = `const todoSlice = createSlice({
  name: 'reduxTodos',
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => state.todos.unshift(action.payload)`;
