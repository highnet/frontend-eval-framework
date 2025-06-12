'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TableOfContents } from '@/components/table-of-contents';

// Custom hook to manage sidebar state
export function useSidebarToggle() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return { isOpen, toggleSidebar };
}

// Toggle button component
export function SidebarToggleButton({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="hidden md:flex h-8 w-8"
      onClick={onToggle}
    >
      {isOpen ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  );
}

// Collapsible sidebar component
export function CollapsibleSidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`hidden md:block shrink-0 border-r pr-8 pt-8 pb-12 transition-all duration-300 ease-in-out ${
        isOpen ? 'md:w-64' : 'md:w-0 pr-0'
      }`}
    >
      <div
        className={`transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <TableOfContents />
      </div>
    </aside>
  );
}
