import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryProvider } from "@/components/query-provider"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { TableOfContents } from "@/components/table-of-contents"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Frontend Library and Tool Evaluation Framework",
  description: "A structured approach to evaluating and selecting frontend technologies for your projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                  <MainNav />
                  <MobileNav />
                </div>
              </header>
              <div className="container flex-1">
                <div className="flex flex-col md:flex-row">
                  <aside className="hidden md:block md:w-64 shrink-0 border-r pr-8 pt-8 pb-12">
                    <TableOfContents />
                  </aside>
                  <main className="flex-1 py-8 md:px-8 min-w-0 overflow-hidden">{children}</main>
                </div>
              </div>
              <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                  <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Frontend Evaluation Framework
                  </p>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
