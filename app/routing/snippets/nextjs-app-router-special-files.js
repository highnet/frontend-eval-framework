export const nextjsAppRouterSpecialFiles = `// app/loading.tsx - Loading UI
export default function Loading() {
  return (
    <div className="loading">
      <p>Loading...</p>
    </div>
  )
}

// app/error.tsx - Error UI
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

// app/not-found.tsx - 404 page
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}`;
