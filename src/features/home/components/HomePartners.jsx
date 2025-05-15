const HomePartners = () => {
	return (
		<section className="section bg-gray-50">
			<div className="container-custom">
				<div className="section-title">
					<h2>Partner Bisnis Kami</h2>
					<p className="mx-auto mt-4 max-w-3xl text-gray-600">
						Berkolaborasi dengan berbagai brand terkemuka
					</p>
				</div>
				<div className="grid grid-cols-2 items-center gap-6 md:grid-cols-5">
					{[1, 2, 3, 4, 5].map(partner => (
						<div key={partner} className="rounded-lg bg-white p-6 shadow-sm">
							<img
								src={`/placeholder.svg?height=80&width=160&text=Partner+${partner}`}
								alt={`Partner ${partner}`}
								className="mx-auto h-20 w-full object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomePartners;
