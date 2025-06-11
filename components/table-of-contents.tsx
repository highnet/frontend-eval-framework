import Link from "next/link"

export function TableOfContents() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="mb-1 text-sm font-medium">Getting Started</h4>
        <nav className="flex flex-col space-y-2">
          <Link href="/introduction" className="text-sm hover:underline">
            Introduction
          </Link>

        </nav>
      </div>
      <div>
        <h4 className="mb-1 text-sm font-medium">Evaluation Areas</h4>
        <nav className="flex flex-col space-y-2">
          <Link href="/core-framework" className="text-sm hover:underline">
            Core Framework
          </Link>
          <Link href="/ui-components" className="text-sm hover:underline">
            UI Components & Design System
          </Link>
          <Link href="/css-styling" className="text-sm hover:underline">
            CSS & Styling
          </Link>
          <Link href="/routing" className="text-sm hover:underline">
            Routing
          </Link>
          <Link href="/forms" className="text-sm hover:underline">
            Forms
          </Link>
          <Link href="/data-fetching" className="text-sm hover:underline">
            Data Fetching & Queries
          </Link>
          <Link href="/state-management" className="text-sm hover:underline">
            State Management
          </Link>
        </nav>
      </div>
    </div>
  )
}
