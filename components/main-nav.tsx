import Link from 'next/link';
import { Book } from 'lucide-react';

interface MainNavProps {
  sidebarToggle?: React.ReactNode;
}

export function MainNav({ sidebarToggle }: MainNavProps) {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      {sidebarToggle}
      <Link href="/" className="flex items-center space-x-2">
        <Book className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          Frontend Evaluation
        </span>
      </Link>
    </div>
  );
}
