export const reduxComponentUsage = `// components/TodoItem.tsx
import { useAppSelector, useAppDispatch } from '../store'
import { toggleTodo, deleteTodo } from '../store/todoSlice'

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean }
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useAppDispatch()

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="h-4 w-4"
      />
      <span className={\`flex-1 \${todo.completed ? 'line-through text-gray-500' : ''}\`}>
        {todo.text}
      </span>
      <button 
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="h-8 w-8 p-0 text-red-500"
      >
        Delete
      </button>
    </div>
  )
}

// components/TodoList.tsx
import { useAppSelector } from '../store'

function TodoList() {
  const todos = useAppSelector(state => state.todos.todos)

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {todos.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  )
}

// components/AddTodo.tsx  
import { useState } from 'react'
import { useAppDispatch } from '../store'
import { addTodo } from '../store/todoSlice'

function AddTodo() {
  const dispatch = useAppDispatch()
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
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-3 py-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  )
}`;
