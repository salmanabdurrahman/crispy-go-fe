const AboutPartners = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2>Partner Bisnis Kami</h2>
					<p className="mt-4 text-gray-600">Berkolaborasi dengan berbagai brand terkemuka</p>
				</div>
				<div className="grid grid-cols-2 items-center gap-6 md:grid-cols-5">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(partner => (
						<div key={partner} className="rounded-lg bg-white p-6 shadow-sm">
							<img
								src={`/placeholder.svg?height=80&width=160&text=Partner+${partner}`}
								alt={`Partner ${partner}`}
								className="mx-auto h-20 w-full object-contain"
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutPartners;
