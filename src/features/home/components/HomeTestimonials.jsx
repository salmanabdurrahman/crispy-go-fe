import { Star } from "lucide-react";
import { testimonials } from "../../../constants/homeData.js";

const HomeTestimonials = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="section-title">
					<h2>Apa Kata Mereka?</h2>
					<p className="mx-auto mt-4 max-w-3xl text-gray-600">Testimoni dari pelanggan setia kami</p>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="card p-6">
							<div className="mb-4 flex items-center">
								<div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-crispygo-cream">
									<span className="font-bold text-crispygo-rust">{testimonial.name.charAt(0)}</span>
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
