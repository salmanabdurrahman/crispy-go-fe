"use client";

import OrderHero from "../features/order/components/OrderHero.jsx";
import OrderForm from "../features/order/components/OrderForm.jsx";
import SEO from "../components/common/seo/SEO.jsx";

const OrderPage = () => {
	return (
		<>
			<SEO
				title="CrispyGo - Pesan Ayam Sekarang"
				description="Mau makan ayam krispi tanpa keluar rumah? Pesan online di CrispyGo sekarang juga. Cepat, mudah, dan tentunya enak!"
				keywords="pesan ayam crispy, order makanan online, delivery crispygo, pesan ayam goreng online, makanan cepat saji online"
			/>
			<OrderHero />
			<OrderForm />
		</>
	);
};

export default OrderPage;
