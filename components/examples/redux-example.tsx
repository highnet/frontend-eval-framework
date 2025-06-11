"use client"

import React, { useState } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Trash2, Plus } from "lucide-react"

// Define types
interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
}

interface AppState {
  todos: TodoState
}

// Todo slice
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      { id: 1, text: "Learn Redux Toolkit", completed: false },
      { id: 2, text: "Build a todo app", completed: true },
      { id: 3, text: "Compare state management", completed: false }
    ]
  } as TodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
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
export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions

// Configure store
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

// Todo item component
function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-800 border-gray-700">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="h-4 w-4"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="h-8 w-8 p-0"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

// Add todo form component
function AddTodoForm() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text.trim()))
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1"
      />
      <Button type="submit" size="sm">
        <Plus className="h-4 w-4" />
      </Button>
    </form>
  )
}

// Stats component
function TodoStats() {
  const todos = useSelector((state: AppState) => state.todos.todos)
  const completed = todos.filter(todo => todo.completed).length
  const total = todos.length

  return (
    <div className="flex gap-2">
      <Badge variant="secondary">
        Total: {total}
      </Badge>
      <Badge variant="secondary">
        Completed: {completed}
      </Badge>
      <Badge variant="secondary">
        Remaining: {total - completed}
      </Badge>
    </div>
  )
}

// Main todo list component
function TodoList() {
  const todos = useSelector((state: AppState) => state.todos.todos)

  return (
    <div className="p-4 rounded-lg bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Redux Toolkit Todo App</h3>
        <TodoStats />
      </div>
      
      <div className="space-y-3 mb-4">
        <AddTodoForm />
      </div>
      
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      
      {todos.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  )
}

// Main example component
export function ReduxExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Redux Toolkit Demo</CardTitle>
        <CardDescription>
          A fully functional todo app using Redux Toolkit for state management.
          Redux provides predictable state updates and time-travel debugging.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Provider store={store}>
          <TodoList />
        </Provider>
      </CardContent>
    </Card>
  )
}
