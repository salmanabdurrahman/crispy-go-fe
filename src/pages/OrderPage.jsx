"use client";

import OrderHero from "../features/order/components/OrderHero.jsx";
import OrderForm from "../features/order/components/OrderForm.jsx";

const OrderPage = () => {
	return (
		<>
			{/* Hero Section */}
			<OrderHero />
			{/* Order Form Section */}
			<OrderForm />
		</>
	);
};

export default OrderPage;
