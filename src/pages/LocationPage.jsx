"use client";

import LocationHero from "../features/location/components/LocationHero.jsx";
import LocationCallToAction from "../features/location/components/LocationCallToAction.jsx";
import LocationMap from "../features/location/components/LocationMap.jsx";
import SEO from "../components/common/seo/SEO.jsx";

const LocationPage = () => {
	return (
		<>
			<SEO
				title="Crispy Go - Lokasi Outlet"
				description="Cari tahu lokasi outlet Crispy Go terdekat! Tersedia di berbagai kota dengan layanan makan di tempat, takeaway, dan delivery. Yuk mampir!"
				keywords="lokasi crispy go, outlet ayam goreng, cabang crispy go, outlet makanan cepat saji, restoran ayam krispi"
			/>
			<LocationHero />
			<LocationMap />
			<LocationCallToAction />
		</>
	);
};

export default LocationPage;
