"use client";

import { useState } from "react";

import LocationHero from "../features/location/components/LocationHero.jsx";
import LocationCallToAction from "../features/location/components/LocationCallToAction.jsx";
import LocationMap from "../features/location/components/LocationMap.jsx";
import { cities, outlets } from "../constants/locationData.js";

const LocationPage = () => {
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
		<>
			{/* Hero Section */}
			<LocationHero />
			{/* Map Section */}
			<LocationMap
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				activeCity={activeCity}
				setActiveCity={setActiveCity}
				outlets={filteredOutlets}
				cities={cities}
			/>
			{/* Call to Action */}
			<LocationCallToAction />
		</>
	);
};

export default LocationPage;
