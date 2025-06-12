export default `// Frontend API calls to separate backend
const fetchUsers = async () => {
  const response = await fetch('http://localhost:3001/api/users')
  return response.json()
}

// Or using a library like Axios
import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3001/api'
})

// Requires separate Express/Node.js server running
// on different port (3001) than frontend (3000)`;
