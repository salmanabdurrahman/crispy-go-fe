const HomeStats = () => {
	return (
		<section className="section bg-crispygo-cream">
			<div className="container-custom">
				<div className="section-title">
					<h2 className="text-crispygo-dark">CrispyGo dengan Angka</h2>
					<p className="text-crispygo-dark/80 mx-auto mt-4 max-w-3xl">
						Perjalanan kami dalam menyajikan kelezatan crispy berkualitas tinggi
					</p>
				</div>
				<div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
					<div className="rounded-lg bg-white p-6 shadow-md">
						<h3 className="text-crispygo-rust text-4xl font-bold">50+</h3>
						<p className="text-crispygo-dark mt-2">Outlet di Indonesia</p>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-md">
						<h3 className="text-crispygo-rust text-4xl font-bold">100K+</h3>
						<p className="text-crispygo-dark mt-2">Pelanggan Puas</p>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-md">
						<h3 className="text-crispygo-rust text-4xl font-bold">30+</h3>
						<p className="text-crispygo-dark mt-2">Varian Menu</p>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-md">
						<h3 className="text-crispygo-rust text-4xl font-bold">10+</h3>
						<p className="text-crispygo-dark mt-2">Tahun Pengalaman</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeStats;
