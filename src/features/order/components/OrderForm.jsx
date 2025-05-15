import { useState } from "react";
import { Minus, Plus, ShoppingBag, X, MapPin, Check } from "lucide-react";

const OrderForm = () => {
	// Menu categories
	const categories = [
		{ id: "all", name: "Semua Menu" },
		{ id: "chicken", name: "Chicken" },
		{ id: "seafood", name: "Seafood" },
		{ id: "sides", name: "Sides" },
		{ id: "beverages", name: "Minuman" },
		{ id: "desserts", name: "Dessert" },
	];

	// Menu items
	const menuItems = [
		{
			id: 1,
			name: "Original Crispy Chicken",
			category: "chicken",
			price: 45000,
			description: "Ayam crispy dengan bumbu rahasia dan tekstur renyah yang sempurna.",
		},
		{
			id: 2,
			name: "Spicy Crispy Chicken",
			category: "chicken",
			price: 48000,
			description: "Ayam crispy dengan bumbu pedas khas CrispyGo yang menggugah selera.",
		},
		{
			id: 3,
			name: "Honey Garlic Chicken",
			category: "chicken",
			price: 50000,
			description: "Ayam crispy dengan saus madu dan bawang putih yang manis dan gurih.",
		},
		{
			id: 4,
			name: "Crispy Fish Fillet",
			category: "seafood",
			price: 42000,
			description: "Fillet ikan dengan lapisan tepung crispy yang renyah dan lezat.",
		},
		{
			id: 5,
			name: "Crispy Shrimp",
			category: "seafood",
			price: 55000,
			description: "Udang crispy dengan saus spesial yang menggugah selera.",
		},
		{
			id: 6,
			name: "Crispy Calamari",
			category: "seafood",
			price: 48000,
			description: "Cumi-cumi crispy dengan tekstur kenyal dan renyah yang sempurna.",
		},
		{
			id: 7,
			name: "French Fries",
			category: "sides",
			price: 25000,
			description: "Kentang goreng crispy dengan bumbu rahasia CrispyGo.",
		},
		{
			id: 8,
			name: "Onion Rings",
			category: "sides",
			price: 28000,
			description: "Cincin bawang bombay crispy yang renyah dan gurih.",
		},
		{
			id: 9,
			name: "Mozzarella Sticks",
			category: "sides",
			price: 35000,
			description: "Stik keju mozzarella yang crispy di luar dan meleleh di dalam.",
		},
		{
			id: 10,
			name: "Iced Tea",
			category: "beverages",
			price: 15000,
			description: "Teh dingin segar dengan pilihan rasa.",
		},
		{
			id: 11,
			name: "Lemon Squash",
			category: "beverages",
			price: 18000,
			description: "Minuman segar dari perasan lemon dengan soda.",
		},
		{
			id: 12,
			name: "Crispy Chocolate Lava",
			category: "desserts",
			price: 32000,
			description: "Dessert coklat dengan lapisan crispy dan lelehan coklat di dalamnya.",
		},
	];

	// State untuk form order
	const [orderForm, setOrderForm] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: "",
		order_type: "pengiriman",
		notes: "",
	});

	// State untuk filter menu
	const [activeCategory, setActiveCategory] = useState("all");

	// State untuk item yang dipilih
	const [selectedItems, setSelectedItems] = useState([]);

	// State untuk menampilkan pesan sukses
	const [orderSuccess, setOrderSuccess] = useState(false);
	const [orderNumber, setOrderNumber] = useState("");

	// Filter menu items based on active category
	const filteredMenuItems =
		activeCategory === "all" ? menuItems : menuItems.filter(item => item.category === activeCategory);

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
	const handleSubmit = e => {
		e.preventDefault();

		// Validasi form
		if (selectedItems.length === 0) {
			alert("Silakan pilih minimal satu menu");
			return;
		}

		// Data yang akan dikirim ke server
		const orderData = {
			...orderForm,
			order_items: selectedItems.map(item => ({
				menu_id: item.menu_id,
				quantity: item.quantity,
				price: item.price,
			})),
		};

		console.log("Order data:", orderData);

		// Simulasi pengiriman data ke server
		setTimeout(() => {
			// Generate random order number
			const randomOrderNumber =
				"CG" +
				Math.floor(Math.random() * 10000)
					.toString()
					.padStart(4, "0");
			setOrderNumber(randomOrderNumber);
			setOrderSuccess(true);

			// Reset form dan keranjang
			setOrderForm({
				full_name: "",
				email: "",
				phone: "",
				address: "",
				order_type: "pengiriman",
				notes: "",
			});
			setSelectedItems([]);
		}, 2000);
	};

	return (
		<section className="section">
			<div className="container-custom">
				{orderSuccess ? (
					/* Order Success Message */
					<div className="mx-auto max-w-2xl rounded-lg bg-white p-8 text-center shadow-md">
						<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
							<Check className="h-10 w-10 text-green-600" />
						</div>
						<h2 className="mb-4 text-2xl font-bold">Pesanan Berhasil!</h2>
						<p className="mb-6 text-gray-600">
							Terima kasih telah memesan di CrispyGo. Pesanan Anda telah diterima dan sedang diproses.
						</p>
						<div className="mb-6 rounded-md bg-gray-50 p-4 text-left">
							<p className="font-medium">
								Nomor Pesanan: <span className="text-crispygo-rust">{orderNumber}</span>
							</p>
							<p className="mt-2">
								Kami akan menghubungi Anda melalui email atau telepon untuk konfirmasi pesanan.
							</p>
						</div>
						<button onClick={() => setOrderSuccess(false)} className="btn btn-primary">
							Pesan Lagi
						</button>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						{/* Menu Selection */}
						<div className="lg:col-span-2">
							<div className="card mb-6 p-6">
								<h2 className="mb-4 text-xl font-bold">Pilih Menu</h2>
								{/* Category Filter */}
								<div className="mb-8 overflow-x-auto">
									<div className="flex space-x-2 pb-2">
										{categories.map(category => (
											<button
												key={category.id}
												className={`whitespace-nowrap rounded-full px-4 py-2 ${
													activeCategory === category.id
														? "bg-crispygo-rust text-white"
														: "hover:bg-crispygo-cream hover:border-crispygo-orange border border-gray-200 bg-white"
												} transition-colors`}
												onClick={() => setActiveCategory(category.id)}
											>
												{category.name}
											</button>
										))}
									</div>
								</div>
								{/* Menu Items */}
								<div className="grid gap-6 md:grid-cols-2">
									{filteredMenuItems.map(menuItem => (
										<div key={menuItem.id} className="card overflow-hidden">
											<div className="relative h-40">
												<img
													src={`/placeholder.svg?height=160&width=320&text=${menuItem.name}`}
													alt={menuItem.name}
													className="h-full w-full object-cover"
												/>
											</div>
											<div className="p-4">
												<div className="mb-2 flex items-center justify-between">
													<h3 className="text-lg font-bold">{menuItem.name}</h3>
													<span className="text-crispygo-rust font-bold">
														Rp {menuItem.price.toLocaleString()}
													</span>
												</div>
												<p className="mb-4 line-clamp-2 text-sm text-gray-600">
													{menuItem.description}
												</p>
												<button
													className="bg-crispygo-orange hover:bg-crispygo-rust w-full rounded-md py-2 text-white transition-colors"
													onClick={() => addToCart(menuItem)}
												>
													Tambah ke Pesanan
												</button>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						{/* Order Form */}
						<div className="lg:col-span-1">
							<form onSubmit={handleSubmit} className="card sticky top-24 p-6">
								<h2 className="mb-4 text-xl font-bold">Form Pemesanan</h2>
								{/* Selected Items */}
								<div className="mb-6">
									<h3 className="mb-2 font-medium">Item yang Dipilih</h3>
									{selectedItems.length === 0 ? (
										<p className="text-sm text-gray-500">Belum ada item yang dipilih</p>
									) : (
										<div className="max-h-60 space-y-3 overflow-y-auto pr-2">
											{selectedItems.map(item => (
												<div
													key={item.menu_id}
													className="flex items-center justify-between border-b pb-2"
												>
													<div>
														<p className="font-medium">{item.name}</p>
														<p className="text-sm text-gray-500">
															Rp {item.price.toLocaleString()}
														</p>
													</div>
													<div className="flex items-center">
														<button
															type="button"
															className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
															onClick={() =>
																updateQuantity(item.menu_id, item.quantity - 1)
															}
														>
															<Minus className="h-3 w-3" />
														</button>
														<span className="w-8 text-center font-medium">
															{item.quantity}
														</span>
														<button
															type="button"
															className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
															onClick={() =>
																updateQuantity(item.menu_id, item.quantity + 1)
															}
														>
															<Plus className="h-3 w-3" />
														</button>
														<button
															type="button"
															className="ml-2 text-gray-400 transition-colors hover:text-red-500"
															onClick={() => removeItem(item.menu_id)}
														>
															<X className="h-4 w-4" />
														</button>
													</div>
												</div>
											))}
										</div>
									)}
									{/* Total */}
									{selectedItems.length > 0 && (
										<div className="mt-3 flex justify-between border-t pt-3 font-bold">
											<span>Total:</span>
											<span className="text-crispygo-rust">
												Rp {calculateTotal().toLocaleString()}
											</span>
										</div>
									)}
								</div>
								{/* Customer Information */}
								<div className="space-y-4">
									<div>
										<label
											htmlFor="full_name"
											className="mb-1 block text-sm font-medium text-gray-700"
										>
											Nama Lengkap *
										</label>
										<input
											type="text"
											id="full_name"
											name="full_name"
											value={orderForm.full_name}
											onChange={handleFormChange}
											className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
											required
										/>
									</div>
									<div>
										<label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={orderForm.email}
											onChange={handleFormChange}
											className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
											required
										/>
									</div>
									<div>
										<label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
											Nomor Telepon *
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={orderForm.phone}
											onChange={handleFormChange}
											className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
											required
										/>
									</div>
									<div>
										<label className="mb-1 block text-sm font-medium text-gray-700">
											Jenis Pesanan *
										</label>
										<div className="grid grid-cols-2 gap-3">
											<div
												className={`flex cursor-pointer items-center rounded-md border p-3 ${
													orderForm.order_type === "pengiriman"
														? "border-crispygo-rust bg-crispygo-cream"
														: "border-gray-300"
												}`}
												onClick={() => setOrderForm({ ...orderForm, order_type: "pengiriman" })}
											>
												<ShoppingBag
													className={`mr-2 h-5 w-5 ${
														orderForm.order_type === "pengiriman"
															? "text-crispygo-rust"
															: "text-gray-500"
													}`}
												/>
												<span>Pengiriman</span>
											</div>
											<div
												className={`flex cursor-pointer items-center rounded-md border p-3 ${
													orderForm.order_type === "ambil_di_tempat"
														? "border-crispygo-rust bg-crispygo-cream"
														: "border-gray-300"
												}`}
												onClick={() =>
													setOrderForm({ ...orderForm, order_type: "ambil_di_tempat" })
												}
											>
												<MapPin
													className={`mr-2 h-5 w-5 ${
														orderForm.order_type === "ambil_di_tempat"
															? "text-crispygo-rust"
															: "text-gray-500"
													}`}
												/>
												<span>Ambil di Tempat</span>
											</div>
										</div>
									</div>
									{orderForm.order_type === "pengiriman" && (
										<div>
											<label
												htmlFor="address"
												className="mb-1 block text-sm font-medium text-gray-700"
											>
												Alamat Pengiriman *
											</label>
											<textarea
												id="address"
												name="address"
												value={orderForm.address}
												onChange={handleFormChange}
												rows="3"
												className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
												required={orderForm.order_type === "pengiriman"}
											></textarea>
										</div>
									)}
									<div>
										<label htmlFor="notes" className="mb-1 block text-sm font-medium text-gray-700">
											Catatan Tambahan
										</label>
										<textarea
											id="notes"
											name="notes"
											value={orderForm.notes}
											onChange={handleFormChange}
											rows="2"
											className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
										></textarea>
									</div>
								</div>
								{/* Submit Button */}
								<button
									type="submit"
									disabled={selectedItems.length === 0}
									className={`mt-6 w-full rounded-md py-3 font-medium ${
										selectedItems.length === 0
											? "cursor-not-allowed bg-gray-300 text-gray-500"
											: "bg-crispygo-rust hover:bg-crispygo-orange text-white transition-colors"
									}`}
								>
									{selectedItems.length === 0 ? "Pilih Menu Terlebih Dahulu" : "Pesan Sekarang"}
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default OrderForm;
