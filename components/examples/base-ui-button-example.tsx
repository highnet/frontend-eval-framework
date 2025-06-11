'use client'

import { clsx } from 'clsx'

const baseButtonStyles = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-0 cursor-pointer"
const primaryStyles = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"

export function BaseButtonExample() {
  return (
    <button className={clsx(baseButtonStyles, primaryStyles)}>
      Base UI Button
    </button>
  )
}
