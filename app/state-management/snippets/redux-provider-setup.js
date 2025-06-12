export const reduxProviderSetup = `// app/layout.tsx or App.tsx
import { Provider } from 'react-redux'
import { store } from './store'

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}

// Or for a regular React app
function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}`;
