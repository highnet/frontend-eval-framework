'use client';

import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import {
  useSidebarToggle,
  SidebarToggleButton,
  CollapsibleSidebar,
} from '@/components/collapsible-sidebar';

interface LayoutWithSidebarProps {
  children: React.ReactNode;
}

export function LayoutWithSidebar({ children }: LayoutWithSidebarProps) {
  const { isOpen, toggleSidebar } = useSidebarToggle();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40  bg-background">
        <div className="flex h-16 items-center justify-between py-4">
          <MainNav
            sidebarToggle={
              <SidebarToggleButton isOpen={isOpen} onToggle={toggleSidebar} />
            }
          />
          <MobileNav />
        </div>
      </header>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row">
          <CollapsibleSidebar isOpen={isOpen} />
          <main className="border flex-1 py-4 px-2 md:py-8 md:px-8 min-w-0 overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
