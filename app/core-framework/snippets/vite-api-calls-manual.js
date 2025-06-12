export default `// Separate backend required
const API_BASE = 'http://localhost:3001/api'

const fetchUsers = async () => {
  const response = await fetch(\`\${API_BASE}/users\`)`;
