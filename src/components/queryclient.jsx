import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { App } from "antd";

export default function ReactQueryClient(props) {
  const { message } = App.useApp();

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (e) => {
        console.error("---  queryCache  ---", e);
        message.error(e.message);
      },
    }),
    mutationCache: new MutationCache({
      onError: (e) => {
        console.error("---  mutationCache  ---", e);
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
