import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import useMenus from "../hooks/useMenus.js";
import MenuCategoryFilter from "./MenuCategoryFilter";
import MenuPromo from "./MenuPromo.jsx";
import MenuAllItems from "./MenuAllItems.jsx";
import LoadingSpinner from "../../../components/common/spinner/LoadingSpinner.jsx";
import { categories } from "../../../constants/menuData.js";

const MenuList = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const { isLoading, data } = useMenus();

	if (isLoading) return <LoadingSpinner />;

	return (
		<section className="section">
			<div className="container-custom">
				{/* Category Filter */}
				<MenuCategoryFilter
					categories={categories}
					activeCategory={activeCategory}
					setActiveCategory={setActiveCategory}
				/>
				{/* Mobile Filter Button */}
				<div className="mb-6 md:hidden">
					<button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-3 shadow-sm">
						<Filter className="h-5 w-5" />
						<span>Filter Menu</span>
					</button>
				</div>
				{/* Promo Section */}
				{/* <MenuPromo menuItems={menuItems} activeCategory={activeCategory} /> */}
				{/* All Menu Items */}
				<MenuAllItems menuItems={data} activeCategory={activeCategory} />
			</div>
		</section>
	);
};

export default MenuList;
