import Link from "next/link"
import { Book } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Book className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Frontend Evaluation</span>
      </Link>
    </div>
  )
}
