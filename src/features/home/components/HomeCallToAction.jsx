import { Link } from "react-router-dom";

const HomeCallToAction = () => {
	return (
		<section className="section bg-crispygo-rust text-white">
			<div className="container-custom">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-white">Nikmati Kelezatan CrispyGo Sekarang Juga!</h2>
					<p className="mb-8 mt-4 text-white/90">
						Pesan sekarang dan rasakan sensasi renyah dan gurih yang tak terlupakan. Tersedia untuk dine-in,
						take away, atau delivery.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link to="/order" className="btn bg-white text-crispygo-rust hover:bg-crispygo-cream">
							Pesan Online
						</Link>
						<Link
							to="/locations"
							className="btn border-2 border-white text-white hover:bg-white hover:text-crispygo-rust"
						>
							Kunjungi Outlet
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeCallToAction;
