export const muiGlobalThemeOverride = `const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none'
        }
      }
    }
  }
})`;
