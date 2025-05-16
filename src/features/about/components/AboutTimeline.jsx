import { timelineData } from "../../../constants/aboutData.js";

const AboutTimeline = () => {
	return (
		<section className="section bg-crispygo-cream">
			<div className="container-custom">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2 className="text-crispygo-dark">Perjalanan CrispyGo</h2>
					<p className="mt-4 text-crispygo-dark/80">
						Melihat kembali perjalanan kami dalam membangun brand CrispyGo
					</p>
				</div>
				<div className="relative">
					{/* Timeline Line */}
					<div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-crispygo-rust"></div>
					{/* Timeline Items */}
					<div className="grid grid-cols-1 gap-12">
						{timelineData.map((timeline, index) =>
							timeline.position === "left" ? (
								<div className="relative" key={index}>
									<div className="flex items-center justify-center">
										<div className="z-10 rounded-full bg-crispygo-rust px-6 py-2 font-bold text-white">
											{timeline.year}
										</div>
									</div>
									<div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
										<div className="rounded-lg bg-white p-6 shadow-md md:text-right">
											<h3 className="mb-2 text-xl font-bold">{timeline.title}</h3>
											<p className="text-gray-600">{timeline.description}</p>
										</div>
										<div className="hidden md:block"></div>
									</div>
								</div>
							) : (
								<div className="relative" key={index}>
									<div className="flex items-center justify-center">
										<div className="z-10 rounded-full bg-crispygo-rust px-6 py-2 font-bold text-white">
											{timeline.year}
										</div>
									</div>
									<div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
										<div className="hidden md:block"></div>
										<div className="rounded-lg bg-white p-6 shadow-md">
											<h3 className="mb-2 text-xl font-bold">{timeline.title}</h3>
											<p className="text-gray-600">{timeline.description}</p>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutTimeline;
