export default `// app/api/users/route.ts - Built-in API endpoints
export async function GET() {
  const users = await fetchUsersFromDB()
  return Response.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newUser = await createUser(body)
  return Response.json(newUser)
}

// Frontend can call directly without separate server
const response = await fetch('/api/users')
const users = await response.json()`;
