import { Link } from "react-router-dom";
import { STORAGE_URL } from "../../../constants/appConfig.js";
import { Star } from "lucide-react";

const MenuPromo = ({ menuItems, activeCategory }) => {
	return (
		<div className="mb-12">
			<h2 className="mb-6 text-2xl font-bold">Promo Spesial</h2>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{menuItems
					.filter(item => item.isPromo && (activeCategory === "all" || item.category === activeCategory))
					.map(item => (
						<div key={item.id} className="card group overflow-hidden">
							<div className="relative">
								<div className="absolute right-0 top-0 z-10 rounded-bl-lg bg-crispygo-rust px-3 py-1 text-white">
									Promo
								</div>
								<div className="relative h-60">
									<img
										src={`/placeholder.svg?height=240&width=400&text=${item.name}`}
										alt={item.name}
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							</div>
							<div className="p-6">
								<div className="mb-2 flex items-center justify-between">
									<h3 className="text-xl font-bold">{item.name}</h3>
									<span className="font-bold text-crispygo-rust">
										Rp {item.price.toLocaleString()}
									</span>
								</div>
								<p className="mb-4 text-gray-600">{item.description}</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`h-4 w-4 ${i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
											/>
										))}
										<span className="ml-2 text-sm text-gray-600">
											{item.rating} ({item.reviews})
										</span>
									</div>
									<Link to="#" className="font-medium text-crispygo-rust hover:underline">
										Detail
									</Link>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default MenuPromo;
