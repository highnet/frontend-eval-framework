export const nextjsDynamicRoutes = `// app/users/[id]/page.tsx - Dynamic route
export default function UserPage({ params }: { params: { id: string } }) {
  return <div>User ID: {params.id}</div>
}`;
