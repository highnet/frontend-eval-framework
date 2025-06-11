"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function StateManagementPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">State Management</h1>
      
      <p className="mb-4">
        This section discusses how you will manage application-wide state that is shared across many components.
      </p>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>
          Centralizing and managing data that needs to be accessible by multiple components, 
          often across different parts of the component tree, ensuring consistency and reactivity.
        </p>
      </div>
      
      <Tabs defaultValue="context" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="context">Context API</TabsTrigger>
          <TabsTrigger value="redux">Redux / Redux Toolkit</TabsTrigger>
          <TabsTrigger value="zustand">Zustand</TabsTrigger>
        </TabsList>
        
        <TabsContent value="context" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Context API (React)</h3>
          <p>
            React's built-in way to pass data through the component tree without having to pass props 
            down manually at every level.
          </p>
          <p className="mb-2">
            <a 
              href="https://react.dev/learn/passing-props-with-context" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              React Docs - Context
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Good for small to medium-sized applications or for less frequently updated global state. 
              Can lead to re-renders for consuming components if not optimized.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Creating and Consuming Context):</h4>
            <CodeBlock 
              language="jsx" 
              code={`import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return (<ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>);
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (<button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>);
}`} 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="redux" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Redux / Redux Toolkit</h3>
          <p>
            A predictable state container for JavaScript apps. Redux Toolkit is the official, opinionated, 
            batteries-included toolset for efficient Redux development.
          </p>
          <p className="mb-2">
            <a 
              href="https://redux.js.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Redux Official Documentation
            </a>
            {" | "}
            <a 
              href="https://redux-toolkit.js.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Redux Toolkit Official Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Provides a centralized store for global state, with a strict unidirectional data flow. 
              Best for complex applications with large and frequently changing state. Redux Toolkit simplifies boilerplate.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Redux Toolkit Slice):</h4>
            <CodeBlock 
              language="javascript" 
              code={`// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: { increment: state => { state.value += 1; } },
});
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;`} 
            />
            <div className="mt-2">
              <CodeBlock 
                language="jsx" 
                code={`// Counter.jsx (using useSelector and useDispatch)
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}`} 
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="zustand" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Zustand</h3>
          <p>
            A small, fast, and scalable bear-necessities state-management solution for React.
          </p>
          <p className="mb-2">
            <a 
              href="https://github.com/pmndrs/zustand" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Zustand GitHub Repository
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              A lightweight and flexible alternative, offering a simplified API inspired by Redux, 
              but with less boilerplate and often preferred for its ease of use and performance for mid-sized applications.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Example (Creating and Using a Zustand Store):</h4>
            <CodeBlock 
              language="javascript" 
              code={`import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, inc } = useCounterStore();
  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}`} 
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/data-fetching">Previous: Data Fetching</Link>
        </Button>
        <Button asChild>
          <Link href\
