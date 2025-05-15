const AboutStory = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div>
						<h2 className="mb-6 text-3xl font-bold">Cerita Kami</h2>
						<div className="space-y-4">
							<p>
								CrispyGo didirikan pada tahun 2013 oleh sekelompok pecinta kuliner yang memiliki visi
								untuk menciptakan makanan crispy berkualitas tinggi dengan cita rasa autentik yang dapat
								dinikmati oleh semua kalangan.
							</p>
							<p>
								Berawal dari satu outlet kecil di Jakarta Selatan, CrispyGo terus berkembang dan kini
								telah memiliki lebih dari 50 outlet yang tersebar di berbagai kota di Indonesia.
							</p>
							<p>
								Kami berkomitmen untuk selalu menggunakan bahan-bahan berkualitas tinggi dan resep
								rahasia yang dikembangkan selama bertahun-tahun untuk menciptakan pengalaman kuliner
								yang tak terlupakan bagi pelanggan kami.
							</p>
							<p>
								Setiap gigitan dari produk CrispyGo adalah hasil dari dedikasi dan passion kami terhadap
								kualitas dan inovasi dalam dunia kuliner.
							</p>
						</div>
					</div>
					<div className="relative h-[400px] overflow-hidden rounded-lg">
						<img
							src="/placeholder.svg?height=400&width=600&text=Our+Story"
							alt="CrispyGo Story"
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutStory;
