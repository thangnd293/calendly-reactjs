import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootRoute } from "./routes/rootRoute";

function App() {
  const router = createBrowserRouter(rootRoute);
  return <RouterProvider router={router} />;
}

export default App;
