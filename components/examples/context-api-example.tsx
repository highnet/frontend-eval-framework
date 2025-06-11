'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Trash2, Plus } from 'lucide-react';

// Define types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// Create Context
const TodoContext = createContext<TodoContextType | null>(null);

// Custom hook to use context
const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

// Provider component
interface TodoProviderProps {
  children: ReactNode;
}

function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React Context', completed: false },
    { id: 2, text: 'Build a todo app', completed: true },
    { id: 3, text: 'Compare state management', completed: false },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// Todo item component
function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo } = useTodoContext();

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-800 border-gray-700">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-4 w-4"
      />
      <span
        className={`flex-1 ${
          todo.completed ? 'line-through text-gray-500' : ''
        }`}
      >
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
  );
}

// Add todo form component
function AddTodoForm() {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1"
      />
      <Button type="submit" size="sm">
        <Plus className="h-4 w-4" />
      </Button>
    </form>
  );
}

// Stats component
function TodoStats() {
  const { todos } = useTodoContext();
  const completed = todos.filter(todo => todo.completed).length;
  const total = todos.length;

  return (
    <div className="flex gap-2">
      <Badge variant="secondary">Total: {total}</Badge>
      <Badge variant="secondary">Completed: {completed}</Badge>
      <Badge variant="secondary">Remaining: {total - completed}</Badge>
    </div>
  );
}

// Main todo list component
function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div className="p-4 rounded-lg bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Context API Todo App</h3>
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
  );
}

// Main example component
export function ContextApiExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Context API Demo</CardTitle>
        <CardDescription>
          A fully functional todo app using React Context API for state
          management. Context provides shared state and actions to all child
          components.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </CardContent>
    </Card>
  );
}
