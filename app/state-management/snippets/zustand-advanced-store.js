export const zustandAdvancedStore = `import { create } from 'zustand'
import { subscribeWithSelector, devtools, persist } from 'zustand/middleware'

interface TodoStore {
  zustandTodos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

// Store with multiple middleware for persistence and devtools
const useTodoStore = create<TodoStore>()(
  devtools(    persist(      subscribeWithSelector((set, get) => ({
        zustandTodos: [],
          addTodo: (text: string) => {
          set((state) => ({
            zustandTodos: [
              { id: Date.now(), text, completed: false },
              ...state.zustandTodos
            ]
          }), false, 'addTodo') // Third parameter is action name for devtools
        },
        
        toggleTodo: (id: number) => {
          set((state) => ({
            zustandTodos: state.zustandTodos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          }), false, 'toggleTodo')
        },
        
        deleteTodo: (id: number) => {
          set((state) => ({
            zustandTodos: state.zustandTodos.filter(todo => todo.id !== id)
          }), false, 'deleteTodo')
        }
      })),
      {
        name: 'todo-storage', // Unique name for localStorage
        partialize: (state) => ({ zustandTodos: state.zustandTodos }), // Only persist todos      }
    ),
    {
      name: '🐻 Zustand Advanced Store', // Name for Redux DevTools
    }
  )
)

// Subscribe to specific state changes
useTodoStore.subscribe(
  (state) => state.zustandTodos,
  (todos) => console.log('Todos updated:', todos),
  {
    equalityFn: Object.is, // Only re-run if array reference changes
    fireImmediately: true,
  }
)`;
