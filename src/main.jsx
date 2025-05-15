import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./components/common/modal/modal.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<ModalProvider>
				<AppRoutes />
			</ModalProvider>
		</BrowserRouter>
	</StrictMode>
);
