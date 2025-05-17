import { categories } from "../../../constants/menuData.js";

const OrderCategoryFilter = ({ activeCategory, setActiveCategory }) => {
	return (
		<div className="mb-8 overflow-x-auto">
			<div className="flex space-x-2 pb-2">
				{categories.map(category => (
					<button
						key={category.id}
						className={`whitespace-nowrap rounded-full px-4 py-2 ${
							activeCategory === category.id
								? "bg-crispygo-rust text-white"
								: "border border-gray-200 bg-white hover:border-crispygo-orange hover:bg-crispygo-cream"
						} transition-colors`}
						onClick={() => setActiveCategory(category.id)}
					>
						{category.name}
					</button>
				))}
			</div>
		</div>
	);
};

export default OrderCategoryFilter;
