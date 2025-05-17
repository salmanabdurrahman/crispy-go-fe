const AboutStory = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div>
						<h2 className="mb-6 text-3xl font-bold">Cerita Kami</h2>
						<div className="space-y-4">
							<p>
								CrispyGo didirikan pada tahun 2015 di Yogyakarta oleh sekelompok pecinta kuliner yang
								memiliki visi untuk menghadirkan makanan crispy berkualitas tinggi dengan cita rasa
								autentik khas Indonesia.
							</p>
							<p>
								Berawal dari satu outlet sederhana di jantung kota Jogja, CrispyGo terus tumbuh dan
								mendapat tempat di hati para pecinta kuliner. Kini, kami telah berkembang menjadi
								jaringan dengan 10 outlet yang tersebar di berbagai kota besar di Indonesia.
							</p>
							<p>
								Komitmen kami adalah selalu menggunakan bahan-bahan berkualitas tinggi dan resep rahasia
								yang dikembangkan secara konsisten selama bertahun-tahun untuk memberikan pengalaman
								kuliner yang tak terlupakan.
							</p>
							<p>
								Setiap gigitan dari produk CrispyGo adalah bukti nyata dari dedikasi kami terhadap rasa,
								kualitas, dan inovasi dalam dunia kuliner.
							</p>
						</div>
					</div>
					<div className="relative h-[400px] overflow-hidden rounded-lg">
						<img
							src="/placeholder.svg?height=400&width=600&text=Our+Story"
							alt="CrispyGo Story"
							className="h-full w-full object-cover"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutStory;
