"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold">Frontend Evaluation</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 px-2 pt-6">
          <Link
            href="/introduction"
            onClick={() => setOpen(false)}
            className="px-5 py-2 text-base hover:bg-accent rounded-md"
          >
            Introduction
          </Link>
          <Link
            href="/core-framework"
            onClick={() => setOpen(false)}
            className="px-5 py-2 text-base hover:bg-accent rounded-md"
          >
            Core Framework
          </Link>
          <Link
            href="/ui-components"
            onClick={() => setOpen(false)}
            className="px-5 py-2 text-base hover:bg-accent rounded-md"
          >
            UI Components
          </Link>
          <Link
            href="/css-styling"
            onClick={() => setOpen(false)}
            className="px-5 py-2 text-base hover:bg-accent rounded-md"
          >
            CSS & Styling
          </Link>
          <Link
            href="/routing"
            onClick={() => setOpen(false)}
            className="px-5 py-2 text-base hover:bg-accent rounded-md"
          >
            Routing
          </Link>
          <Link href="/forms" onClick={() => setOpen(false)} className="px-5 py-2 text-base hover:bg-accent rounded-md">
            Forms
          </Link>
          <Link
            href="/data-fetching"
            onClick={() => setOpen(false)}
            className="px-5 py-2 text-base hover:bg-accent rounded-md"
          >
            Data Fetching
          </Link>
          <Link
            href="/state-management"
            onClick={() => setOpen(false)}
            className="px-5 py-2 text-base hover:bg-accent rounded-md"
          >
            State Management
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
