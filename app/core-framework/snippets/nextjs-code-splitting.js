export default `// Automatic code splitting per page/component
import dynamic from 'next/dynamic'

// Heavy component loaded only when needed
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false // Optional: disable server-side rendering
})

// Each page automatically gets its own bundle
// /about → about.js, /blog → blog.js, etc.`;
