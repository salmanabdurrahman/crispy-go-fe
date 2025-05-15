import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./../components/common/spinner/LoadingSpinner.jsx";
import Layout from "./../components/layouts/main-layout/Layout.jsx";

const AppRoutes = () => {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Routes>
				<Route path="/" element={<Layout />}></Route>
				{/* <Route index element={<HomePage />} /> */}
				{/* <Route path="menu" element={<MenuPage />} /> */}
				{/* <Route path="about" element={<AboutPage />} /> */}
				{/* <Route path="contact" element={<ContactPage />} /> */}
				{/* <Route path="blog" element={<BlogPage />} /> */}
				{/* <Route path="blog/:slug" element={<BlogDetailPage />} /> */}
				{/* <Route path="faq" element={<FAQPage />} /> */}
				{/* <Route path="locations" element={<LocationsPage />} /> */}
				{/* <Route path="careers" element={<CareersPage />} /> */}
				{/* <Route path="order" element={<OrderPage />} /> */}
				{/* <Route path="*" element={<NotFoundPage />} /> */}
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
