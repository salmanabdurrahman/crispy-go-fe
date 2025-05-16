import { Link } from "react-router-dom";

const BlogSidebar = ({ categories, data }) => {
	return (
		<div className="lg:w-1/3">
			{/* Categories */}
			<div className="card mb-8 p-6">
				<h3 className="mb-4 text-xl font-bold">Kategori</h3>
				<ul className="space-y-2">
					{categories.map(category => (
						<li key={category.id}>
							<Link
								to={`/blog/category/${category.id}`}
								className="flex items-center justify-between py-2 transition-colors hover:text-crispygo-rust"
							>
								<span>{category.name}</span>
								<span className="rounded-full bg-crispygo-cream px-2 py-1 text-sm text-crispygo-dark">
									{category.id === "all"
										? data.length
										: data.filter(article => article.type === category.id).length}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BlogSidebar;
