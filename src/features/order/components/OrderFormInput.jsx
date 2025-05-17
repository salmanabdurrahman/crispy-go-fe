import { Minus, Plus, ShoppingBag, X, MapPin } from "lucide-react";

const OrderFormInput = ({
	handleSubmit,
	selectedItems,
	updateQuantity,
	removeItem,
	calculateTotal,
	orderForm,
	handleFormChange,
	setOrderForm,
	isLoadingOrder,
}) => {
	return (
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
							<div key={item.menu_id} className="flex items-center justify-between border-b pb-2">
								<div>
									<p className="font-medium">{item.name}</p>
									<p className="text-sm text-gray-500">
										{Intl.NumberFormat("id-ID", {
											style: "currency",
											currency: "IDR",
										}).format(item.price)}
									</p>
								</div>
								<div className="flex items-center">
									<button
										type="button"
										className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
										onClick={() => updateQuantity(item.menu_id, item.quantity - 1)}
									>
										<Minus className="h-3 w-3" />
									</button>
									<span className="w-8 text-center font-medium">{item.quantity}</span>
									<button
										type="button"
										className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
										onClick={() => updateQuantity(item.menu_id, item.quantity + 1)}
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
						<span className="text-crispygo-rust">Rp {calculateTotal().toLocaleString()}</span>
					</div>
				)}
			</div>
			{/* Customer Information */}
			<div className="space-y-4">
				<div>
					<label htmlFor="full_name" className="mb-1 block text-sm font-medium text-gray-700">
						Nama Lengkap <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="full_name"
						name="full_name"
						value={orderForm.full_name}
						onChange={handleFormChange}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
						required
					/>
				</div>
				<div>
					<label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
						Email <span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={orderForm.email}
						onChange={handleFormChange}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
						required
					/>
				</div>
				<div>
					<label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
						Nomor Telepon <span className="text-red-500">*</span>
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={orderForm.phone}
						onChange={handleFormChange}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
						required
					/>
				</div>
				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700">
						Jenis Pesanan <span className="text-red-500">*</span>
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
									orderForm.order_type === "pengiriman" ? "text-crispygo-rust" : "text-gray-500"
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
							onClick={() => setOrderForm({ ...orderForm, order_type: "ambil_di_tempat" })}
						>
							<MapPin
								className={`mr-2 h-5 w-5 ${
									orderForm.order_type === "ambil_di_tempat" ? "text-crispygo-rust" : "text-gray-500"
								}`}
							/>
							<span>Ambil di Tempat</span>
						</div>
					</div>
				</div>
				<div>
					<label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
						Alamat Pengiriman <span className="text-red-500">*</span>
					</label>
					<textarea
						id="address"
						name="address"
						value={orderForm.address}
						onChange={handleFormChange}
						rows="3"
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
						required={orderForm.order_type === "pengiriman"}
					></textarea>
				</div>
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
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
					></textarea>
				</div>
			</div>
			{/* Submit Button */}
			<button
				type="submit"
				disabled={selectedItems.length === 0 || isLoadingOrder}
				className={`mt-6 w-full rounded-md py-3 font-medium ${
					selectedItems.length === 0
						? "cursor-not-allowed bg-gray-300 text-gray-500"
						: "bg-crispygo-rust text-white transition-colors hover:bg-crispygo-orange"
				}`}
			>
				{isLoadingOrder
					? "Loading..."
					: selectedItems.length === 0
						? "Pilih Menu Terlebih Dahulu"
						: "Pesan Sekarang"}
			</button>
		</form>
	);
};

export default OrderFormInput;
