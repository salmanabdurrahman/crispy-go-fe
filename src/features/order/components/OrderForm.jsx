import { useState } from "react";
import toast from "react-hot-toast";
import useMenus from "./../../menu/hooks/useMenus.js";
import LoadingSpinner from "./../../../components/common/spinner/LoadingSpinner.jsx";
import OrderSuccessMessage from "./OrderSuccessMessage.jsx";
import OrderCategoryFilter from "./OrderCategoryFilter.jsx";
import OrderMenuItems from "./OrderMenuItems.jsx";
import OrderFormInput from "./OrderFormInput.jsx";
import useOrder from "../hooks/useOrder.js";

const initialFormData = {
	full_name: "",
	email: "",
	phone: "",
	address: "",
	order_type: "pengiriman",
	notes: "",
};

const OrderForm = () => {
	const [orderForm, setOrderForm] = useState(initialFormData);
	const [activeCategory, setActiveCategory] = useState("all");
	const [selectedItems, setSelectedItems] = useState([]);
	const [orderSuccess, setOrderSuccess] = useState(false);
	const [orderNumber, setOrderNumber] = useState("");
	const { isLoading, data } = useMenus();
	const { isLoading: isLoadingOrder, submitOrder } = useOrder();

	if (isLoading) return <LoadingSpinner />;

	// Filter menu items based on active category
	const filteredMenuItems = activeCategory === "all" ? data : data.filter(item => item.category === activeCategory);

	// Handle perubahan pada form
	const handleFormChange = e => {
		const { name, value } = e.target;
		setOrderForm({
			...orderForm,
			[name]: value,
		});
	};

	// Tambah item ke keranjang
	const addToCart = menuItem => {
		const existingItem = selectedItems.find(item => item.menu_id === menuItem.id);

		if (existingItem) {
			// Update quantity jika item sudah ada
			setSelectedItems(
				selectedItems.map(item =>
					item.menu_id === menuItem.id ? { ...item, quantity: item.quantity + 1 } : item
				)
			);
		} else {
			// Tambah item baru
			setSelectedItems([
				...selectedItems,
				{
					menu_id: menuItem.id,
					name: menuItem.name,
					price: menuItem.price,
					quantity: 1,
				},
			]);
		}
	};

	// Update item quantity
	const updateQuantity = (menuId, newQuantity) => {
		if (newQuantity < 1) {
			// Hapus item jika quantity kurang dari 1
			setSelectedItems(selectedItems.filter(item => item.menu_id !== menuId));
		} else {
			// Update quantity
			setSelectedItems(
				selectedItems.map(item => (item.menu_id === menuId ? { ...item, quantity: newQuantity } : item))
			);
		}
	};

	// Remove item from cart
	const removeItem = menuId => {
		setSelectedItems(selectedItems.filter(item => item.menu_id !== menuId));
	};

	// Calculate total
	const calculateTotal = () => {
		return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	// Handle submit form
	const handleSubmit = async e => {
		e.preventDefault();

		// Validasi form
		if (selectedItems.length === 0) {
			alert("Silakan pilih minimal satu menu");
			return;
		}

		// Data yang akan dikirim ke server
		const orderData = {
			...orderForm,
			items: selectedItems.map(item => ({
				menu_id: item.menu_id,
				quantity: item.quantity,
			})),
		};

		// Kirim data ke server
		await submitOrder(orderData);
		toast.success(`Pesanan Anda telah terkirim. Kami akan segera menghubungi Anda untuk konfirmasi pesanan`);

		// Generate random order number
		const randomOrderNumber =
			"CG" +
			Math.floor(Math.random() * 10000)
				.toString()
				.padStart(6, "0");
		setOrderNumber(randomOrderNumber);
		setOrderSuccess(true);

		// Reset form dan keranjang
		setOrderForm(initialFormData);
		setSelectedItems([]);
	};

	return (
		<section className="section">
			<div className="container-custom">
				{orderSuccess ? (
					<OrderSuccessMessage orderNumber={orderNumber} setOrderSuccess={setOrderSuccess} />
				) : (
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						{/* Menu Selection */}
						<div className="lg:col-span-2">
							<div className="card mb-6 p-6">
								<h2 className="mb-4 text-xl font-bold">Pilih Menu</h2>
								<OrderCategoryFilter
									activeCategory={activeCategory}
									setActiveCategory={setActiveCategory}
								/>
								<OrderMenuItems filteredMenuItems={filteredMenuItems} addToCart={addToCart} />
							</div>
						</div>
						{/* Order Form */}
						<div className="lg:col-span-1">
							<OrderFormInput
								handleSubmit={handleSubmit}
								selectedItems={selectedItems}
								updateQuantity={updateQuantity}
								removeItem={removeItem}
								calculateTotal={calculateTotal}
								orderForm={orderForm}
								handleFormChange={handleFormChange}
								setOrderForm={setOrderForm}
								isLoadingOrder={isLoadingOrder}
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default OrderForm;
