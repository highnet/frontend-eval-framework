"use client"

import { Check, Copy } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import typescript from "highlight.js/lib/languages/typescript"
import css from "highlight.js/lib/languages/css"
import scss from "highlight.js/lib/languages/scss"
import xml from "highlight.js/lib/languages/xml"
import json from "highlight.js/lib/languages/json"
import bash from "highlight.js/lib/languages/bash"

// Register languages
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('scss', scss)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('jsx', javascript)
hljs.registerLanguage('tsx', typescript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)

interface CodeBlockProps {
  language: string
  code: string
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      // Clear any existing highlighting
      codeRef.current.removeAttribute('data-highlighted')
      
      // Apply highlighting
      hljs.highlightElement(codeRef.current)
    }
  }, [code, language])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <pre className="rounded-md bg-muted p-4 overflow-x-auto">
        <code 
          ref={codeRef}
          className={`language-${language}`}
        >
          {code}
        </code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-1 rounded-md bg-background/80 hover:bg-background"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}
