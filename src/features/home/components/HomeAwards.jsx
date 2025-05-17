import { Trophy, Sparkles, Flame, BadgeCheck } from "lucide-react";
import { awards } from "../../../constants/homeData.js";

const HomeAwards = () => {
	const icons = {
		trophy: <Trophy className="h-8 w-8 text-crispygo-rust" />,
		sparkles: <Sparkles className="h-8 w-8 text-crispygo-rust" />,
		flame: <Flame className="h-8 w-8 text-crispygo-rust" />,
		"badge-check": <BadgeCheck className="h-8 w-8 text-crispygo-rust" />,
	};

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
					{awards.map((award, index) => (
						<div key={index} className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
							<div className="mx-auto mb-4 h-16 w-16">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-crispygo-cream">
									{icons[award.icon]}
								</div>
							</div>
							<h3 className="mb-1 text-lg font-bold">{award.title}</h3>
							<p className="text-sm text-white/80">{award.event}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeAwards;
