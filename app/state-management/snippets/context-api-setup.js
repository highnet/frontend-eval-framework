export const contextApiSetup = `"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react'

// Define your types
interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoContextType {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

// Create Context with null as default
const TodoContext = createContext<TodoContextType | null>(null)

// Custom hook for consuming context
const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }
  return context
}`;
