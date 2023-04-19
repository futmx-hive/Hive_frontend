import GlobalContext from "context/GlobalContext";
import "../styles/main.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";


const client = new QueryClient()
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>

    <DndProvider backend={HTML5Backend}>
      <GlobalContext>
        <Component {...pageProps} />
        <Toaster />
      </GlobalContext>
    </DndProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
