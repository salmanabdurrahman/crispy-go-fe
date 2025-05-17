import { Link } from "react-router-dom";
import useMenus from "./../../menu/hooks/useMenus";
import LoadingSpinner from "./../../../components/common/spinner/LoadingSpinner.jsx";
import { STORAGE_URL } from "../../../constants/appConfig.js";

const HomeMenu = () => {
	const { isLoading, data } = useMenus();

	if (isLoading) return <LoadingSpinner />;

	const menuItems = data.filter(item => item.is_bestseller === 1).slice(0, 3);

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
					{menuItems.map(item => (
						<div key={item.id} className="card group overflow-hidden">
							<div className="relative h-60">
								{item.is_bestseller === 1 && (
									<div className="absolute right-0 top-0 z-10 rounded-bl-lg bg-crispygo-rust px-3 py-1 text-white">
										Best Seller
									</div>
								)}
								<img
									src={`${STORAGE_URL}/${item.image}`}
									alt={item.name}
									title={item.name}
									className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
							</div>
							<div className="p-6">
								<div className="mb-2 flex items-center justify-between">
									<h3 className="text-xl font-bold">{item.name}</h3>
									<span className="font-bold text-crispygo-rust">
										{Intl.NumberFormat("id-ID", {
											style: "currency",
											currency: "IDR",
										}).format(item.price)}
									</span>
								</div>
								<p className="mb-4 text-gray-600">{item.description}</p>
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
