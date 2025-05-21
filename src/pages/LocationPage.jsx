"use client";

import LocationHero from "../features/location/components/LocationHero.jsx";
import LocationCallToAction from "../features/location/components/LocationCallToAction.jsx";
import LocationMap from "../features/location/components/LocationMap.jsx";
import SEO from "../components/common/seo/SEO.jsx";

const LocationPage = () => {
	return (
		<>
			<SEO
				title="CrispyGo - Lokasi Outlet Terdekat"
				description="Cari tahu lokasi outlet CrispyGo terdekat! Tersedia di berbagai kota dengan layanan makan di tempat, takeaway, dan delivery. Yuk mampir!"
				keywords="lokasi crispygo, outlet ayam goreng, cabang crispygo, outlet makanan cepat saji, restoran ayam krispi"
			/>
			<LocationHero />
			<LocationMap />
			<LocationCallToAction />
		</>
	);
};

export default LocationPage;
