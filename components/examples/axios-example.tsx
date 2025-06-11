"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Trash2, Plus } from "lucide-react"

interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}

export function AxiosExample() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [newTodoTitle, setNewTodoTitle] = useState("")
  const [mutationLoading, setMutationLoading] = useState<{ [key: string]: boolean }>({})
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const fetchTodos = async () => {
    setLoading(true)
    setError(null)
    setSuccessMessage(null)
    try {
      const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=8')
      setTodos(response.data)
    } catch (err) {
      setError(axios.isAxiosError(err) ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const createTodo = async () => {
    if (!newTodoTitle.trim()) return
    
    setMutationLoading(prev => ({ ...prev, create: true }))
    setError(null)
    setSuccessMessage(null)
    
    try {
      const response = await axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', {
        title: newTodoTitle,
        completed: false,
        userId: 1
      })
      
      setTodos(prev => [response.data, ...prev])
      setNewTodoTitle("")
      setSuccessMessage("Todo created successfully!")
    } catch (err) {
      setError(axios.isAxiosError(err) ? err.response?.data?.message || err.message : 'Failed to create todo')
    } finally {
      setMutationLoading(prev => ({ ...prev, create: false }))
    }
  }

  const toggleTodo = async (id: number, completed: boolean) => {
    setMutationLoading(prev => ({ ...prev, [`toggle-${id}`]: true }))
    setError(null)
    setSuccessMessage(null)
    
    try {
      const todo = todos.find(t => t.id === id)
      if (!todo) return
      
      const response = await axios.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        ...todo,
        completed: !completed
      })
      
      setTodos(prev => prev.map(t => t.id === id ? response.data : t))
      setSuccessMessage("Todo updated successfully!")
    } catch (err) {
      setError(axios.isAxiosError(err) ? err.response?.data?.message || err.message : 'Failed to update todo')
    } finally {
      setMutationLoading(prev => ({ ...prev, [`toggle-${id}`]: false }))
    }
  }

  const deleteTodo = async (id: number) => {
    setMutationLoading(prev => ({ ...prev, [`delete-${id}`]: true }))
    setError(null)
    setSuccessMessage(null)
    
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      setTodos(prev => prev.filter(t => t.id !== id))
      setSuccessMessage("Todo deleted successfully!")
    } catch (err) {
      setError(axios.isAxiosError(err) ? err.response?.data?.message || err.message : 'Failed to delete todo')
    } finally {
      setMutationLoading(prev => ({ ...prev, [`delete-${id}`]: false }))
    }
  }
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Axios Example with Mutations</CardTitle>
        <CardDescription>
          Using Axios HTTP client to perform CRUD operations on todos from JSONPlaceholder
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={fetchTodos} disabled={loading} variant="outline">
            {loading ? "Loading..." : "Refetch Todos"}
          </Button>
        </div>

        {/* Create Todo Section */}
        <div className="flex gap-2">
          <Input
            placeholder="Enter new todo title..."
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && createTodo()}
          />
          <Button 
            onClick={createTodo} 
            disabled={mutationLoading.create || !newTodoTitle.trim()}
            size="sm"
          >
            {mutationLoading.create ? (
              "Creating..."
            ) : (
              <>
                <Plus className="h-4 w-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {successMessage && (
          <Alert className="border-green-200 bg-green-50 text-green-800">
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4 rounded" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-8 w-8" />
              </div>
            ))
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="flex items-center space-x-2 p-2 border rounded group">
                <button
                  onClick={() => toggleTodo(todo.id, todo.completed)}
                  disabled={mutationLoading[`toggle-${todo.id}`]}
                  className="h-4 w-4 border rounded flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                >
                  {mutationLoading[`toggle-${todo.id}`] ? (
                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
                  ) : (
                    todo.completed && <div className="h-2 w-2 bg-blue-500 rounded-full" />
                  )}
                </button>
                <span className={`text-sm flex-1 ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                  {todo.title}
                </span>
                <span className="text-xs text-muted-foreground">#{todo.id}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                  disabled={mutationLoading[`delete-${todo.id}`]}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {mutationLoading[`delete-${todo.id}`] ? (
                    "..."
                  ) : (
                    <Trash2 className="h-4 w-4 text-red-500" />
                  )}
                </Button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
