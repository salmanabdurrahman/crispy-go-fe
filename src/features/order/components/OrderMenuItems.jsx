import { STORAGE_URL } from "../../../constants/appConfig.js";

const OrderMenuItems = ({ filteredMenuItems, addToCart }) => {
	return (
		<div className="grid gap-6 md:grid-cols-2">
			{filteredMenuItems.map(menuItem => (
				<div key={menuItem.id} className="card overflow-hidden">
					<div className="relative h-60">
						{menuItem.is_bestseller === 1 && (
							<div className="absolute right-0 top-0 z-10 rounded-bl-lg bg-crispygo-rust px-3 py-1 text-white">
								Best Seller
							</div>
						)}
						<img
							src={`${STORAGE_URL}/${menuItem.image}`}
							alt={menuItem.name}
							title={menuItem.name}
							className="h-full w-full object-cover"
							loading="lazy"
						/>
					</div>
					<div className="p-4">
						<div className="mb-2 flex items-center justify-between">
							<h3 className="text-lg font-bold">{menuItem.name}</h3>
							<span className="font-bold text-crispygo-rust">
								{Intl.NumberFormat("id-ID", {
									style: "currency",
									currency: "IDR",
								}).format(menuItem.price)}
							</span>
						</div>
						<p className="mb-4 line-clamp-2 text-sm text-gray-600">{menuItem.description}</p>
						<button
							className="w-full rounded-md bg-crispygo-orange py-2 text-white transition-colors hover:bg-crispygo-rust"
							onClick={() => addToCart(menuItem)}
						>
							Tambah ke Pesanan
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default OrderMenuItems;
