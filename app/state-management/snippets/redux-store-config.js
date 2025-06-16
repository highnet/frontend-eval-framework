export const reduxStoreConfig = `// store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    reduxTodos: todoReducer,
  },
  // Redux DevTools enabled with custom name
  devTools: {
    name: '⚡ Redux Toolkit Store'
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Type-safe hooks for TypeScript
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector`;
