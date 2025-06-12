'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export function TableOfContents() {
  const [gettingStartedOpen, setGettingStartedOpen] = useState(true);
  const [evaluationAreasOpen, setEvaluationAreasOpen] = useState(true);

  return (
    <div className="space-y-4">
      <Collapsible
        open={gettingStartedOpen}
        onOpenChange={setGettingStartedOpen}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
          <h4 className="text-sm font-medium">Getting Started</h4>
          {gettingStartedOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <nav className="flex flex-col space-y-2 ml-2">
            <Link href="/introduction" className="text-sm hover:underline">
              Introduction
            </Link>
          </nav>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={evaluationAreasOpen}
        onOpenChange={setEvaluationAreasOpen}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
          <h4 className="text-sm font-medium">Evaluation Areas</h4>
          {evaluationAreasOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <nav className="flex flex-col space-y-2 ml-2">
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
