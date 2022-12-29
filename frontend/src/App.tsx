import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { queryClient } from "./lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
