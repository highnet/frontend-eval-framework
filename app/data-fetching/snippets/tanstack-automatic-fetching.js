export const tanstackAutomaticFetching = `const { data: todos, isLoading, error } = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetch('/api/todos').then(res => res.json()),
  staleTime: 30000, // Smart caching
})`;
