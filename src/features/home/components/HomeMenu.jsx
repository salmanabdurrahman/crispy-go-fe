import { Link } from "react-router-dom";
import { Star, ChevronRight } from "lucide-react";

const HomeMenu = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="section-title">
					<h2>Menu Favorit Kami</h2>
					<p className="mx-auto mt-4 max-w-3xl text-gray-600">
						Pilihan menu terfavorit yang paling banyak disukai oleh pelanggan kami
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					{[1, 2, 3].map(item => (
						<div key={item} className="card group overflow-hidden">
							<div className="relative h-60">
								<img
									src={`/placeholder.svg?height=240&width=400&text=Menu+${item}`}
									alt={`Menu Favorit ${item}`}
									className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<div className="mb-2 flex items-center justify-between">
									<h3 className="text-xl font-bold">Crispy Chicken {item}</h3>
									<span className="font-bold text-crispygo-rust">Rp 45.000</span>
								</div>
								<p className="mb-4 text-gray-600">
									Ayam crispy dengan bumbu rahasia dan tekstur renyah yang sempurna.
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
										))}
										<span className="ml-2 text-sm text-gray-600">4.9 (120)</span>
									</div>
									<Link
										to="/menus"
										className="flex items-center font-medium text-crispygo-rust hover:underline"
									>
										Detail <ChevronRight className="ml-1 h-4 w-4" />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-12 text-center">
					<Link to="/menus" className="btn btn-primary">
						Lihat Semua Menu
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeMenu;
