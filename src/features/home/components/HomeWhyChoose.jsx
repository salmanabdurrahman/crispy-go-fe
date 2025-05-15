import { Award, Truck, ThumbsUp } from "lucide-react";

const HomeWhyChoose = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="section-title">
					<h2>Mengapa Memilih CrispyGo?</h2>
					<p className="mx-auto mt-4 max-w-3xl text-gray-600">
						Kami berkomitmen untuk memberikan pengalaman kuliner terbaik dengan standar kualitas tertinggi
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					<div className="card p-6">
						<div className="bg-crispygo-cream mb-4 flex h-14 w-14 items-center justify-center rounded-full">
							<ThumbsUp className="text-crispygo-rust h-7 w-7" />
						</div>
						<h3 className="mb-3 text-xl font-bold">Kualitas Premium</h3>
						<p className="text-gray-600">
							Kami hanya menggunakan bahan-bahan berkualitas tinggi dan segar untuk setiap produk kami.
						</p>
					</div>
					<div className="card p-6">
						<div className="bg-crispygo-cream mb-4 flex h-14 w-14 items-center justify-center rounded-full">
							<Award className="text-crispygo-rust h-7 w-7" />
						</div>
						<h3 className="mb-3 text-xl font-bold">Resep Autentik</h3>
						<p className="text-gray-600">
							Resep rahasia yang dikembangkan selama bertahun-tahun untuk menciptakan cita rasa yang unik.
						</p>
					</div>
					<div className="card p-6">
						<div className="bg-crispygo-cream mb-4 flex h-14 w-14 items-center justify-center rounded-full">
							<Truck className="text-crispygo-rust h-7 w-7" />
						</div>
						<h3 className="mb-3 text-xl font-bold">Pengiriman Cepat</h3>
						<p className="text-gray-600">
							Layanan pengiriman yang cepat dan efisien untuk memastikan makanan tetap hangat dan renyah.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeWhyChoose;
