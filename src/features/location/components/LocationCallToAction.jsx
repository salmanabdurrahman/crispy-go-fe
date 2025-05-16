import { Link } from "react-router-dom";

const LocationCallToAction = () => {
	return (
		<section className="section bg-crispygo-rust text-white">
			<div className="container-custom">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-white">Ingin Memesan?</h2>
					<p className="mb-8 mt-4 text-white/90">
						Pesan sekarang dan nikmati kelezatan CrispyGo. Tersedia untuk dine-in, take away, atau delivery.
					</p>
					<Link to="/order" className="btn bg-white text-crispygo-rust hover:bg-crispygo-cream">
						Pesan Online
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LocationCallToAction;
