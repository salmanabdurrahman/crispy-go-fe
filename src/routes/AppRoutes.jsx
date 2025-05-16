import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./../components/common/spinner/LoadingSpinner.jsx";
import Layout from "./../components/layouts/main-layout/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import MenuPage from "../pages/MenuPage.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import BlogDetailPage from "./../pages/BlogDetailPage";
import LocationsPage from "../pages/LocationPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import OrderPage from "../pages/OrderPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const AppRoutes = () => {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="menus" element={<MenuPage />} />
					<Route path="blog" element={<BlogPage />} />
					<Route path="blog/:slug" element={<BlogDetailPage />} />
					<Route path="locations" element={<LocationsPage />} />
					{/* <Route path="careers" element={<CareersPage />} /> */}
					{/* <Route path="faq" element={<FAQPage />} /> */}
					<Route path="about" element={<AboutPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="order" element={<OrderPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
