const MenuCategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
	return (
		<div className="mb-12 flex flex-wrap justify-center gap-3">
			{categories.map(category => (
				<button
					key={category.id}
					className={`rounded-full px-4 py-2 ${
						activeCategory === category.id
							? "bg-crispygo-rust text-white"
							: "border border-gray-200 bg-white hover:border-crispygo-orange hover:bg-crispygo-cream"
					} transition-colors focus:outline-none focus:ring-2 focus:ring-crispygo-orange`}
					onClick={() => setActiveCategory(category.id)}
				>
					{category.name}
				</button>
			))}
		</div>
	);
};

export default MenuCategoryFilter;
