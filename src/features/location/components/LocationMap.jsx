import { useState } from "react";
import { MapPin, Phone, Clock, Search } from "lucide-react";
import { cities, outlets } from "../../../constants/locationData.js";

const LocationMap = () => {
	const [activeCity, setActiveCity] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	// Filter outlets based on active city and search query
	const filteredOutlets = outlets.filter(outlet => {
		const matchesCity = activeCity === "all" || outlet.city === activeCity;
		const matchesSearch =
			searchQuery === "" ||
			outlet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			outlet.address.toLowerCase().includes(searchQuery.toLowerCase());

		return matchesCity && matchesSearch;
	});

	return (
		<section className="section">
			<div className="container-custom">
				<div className="relative mb-12 h-[400px] overflow-hidden rounded-lg">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3953.3418525332468!2d110.4077242750047!3d-7.753519592265391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDUnMTIuNyJTIDExMMKwMjQnMzcuMSJF!5e0!3m2!1sid!2sid!4v1747384163132!5m2!1sid!2sid"
						className="h-full w-full border-0"
						allowFullScreen=""
						referrerPolicy="no-referrer-when-downgrade"
						loading="lazy"
					></iframe>
				</div>
				{/* Search & Filter */}
				<div className="mb-12">
					<div className="mb-6 flex flex-col gap-4 md:flex-row">
						<div className="relative flex-grow">
							<input
								type="text"
								placeholder="Cari outlet..."
								className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
							/>
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
						</div>
						<select
							className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
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
					{filteredOutlets.length > 0 ? (
						filteredOutlets.map(outlet => (
							<div key={outlet.id} className="card p-6">
								<h3 className="mb-4 text-xl font-bold">{outlet.name}</h3>
								<div className="space-y-3">
									<div className="flex items-start space-x-3">
										<MapPin className="mt-1 h-5 w-5 shrink-0 text-crispygo-rust" />
										<span className="text-gray-600">{outlet.address}</span>
									</div>
									<div className="flex items-center space-x-3">
										<Phone className="h-5 w-5 shrink-0 text-crispygo-rust" />
										<span className="text-gray-600">{outlet.phone}</span>
									</div>
									<div className="flex items-center space-x-3">
										<Clock className="h-5 w-5 shrink-0 text-crispygo-rust" />
										<span className="text-gray-600">{outlet.hours}</span>
									</div>
								</div>
								<div className="mt-6">
									<a
										href={`https://www.google.com/maps/place/?q=${outlet.coordinates.lat},${outlet.coordinates.lng}`}
										target="_blank"
										className="block w-full rounded-md bg-crispygo-cream py-2 text-center text-crispygo-dark transition-colors hover:bg-crispygo-orange hover:text-white"
									>
										Lihat di Peta
									</a>
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
