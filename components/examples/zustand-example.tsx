"use client"

import React, { useState } from 'react'
import { create } from 'zustand'
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

interface TodoStore {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

// Create initial todos
const initialTodos: Todo[] = [
  { id: 1, text: "Learn Zustand", completed: false },
  { id: 2, text: "Build a todo app", completed: true },
  { id: 3, text: "Compare state management", completed: false }
]

// Create Zustand store
const useTodoStore = create<TodoStore>((set) => ({
  todos: initialTodos,

  addTodo: (text: string) => {
    set((state) => ({
      todos: [
        {
          id: Date.now(),
          text,
          completed: false
        },
        ...state.todos
      ]
    }))
  },

  toggleTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }))
  },

  deleteTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }
}))

// Todo item component
function TodoItem({ todo }: { todo: Todo }) {
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-800 border-gray-700">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-4 w-4"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => deleteTodo(todo.id)}
        className="h-8 w-8 p-0"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

// Add todo form component
function AddTodoForm() {
  const addTodo = useTodoStore(state => state.addTodo)
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text.trim())
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
  const todos = useTodoStore(state => state.todos)
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
  const todos = useTodoStore(state => state.todos)

  return (
    <div className="p-4 rounded-lg bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Zustand Todo App</h3>
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
export function ZustandExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Zustand Demo</CardTitle>
        <CardDescription>
          A fully functional todo app using Zustand for state management.
          Zustand provides a simple and lightweight state management solution.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TodoList />
      </CardContent>
    </Card>
  )
}
