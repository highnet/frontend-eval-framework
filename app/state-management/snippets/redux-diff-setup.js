export const reduxDiffSetup = `const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => state.todos.unshift(action.payload)`;
