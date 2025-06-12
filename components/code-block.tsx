'use client';

import { Check, Copy } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('jsx', javascript);
hljs.registerLanguage('tsx', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);

interface CodeBlockProps {
  language: string;
  code: string;
  isShortSnippet?: boolean;
}

export function CodeBlock({
  language,
  code,
  isShortSnippet = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  // Validate short snippet line count
  if (isShortSnippet) {
    const lines = code.split('\n');
    if (lines.length > 5) {
      throw new Error(
        `Short snippet cannot exceed 5 lines. Current snippet has ${lines.length} lines. ${code}`
      );
    }
  }

  useEffect(() => {
    if (codeRef.current) {
      // Clear any existing highlighting
      codeRef.current.removeAttribute('data-highlighted');

      // Apply highlighting
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-full">
      <pre className="rounded-md bg-muted overflow-x-auto max-w-full">
        <div className="flex min-w-0">
          <div className="flex-1 min-w-0 p-2 sm:p-4">
            <code
              ref={codeRef}
              className={`language-${language} text-xs sm:text-sm block whitespace-pre overflow-x-auto`}
              style={{
                wordBreak: 'keep-all',
                overflowWrap: 'normal',
                whiteSpace: 'pre',
              }}
            >
              {code}
            </code>
          </div>
        </div>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1 rounded-md bg-background/80 hover:bg-background transition-colors z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
        ) : (
          <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
        )}
      </button>
    </div>
  );
}
