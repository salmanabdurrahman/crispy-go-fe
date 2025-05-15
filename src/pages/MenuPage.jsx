"use client";

import { useState } from "react";
import MenuHero from "../features/menu/components/MenuHero.jsx";
import MenuList from "../features/menu/components/MenuList.jsx";
import MenuCallToAction from "../features/menu/components/MenuCallToAction.jsx";

const MenuPage = () => {
	// Menu categories
	const categories = [
		{ id: "all", name: "Semua Menu" },
		{ id: "chicken", name: "Chicken" },
		{ id: "seafood", name: "Seafood" },
		{ id: "sides", name: "Sides" },
		{ id: "beverages", name: "Minuman" },
		{ id: "desserts", name: "Dessert" },
	];

	// Menu items
	const menuItems = [
		{
			id: 1,
			name: "Original Crispy Chicken",
			category: "chicken",
			price: 45000,
			rating: 4.9,
			reviews: 120,
			description: "Ayam crispy dengan bumbu rahasia dan tekstur renyah yang sempurna.",
			isPromo: false,
		},
		{
			id: 2,
			name: "Spicy Crispy Chicken",
			category: "chicken",
			price: 48000,
			rating: 4.8,
			reviews: 98,
			description: "Ayam crispy dengan bumbu pedas khas CrispyGo yang menggugah selera.",
			isPromo: true,
		},
		{
			id: 3,
			name: "Honey Garlic Chicken",
			category: "chicken",
			price: 50000,
			rating: 4.7,
			reviews: 85,
			description: "Ayam crispy dengan saus madu dan bawang putih yang manis dan gurih.",
			isPromo: false,
		},
		{
			id: 4,
			name: "Crispy Fish Fillet",
			category: "seafood",
			price: 42000,
			rating: 4.6,
			reviews: 75,
			description: "Fillet ikan dengan lapisan tepung crispy yang renyah dan lezat.",
			isPromo: false,
		},
		{
			id: 5,
			name: "Crispy Shrimp",
			category: "seafood",
			price: 55000,
			rating: 4.8,
			reviews: 92,
			description: "Udang crispy dengan saus spesial yang menggugah selera.",
			isPromo: true,
		},
		{
			id: 6,
			name: "Crispy Calamari",
			category: "seafood",
			price: 48000,
			rating: 4.7,
			reviews: 68,
			description: "Cumi-cumi crispy dengan tekstur kenyal dan renyah yang sempurna.",
			isPromo: false,
		},
		{
			id: 7,
			name: "French Fries",
			category: "sides",
			price: 25000,
			rating: 4.5,
			reviews: 110,
			description: "Kentang goreng crispy dengan bumbu rahasia CrispyGo.",
			isPromo: false,
		},
		{
			id: 8,
			name: "Onion Rings",
			category: "sides",
			price: 28000,
			rating: 4.6,
			reviews: 95,
			description: "Cincin bawang bombay crispy yang renyah dan gurih.",
			isPromo: false,
		},
		{
			id: 9,
			name: "Mozzarella Sticks",
			category: "sides",
			price: 35000,
			rating: 4.8,
			reviews: 88,
			description: "Stik keju mozzarella yang crispy di luar dan meleleh di dalam.",
			isPromo: true,
		},
		{
			id: 10,
			name: "Iced Tea",
			category: "beverages",
			price: 15000,
			rating: 4.4,
			reviews: 65,
			description: "Teh dingin segar dengan pilihan rasa.",
			isPromo: false,
		},
		{
			id: 11,
			name: "Lemon Squash",
			category: "beverages",
			price: 18000,
			rating: 4.5,
			reviews: 72,
			description: "Minuman segar dari perasan lemon dengan soda.",
			isPromo: false,
		},
		{
			id: 12,
			name: "Crispy Chocolate Lava",
			category: "desserts",
			price: 32000,
			rating: 4.9,
			reviews: 105,
			description: "Dessert coklat dengan lapisan crispy dan lelehan coklat di dalamnya.",
			isPromo: false,
		},
	];

	const [activeCategory, setActiveCategory] = useState("all");

	return (
		<>
			{/* Hero Section */}
			<MenuHero />
			{/* Menu Section */}
			<MenuList
				menuItems={menuItems}
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
