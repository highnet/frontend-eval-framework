export const tanstackOptimisticMutations = `const createMutation = useMutation({
  mutationFn: (newTodo) => axios.post('/api/todos', newTodo),
  onMutate: async (newTodo) => {
    // Optimistically update UI instantly
    queryClient.setQueryData(['todos'], old => [newTodo, ...old])
  }
})`;
