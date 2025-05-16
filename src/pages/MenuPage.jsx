"use client";

import { useState } from "react";
import useMenus from "../features/menu/hooks/useMenus.js";
import MenuHero from "../features/menu/components/MenuHero.jsx";
import MenuList from "../features/menu/components/MenuList.jsx";
import MenuCallToAction from "../features/menu/components/MenuCallToAction.jsx";
import LoadingSpinner from "./../components/common/spinner/LoadingSpinner.jsx";

const MenuPage = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const { isLoading, data } = useMenus();

	if (isLoading) return <LoadingSpinner />;

	// Menu categories
	const categories = [
		{ id: "all", name: "Semua Menu" },
		{ id: "ayam", name: "Ayam" },
		{ id: "tahu", name: "Tahu" },
		{ id: "minuman", name: "Minuman" },
		{ id: "paket keluarga", name: "Paket Keluarga" },
		{ id: "paket hemat", name: "Paket Hemat" },
	];

	return (
		<>
			{/* Hero Section */}
			<MenuHero />
			{/* Menu Section */}
			<MenuList
				menuItems={data}
				categories={categories}
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
			/>
			{/* Call to Action */}
			<MenuCallToAction />
		</>
	);
};

export default MenuPage;
