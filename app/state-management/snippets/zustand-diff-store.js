export const zustandDiffStore = `const useTodoStore = create((set) => ({
  zustandTodos: [],
  addTodo: (text) => set((state) => ({ 
    zustandTodos: [{ id: Date.now(), text }, ...state.zustandTodos]
  }))`;
