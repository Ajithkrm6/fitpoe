import * as React from "react";
import { HomeScreen } from "./pages/home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define custom breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
