export const axiosInstallationSetup = `npm install axios

// Global interceptor setup
axios.interceptors.request.use(config => {
  config.headers.Authorization = \`Bearer \${token}\`
  return config
})`;
