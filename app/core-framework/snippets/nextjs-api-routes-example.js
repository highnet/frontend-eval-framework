export default `// app/api/users/route.ts - Built-in backend
export async function GET() {
  const users = await db.users.findMany()
  return Response.json(users)
}`;
