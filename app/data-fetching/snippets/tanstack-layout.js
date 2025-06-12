export const tanstackLayout = `// app/layout.tsx
import { QueryProvider } from "@/components/query-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {/* Your app components */}
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}`;
