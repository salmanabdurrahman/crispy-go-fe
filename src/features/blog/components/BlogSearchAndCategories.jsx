import { Search } from "lucide-react";

const BlogSearchAndCategories = ({ searchQuery, setSearchQuery, activeCategory, setActiveCategory, categories }) => {
	return (
		<div className="mb-10">
			<div className="mb-6 flex flex-col gap-4 md:flex-row">
				<div className="relative flex-grow">
					<input
						type="text"
						placeholder="Cari artikel..."
						className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
				</div>
				<select
					className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
					value={activeCategory}
					onChange={e => setActiveCategory(e.target.value)}
				>
					<option value="all">Semua Kategori</option>
					{categories.slice(1).map(category => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</div>
			<div className="flex flex-wrap gap-2">
				{categories.map(category => (
					<button
						key={category.id}
						className={`rounded-full px-4 py-2 text-sm ${
							category.id === activeCategory
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

export default BlogSearchAndCategories;
