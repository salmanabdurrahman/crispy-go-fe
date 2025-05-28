import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import AppRoutes from "./routes/AppRoutes.jsx";
import CustomToast from "./components/common/custom-toast/CustomToast.jsx";
import AnalyticsTracker from "./components/common/analytics-tracker/AnalyticsTracker.jsx";
import { TRACKING_ID } from "./constants/appConfig.js";
import "./index.css";

ReactGA.initialize(TRACKING_ID);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<AnalyticsTracker />
			<HelmetProvider>
				<AppRoutes />
				<CustomToast />
			</HelmetProvider>
		</BrowserRouter>
	</StrictMode>
);
