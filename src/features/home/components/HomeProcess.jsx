import { process } from "../../../constants/homeData.js";

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
				<div className="grid gap-6 md:grid-cols-5">
					{process.map((step, index) => (
						<div className="text-center" key={index}>
							<div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-crispygo-orange">
								<span className="text-2xl font-bold">{step.number}</span>
							</div>
							<h3 className="mb-2 text-xl font-bold">{step.title}</h3>
							<p className="text-white/80">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeProcess;
