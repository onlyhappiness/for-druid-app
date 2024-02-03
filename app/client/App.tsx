import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./Navigation";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
