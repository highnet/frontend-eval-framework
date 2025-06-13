'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Trash2, Plus } from 'lucide-react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=8'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }

  const data = await response.json();
  return data;
};

const createTodo = async (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
  const requestBody = JSON.stringify(newTodo);

  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: requestBody,
  });

  if (!response.ok) {
    throw new Error(
      `Failed to create todo: ${response.status} ${response.statusText}`
    );
  }

  const result = await response.json();
  return result;
};

const updateTodo = async ({
  id,
  ...updates
}: Partial<Todo> & { id: number }): Promise<Todo> => {
  const requestBody = JSON.stringify({ id, ...updates });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: requestBody,
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ Update failed - Response body:', errorText);
    throw new Error(
      `Failed to update todo: ${response.status} ${response.statusText}`
    );
  }

  const result = await response.json();
  return result;
};

const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to delete todo: ${response.status} ${response.statusText}`
    );
  }
};

export function TanStackQueryExample() {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [recentlyUpdated, setRecentlyUpdated] = useState<{
    [key: number]: boolean;
  }>({});
  const queryClient = useQueryClient();

  // Configure query to show persistent mutations like Axios example
  // Note: JSONPlaceholder is a mock API that doesn't persist changes
  // So we disable refetching to maintain optimistic updates
  const {
    data: todos,
    isLoading,
    error,
    isStale,
    isFetching,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: Infinity, // Never consider data stale to prevent automatic refetching
    gcTime: 300000, // Keep in cache for 5 minutes
    refetchOnWindowFocus: false, // Don't refetch when window gains focus
    refetchOnReconnect: false, // Don't refetch when network reconnects
    refetchOnMount: false, // Don't refetch when component mounts (if data exists)
  });

  // Create mutation with optimistic updates
  const createMutation = useMutation({
    mutationFn: createTodo,
    onMutate: async variables => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Optimistically update with a temporary ID
      const optimisticTodo = { ...variables, id: Date.now() };
      queryClient.setQueryData<Todo[]>(['todos'], old =>
        old ? [optimisticTodo, ...old] : [optimisticTodo]
      );

      return { previousTodos, optimisticTodo };
    },
    onSuccess: (data, variables, context) => {
      // Replace optimistic update with real data
      queryClient.setQueryData<Todo[]>(
        ['todos'],
        old =>
          old?.map(todo =>
            todo.id === context?.optimisticTodo.id ? data : todo
          ) ?? []
      );

      setNewTodoTitle('');
      setSuccessMessage(`✅ Created todo: "${data.title}"`);
      setTimeout(() => setSuccessMessage(null), 3000);
    },
    onError: (error, variables, context) => {
      // Rollback optimistic update
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
  }); // Update mutation with optimistic updates
  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onMutate: async variables => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Optimistically update the todo
      queryClient.setQueryData<Todo[]>(
        ['todos'],
        old =>
          old?.map(todo =>
            todo.id === variables.id ? { ...todo, ...variables } : todo
          ) ?? []
      );

      return { previousTodos };
    },
    onSuccess: data => {
      // Update with real server data
      queryClient.setQueryData<Todo[]>(
        ['todos'],
        old => old?.map(todo => (todo.id === data.id ? data : todo)) ?? []
      );

      setSuccessMessage(
        `✅ Updated todo: "${data.title}" (${
          data.completed ? 'completed' : 'pending'
        })`
      );

      // Highlight the updated item temporarily
      setRecentlyUpdated(prev => ({ ...prev, [data.id]: true }));
      setTimeout(() => {
        setRecentlyUpdated(prev => ({ ...prev, [data.id]: false }));
        setSuccessMessage(null);
      }, 3000);
    },
    onError: (error, variables, context) => {
      // Rollback optimistic update
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
  }); // Delete mutation with optimistic updates
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onMutate: async variables => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Optimistically remove the todo
      queryClient.setQueryData<Todo[]>(
        ['todos'],
        old => old?.filter(todo => todo.id !== variables) ?? []
      );

      return { previousTodos };
    },
    onSuccess: (data, variables) => {
      // The optimistic update is already done, no need to update again
      setSuccessMessage(`✅ Deleted todo #${variables}`);
      setTimeout(() => setSuccessMessage(null), 3000);
    },
    onError: (error, variables, context) => {
      // Rollback optimistic update
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
  });
  const handleCreate = () => {
    if (!newTodoTitle.trim()) {
      return;
    }

    const todoData = {
      title: newTodoTitle,
      completed: false,
      userId: 1,
    };
    createMutation.mutate(todoData);
  };

  const handleToggle = (todo: Todo) => {
    const updateData = {
      id: todo.id,
      title: todo.title,
      userId: todo.userId,
      completed: !todo.completed,
    };

    updateMutation.mutate(updateData);
  };

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };
  const refetchTodos = () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          TanStack Query Example with Mutations
          {isFetching && (
            <Badge variant="outline" className="text-xs">
              Syncing...
            </Badge>
          )}
          {isStale && (
            <Badge variant="secondary" className="text-xs">
              Stale
            </Badge>
          )}
          {(createMutation.isPending ||
            updateMutation.isPending ||
            deleteMutation.isPending) && (
            <Badge variant="outline" className="text-xs">
              Mutating...
            </Badge>
          )}
        </CardTitle>{' '}
        <CardDescription>
          Using TanStack Query with mutations and automatic cache management
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {' '}
        <div className="flex gap-2">
          <Button
            onClick={refetchTodos}
            disabled={isFetching}
            variant="outline"
          >
            {isFetching ? 'Refetching...' : 'Refetch Todos'}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              queryClient.removeQueries({ queryKey: ['todos'] });
            }}
          >
            Clear Cache
          </Button>
        </div>
        {/* Create Todo Section */}
        <div className="flex gap-2">
          <Input
            placeholder="Enter new todo title..."
            value={newTodoTitle}
            onChange={e => setNewTodoTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleCreate()}
          />
          <Button
            onClick={handleCreate}
            disabled={createMutation.isPending || !newTodoTitle.trim()}
            size="sm"
          >
            {createMutation.isPending ? (
              'Creating...'
            ) : (
              <>
                <Plus className="h-4 w-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
        {successMessage && (
          <Alert className="border-green-200 bg-green-50 text-green-800">
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}
        {(error ||
          createMutation.isError ||
          updateMutation.isError ||
          deleteMutation.isError) && (
          <Alert variant="destructive">
            <AlertDescription>
              {error instanceof Error
                ? error.message
                : createMutation.error?.message ||
                  updateMutation.error?.message ||
                  deleteMutation.error?.message ||
                  'An error occurred'}
            </AlertDescription>
          </Alert>
        )}
        <div className="space-y-2">
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-4 flex-1" />
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-8" />
                </div>
              ))
            : todos?.map(todo => (
                <div
                  key={todo.id}
                  className={`flex items-center space-x-2 p-2 border rounded group transition-colors ${
                    recentlyUpdated[todo.id]
                      ? 'bg-green-50 border-green-200'
                      : ''
                  }`}
                >
                  <button
                    onClick={() => handleToggle(todo)}
                    disabled={updateMutation.isPending}
                    className="h-4 w-4 border rounded flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                  >
                    {updateMutation.isPending ? (
                      <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
                    ) : (
                      todo.completed && (
                        <div className="h-2 w-2 bg-blue-500 rounded-full" />
                      )
                    )}
                  </button>
                  <span
                    className={`text-sm flex-1 ${
                      todo.completed ? 'line-through text-muted-foreground' : ''
                    }`}
                  >
                    {todo.title}
                  </span>
                  <Badge
                    variant={todo.completed ? 'secondary' : 'default'}
                    className="text-xs"
                  >
                    {todo.completed ? 'Done' : 'Pending'}
                  </Badge>{' '}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(todo.id)}
                    disabled={deleteMutation.isPending}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {deleteMutation.isPending ? (
                      '...'
                    ) : (
                      <Trash2 className="h-4 w-4 text-red-500" />
                    )}
                  </Button>
                </div>
              ))}{' '}
        </div>
      </CardContent>
    </Card>
  );
}
