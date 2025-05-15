const HomeStory = () => {
	return (
		<section className="section bg-crispygo-cream">
			<div className="container-custom">
				<div className="section-title">
					<h2 className="text-crispygo-dark">Perjalanan CrispyGo</h2>
					<p className="text-crispygo-dark/80 mx-auto mt-4 max-w-3xl">
						Melihat kembali perjalanan kami dalam membangun brand CrispyGo
					</p>
				</div>
				<div className="relative">
					{/* Timeline Line */}
					<div className="bg-crispygo-rust absolute left-1/2 h-full w-1 -translate-x-1/2 transform"></div>
					{/* Timeline Items */}
					<div className="grid grid-cols-1 gap-12">
						{/* 2013 */}
						<div className="relative">
							<div className="flex items-center justify-center">
								<div className="bg-crispygo-rust z-10 rounded-full px-6 py-2 font-bold text-white">
									2013
								</div>
							</div>
							<div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
								<div className="rounded-lg bg-white p-6 shadow-md md:text-right">
									<h3 className="mb-2 text-xl font-bold">Awal Mula</h3>
									<p className="text-gray-600">
										CrispyGo didirikan dengan satu outlet kecil di Jakarta Selatan dengan konsep
										makanan crispy berkualitas.
									</p>
								</div>
								<div className="hidden md:block"></div>
							</div>
						</div>
						{/* 2015 */}
						<div className="relative">
							<div className="flex items-center justify-center">
								<div className="bg-crispygo-rust z-10 rounded-full px-6 py-2 font-bold text-white">
									2015
								</div>
							</div>
							<div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
								<div className="hidden md:block"></div>
								<div className="rounded-lg bg-white p-6 shadow-md">
									<h3 className="mb-2 text-xl font-bold">Ekspansi Pertama</h3>
									<p className="text-gray-600">
										Membuka 5 outlet baru di berbagai lokasi strategis di Jakarta dan Bandung.
									</p>
								</div>
							</div>
						</div>
						{/* 2018 */}
						<div className="relative">
							<div className="flex items-center justify-center">
								<div className="bg-crispygo-rust z-10 rounded-full px-6 py-2 font-bold text-white">
									2018
								</div>
							</div>
							<div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
								<div className="rounded-lg bg-white p-6 shadow-md md:text-right">
									<h3 className="mb-2 text-xl font-bold">Inovasi Menu</h3>
									<p className="text-gray-600">
										Meluncurkan 15 varian menu baru dan mendapatkan penghargaan "Best Crispy Food"
										di Jakarta Food Festival.
									</p>
								</div>
								<div className="hidden md:block"></div>
							</div>
						</div>
						{/* 2021 */}
						<div className="relative">
							<div className="flex items-center justify-center">
								<div className="bg-crispygo-rust z-10 rounded-full px-6 py-2 font-bold text-white">
									2021
								</div>
							</div>
							<div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
								<div className="hidden md:block"></div>
								<div className="rounded-lg bg-white p-6 shadow-md">
									<h3 className="mb-2 text-xl font-bold">Ekspansi Nasional</h3>
									<p className="text-gray-600">
										Membuka outlet di 10 kota besar di Indonesia dan meluncurkan layanan delivery
										online.
									</p>
								</div>
							</div>
						</div>
						{/* 2023 */}
						<div className="relative">
							<div className="flex items-center justify-center">
								<div className="bg-crispygo-rust z-10 rounded-full px-6 py-2 font-bold text-white">
									2023
								</div>
							</div>
							<div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
								<div className="rounded-lg bg-white p-6 shadow-md md:text-right">
									<h3 className="mb-2 text-xl font-bold">Saat Ini</h3>
									<p className="text-gray-600">
										Memiliki lebih dari 50 outlet di seluruh Indonesia dan menjadi salah satu brand
										makanan crispy terkemuka.
									</p>
								</div>
								<div className="hidden md:block"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeStory;
