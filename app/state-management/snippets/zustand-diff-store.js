export const zustandDiffStore = `const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({ 
    todos: [{ id: Date.now(), text }, ...state.todos]
  }))`;
