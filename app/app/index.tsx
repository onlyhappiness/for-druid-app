import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./routes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ModalProvider /> */}
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
