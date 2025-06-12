export default `// Manual meta tag management with React Helmet
npm install react-helmet-async

import { Helmet } from 'react-helmet-async'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - My App</title>
        <meta name="description" content="Welcome to my app" />
        <meta property="og:title" content="Home - My App" />
      </Helmet>
      <div>Content rendered on client-side only</div>
    </>
  )
}`;
