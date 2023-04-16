import GlobalContext from "context/GlobalContext";
import "../styles/main.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalContext>
        <Component {...pageProps} />
        <Toaster />
      </GlobalContext>
    </DndProvider>
  );
}

export default MyApp;
