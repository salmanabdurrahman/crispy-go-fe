const HomeAwards = () => {
	return (
		<section className="section bg-crispygo-dark text-white">
			<div className="container-custom">
				<div className="section-title">
					<h2 className="text-white">Penghargaan Kami</h2>
					<p className="mx-auto mt-4 max-w-3xl text-white/80">
						Pengakuan atas kualitas dan inovasi kami dalam industri kuliner
					</p>
				</div>
				<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
					{[1, 2, 3, 4].map(award => (
						<div key={award} className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
							<div className="mx-auto mb-4 h-16 w-16">
								<img
									src={`/placeholder.svg?height=64&width=64&text=Award`}
									alt={`Award ${award}`}
									className="h-16 w-16 object-contain"
								/>
							</div>
							<h3 className="mb-1 text-lg font-bold">Best Crispy Food {award}</h3>
							<p className="text-sm text-white/80">Jakarta Food Festival 202{award}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeAwards;
