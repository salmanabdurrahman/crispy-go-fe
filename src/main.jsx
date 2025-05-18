import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/AppRoutes.jsx";
import CustomToast from "./components/common/custom-toast/CustomToast.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				<AppRoutes />
				<CustomToast />
			</HelmetProvider>
		</BrowserRouter>
	</StrictMode>
);
