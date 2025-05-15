import { Star } from "lucide-react";

const HomeTestimonials = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="section-title">
					<h2>Apa Kata Mereka?</h2>
					<p className="mx-auto mt-4 max-w-3xl text-gray-600">Testimoni dari pelanggan setia kami</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{[
						{
							name: "Budi Santoso",
							role: "Food Blogger",
							text: "CrispyGo adalah tempat favorit saya untuk menikmati ayam crispy. Teksturnya renyah di luar dan juicy di dalam. Bumbu yang digunakan juga sangat khas dan nikmat.",
						},
						{
							name: "Siti Rahma",
							role: "Customer",
							text: "Saya sudah mencoba berbagai tempat yang menyajikan makanan crispy, tapi CrispyGo memiliki cita rasa yang berbeda. Pelayanannya juga sangat ramah dan cepat.",
						},
						{
							name: "Andi Wijaya",
							role: "Food Critic",
							text: "CrispyGo berhasil mempertahankan kualitas dan konsistensi rasa di semua outletnya. Ini yang membuat mereka menonjol di antara kompetitor lainnya.",
						},
					].map((testimonial, index) => (
						<div key={index} className="card p-6">
							<div className="mb-4 flex items-center">
								<div className="bg-crispygo-cream mr-4 flex h-12 w-12 items-center justify-center rounded-full">
									<span className="text-crispygo-rust font-bold">{testimonial.name.charAt(0)}</span>
								</div>
								<div>
									<h4 className="font-bold">{testimonial.name}</h4>
									<p className="text-sm text-gray-600">{testimonial.role}</p>
								</div>
							</div>
							<p className="italic text-gray-600">"{testimonial.text}"</p>
							<div className="mt-4 flex">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeTestimonials;
