import { Link } from "react-router-dom";

const AboutCallToAction = () => {
	return (
		<section className="section bg-crispygo-rust text-white">
			<div className="container-custom">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-white">Bergabunglah dengan Keluarga CrispyGo</h2>
					<p className="mb-8 mt-4 text-white/90">
						Kami selalu mencari talenta-talenta baru untuk bergabung dengan tim kami
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link to="/careers" className="btn text-crispygo-rust hover:bg-crispygo-cream bg-white">
							Lihat Karir
						</Link>
						<Link
							to="/contact"
							className="btn hover:text-crispygo-rust border-2 border-white text-white hover:bg-white"
						>
							Hubungi Kami
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutCallToAction;
