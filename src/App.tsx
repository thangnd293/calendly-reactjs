import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootRoute } from "./routes/rootRoute";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { theme } from "./configs/theme";

function App() {
  const router = createBrowserRouter(rootRoute);
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
