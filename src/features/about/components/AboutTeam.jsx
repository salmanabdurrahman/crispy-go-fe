const AboutTeam = () => {
	return (
		<section className="section bg-gray-50">
			<div className="container-custom">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2>Tim Kami</h2>
					<p className="mt-4 text-gray-600">Kenali orang-orang hebat di balik kesuksesan CrispyGo</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
					{[
						{ name: "Budi Santoso", position: "Founder & CEO" },
						{ name: "Siti Rahma", position: "Head of Operations" },
						{ name: "Andi Wijaya", position: "Head of Marketing" },
						{ name: "Dewi Putri", position: "Head of Product Development" },
						{ name: "Rudi Hartono", position: "Head of Finance" },
						{ name: "Nina Sari", position: "Head of Human Resources" },
						{ name: "Joko Susilo", position: "Head of Supply Chain" },
						{ name: "Maya Indah", position: "Head of Customer Experience" },
					].map((member, index) => (
						<div key={index} className="card group overflow-hidden">
							<div className="relative h-64">
								<img
									src={`/placeholder.svg?height=256&width=256&text=${member.name}`}
									alt={member.name}
									className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
							</div>
							<div className="p-4 text-center">
								<h3 className="text-lg font-bold">{member.name}</h3>
								<p className="text-gray-600">{member.position}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutTeam;
