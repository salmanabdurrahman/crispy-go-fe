const HomeProcess = () => {
	return (
		<section className="section bg-crispygo-dark text-white">
			<div className="container-custom">
				<div className="section-title">
					<h2 className="text-white">Proses Pembuatan</h2>
					<p className="mx-auto mt-4 max-w-3xl text-white/80">
						Setiap langkah dalam proses pembuatan kami dirancang untuk memastikan kualitas dan kelezatan
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-4">
					<div className="text-center">
						<div className="bg-crispygo-orange mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
							<span className="text-2xl font-bold">1</span>
						</div>
						<h3 className="mb-2 text-xl font-bold">Seleksi Bahan</h3>
						<p className="text-white/80">Pemilihan bahan berkualitas tinggi dari pemasok terpercaya</p>
					</div>
					<div className="text-center">
						<div className="bg-crispygo-orange mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
							<span className="text-2xl font-bold">2</span>
						</div>
						<h3 className="mb-2 text-xl font-bold">Marinasi</h3>
						<p className="text-white/80">Proses marinasi dengan bumbu rahasia selama minimal 6 jam</p>
					</div>
					<div className="text-center">
						<div className="bg-crispygo-orange mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
							<span className="text-2xl font-bold">3</span>
						</div>
						<h3 className="mb-2 text-xl font-bold">Coating</h3>
						<p className="text-white/80">Pelapisan dengan tepung khusus untuk tekstur renyah sempurna</p>
					</div>
					<div className="text-center">
						<div className="bg-crispygo-orange mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
							<span className="text-2xl font-bold">4</span>
						</div>
						<h3 className="mb-2 text-xl font-bold">Penggorengan</h3>
						<p className="text-white/80">Digoreng dengan minyak berkualitas pada suhu yang tepat</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeProcess;
