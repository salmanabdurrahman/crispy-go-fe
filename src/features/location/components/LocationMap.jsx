import { MapPin, Phone, Clock, Search } from "lucide-react";

const LocationMap = ({ searchQuery, setSearchQuery, activeCity, setActiveCity, outlets, cities }) => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="relative mb-12 h-[400px] overflow-hidden rounded-lg">
					<img
						src="/placeholder.svg?height=400&width=1200&text=Google+Map+with+Outlet+Locations"
						alt="CrispyGo Outlet Locations Map"
						className="h-full w-full object-cover"
					/>
				</div>
				{/* Search & Filter */}
				<div className="mb-12">
					<div className="mb-6 flex flex-col gap-4 md:flex-row">
						<div className="relative flex-grow">
							<input
								type="text"
								placeholder="Cari outlet..."
								className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2"
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
							/>
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
						</div>
						<select
							className="focus:ring-crispygo-orange rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
							value={activeCity}
							onChange={e => setActiveCity(e.target.value)}
						>
							{cities.map(city => (
								<option key={city.id} value={city.id}>
									{city.name}
								</option>
							))}
						</select>
					</div>
				</div>
				{/* Outlet List */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{outlets.length > 0 ? (
						outlets.map(outlet => (
							<div key={outlet.id} className="card p-6">
								<h3 className="mb-4 text-xl font-bold">{outlet.name}</h3>
								<div className="space-y-3">
									<div className="flex items-start space-x-3">
										<MapPin className="text-crispygo-rust mt-1 h-5 w-5 shrink-0" />
										<span className="text-gray-600">{outlet.address}</span>
									</div>
									<div className="flex items-center space-x-3">
										<Phone className="text-crispygo-rust h-5 w-5 shrink-0" />
										<span className="text-gray-600">{outlet.phone}</span>
									</div>
									<div className="flex items-center space-x-3">
										<Clock className="text-crispygo-rust h-5 w-5 shrink-0" />
										<span className="text-gray-600">{outlet.hours}</span>
									</div>
								</div>
								<div className="mt-6">
									<button className="bg-crispygo-cream text-crispygo-dark hover:bg-crispygo-orange w-full rounded-md py-2 transition-colors hover:text-white">
										Lihat di Peta
									</button>
								</div>
							</div>
						))
					) : (
						<div className="col-span-full py-12 text-center">
							<p className="text-lg text-gray-500">Tidak ada outlet yang ditemukan.</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default LocationMap;
