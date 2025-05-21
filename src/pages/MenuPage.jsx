"use client";

import MenuHero from "../features/menu/components/MenuHero.jsx";
import MenuList from "../features/menu/components/MenuList.jsx";
import MenuCallToAction from "../features/menu/components/MenuCallToAction.jsx";
import SEO from "../components/common/seo/SEO.jsx";

const MenuPage = () => {
	return (
		<>
			<SEO
				title="CrispyGo - Menu Ayam Krispi Premium"
				description="Lihat semua menu CrispyGo! Dari ayam goreng krispi original, spicy, hingga paket hemat dengan nasi, saus, dan minuman. Cocok untuk makan sendiri atau rame-rame!"
				keywords="menu ayam crispy, ayam goreng pedas, paket ayam hemat, menu crispygo, crispy chicken menu, makanan cepat saji, menu makanan Indonesia"
			/>
			<MenuHero />
			<MenuList />
			<MenuCallToAction />
		</>
	);
};

export default MenuPage;
