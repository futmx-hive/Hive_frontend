import GlobalContext from "context/GlobalContext";
import "../styles/main.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function MyApp({ Component, pageProps }) {
	return (
		<DndProvider backend={HTML5Backend}>
			<GlobalContext>
				<Component {...pageProps} />
			</GlobalContext>
		</DndProvider>
	);
}

export default MyApp;
