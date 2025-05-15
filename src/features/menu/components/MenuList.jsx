import { Link } from "react-router-dom";
import { Star, Filter } from "lucide-react";

const MenuList = ({ menuItems, categories, activeCategory, setActiveCategory }) => {
	return (
		<section className="section">
			<div className="container-custom">
				{/* Category Filter */}
				<div className="mb-12 flex flex-wrap justify-center gap-3">
					{categories.map(category => (
						<button
							key={category.id}
							className={`rounded-full px-4 py-2 ${
								activeCategory === category.id
									? "bg-crispygo-rust text-white"
									: "hover:bg-crispygo-cream hover:border-crispygo-orange border border-gray-200 bg-white"
							} focus:ring-crispygo-orange transition-colors focus:outline-none focus:ring-2`}
							onClick={() => setActiveCategory(category.id)}
						>
							{category.name}
						</button>
					))}
				</div>
				{/* Mobile Filter Button */}
				<div className="mb-6 md:hidden">
					<button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-3 shadow-sm">
						<Filter className="h-5 w-5" />
						<span>Filter Menu</span>
					</button>
				</div>
				{/* Promo Section */}
				<div className="mb-12">
					<h2 className="mb-6 text-2xl font-bold">Promo Spesial</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{menuItems
							.filter(
								item => item.isPromo && (activeCategory === "all" || item.category === activeCategory)
							)
							.map(item => (
								<div key={item.id} className="card group overflow-hidden">
									<div className="relative">
										<div className="bg-crispygo-rust absolute right-0 top-0 z-10 rounded-bl-lg px-3 py-1 text-white">
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
											<span className="text-crispygo-rust font-bold">
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
											<Link to="#" className="text-crispygo-rust font-medium hover:underline">
												Detail
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
				{/* All Menu Items */}
				<div>
					<h2 className="mb-6 text-2xl font-bold">Semua Menu</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{menuItems
							.filter(item => activeCategory === "all" || item.category === activeCategory)
							.map(item => (
								<div key={item.id} className="card group overflow-hidden">
									{item.isPromo && (
										<div className="bg-crispygo-rust absolute right-0 top-0 z-10 rounded-bl-lg px-3 py-1 text-white">
											Promo
										</div>
									)}
									<div className="relative h-60">
										<img
											src={`/placeholder.svg?height=240&width=400&text=${item.name}`}
											alt={item.name}
											className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										/>
									</div>
									<div className="p-6">
										<div className="mb-2 flex items-center justify-between">
											<h3 className="text-xl font-bold">{item.name}</h3>
											<span className="text-crispygo-rust font-bold">
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
											<Link to="#" className="text-crispygo-rust font-medium hover:underline">
												Detail
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MenuList;
