import { ThumbsUp, Award, Truck, MessageCircleHeart } from "lucide-react";
import { features } from "../../../constants/homeData.js";

const HomeWhyChoose = () => {
	const icons = {
		ThumbsUp: <ThumbsUp className="h-8 w-8 text-crispygo-rust" />,
		Award: <Award className="h-8 w-8 text-crispygo-rust" />,
		Truck: <Truck className="h-8 w-8 text-crispygo-rust" />,
		MessageCircleHeart: <MessageCircleHeart className="h-8 w-8 text-crispygo-rust" />,
	};

	return (
		<section className="section">
			<div className="container-custom">
				<div className="section-title">
					<h2>Mengapa Memilih CrispyGo?</h2>
					<p className="mx-auto mt-4 max-w-3xl text-gray-600">
						Kami berkomitmen untuk memberikan pengalaman kuliner terbaik dengan standar kualitas tertinggi
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-4">
					{features.map((feature, index) => (
						<div className="card p-6 text-center" key={index}>
							<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-crispygo-cream">
								{icons[feature.icon]}
							</div>
							<h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeWhyChoose;
