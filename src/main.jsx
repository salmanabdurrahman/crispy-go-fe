import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import CustomToast from "./components/common/custom-toast/CustomToast.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<AppRoutes />
			<CustomToast />
		</BrowserRouter>
	</StrictMode>
);
