"use client";

import LocationHero from "../features/location/components/LocationHero.jsx";
import LocationCallToAction from "../features/location/components/LocationCallToAction.jsx";
import LocationMap from "../features/location/components/LocationMap.jsx";

const LocationPage = () => {
	return (
		<>
			<LocationHero />
			<LocationMap />
			<LocationCallToAction />
		</>
	);
};

export default LocationPage;
