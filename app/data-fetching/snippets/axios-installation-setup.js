export const axiosInstallationSetup = `// Global interceptor setup
axios.interceptors.request.use(config => {
  config.headers.Authorization = \`Bearer \${token}\`
  return config
})`;
