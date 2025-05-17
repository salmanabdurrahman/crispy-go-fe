import { stats } from "../../../constants/homeData.js";

const HomeStats = () => {
	return (
		<section className="section bg-crispygo-cream">
			<div className="container-custom">
				<div className="section-title">
					<h2 className="text-crispygo-dark">CrispyGo dengan Angka</h2>
					<p className="mx-auto mt-4 max-w-3xl text-crispygo-dark/80">
						Perjalanan kami dalam menyajikan kelezatan crispy berkualitas tinggi
					</p>
				</div>
				<div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
					{stats.map((stat, index) => (
						<div className="rounded-lg bg-white p-6 shadow-md" key={index}>
							<h3 className="text-4xl font-bold text-crispygo-rust">{stat.value}</h3>
							<p className="mt-2 text-crispygo-dark">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeStats;
