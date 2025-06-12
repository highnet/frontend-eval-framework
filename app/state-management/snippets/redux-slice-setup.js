export const reduxSliceSetup = `// store/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [
    { id: 1, text: "Learn Redux Toolkit", completed: false },
    { id: 2, text: "Build a todo app", completed: true },
    { id: 3, text: "Compare state management", completed: false }
  ]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // Redux Toolkit uses Immer under the hood, so we can "mutate" state
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
      state.todos.unshift(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

// Export actions
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

// Export reducer
export default todoSlice.reducer`;
