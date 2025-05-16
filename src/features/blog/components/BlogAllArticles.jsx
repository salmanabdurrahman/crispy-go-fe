import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { STORAGE_URL } from "../../../constants/appConfig.js";

const BlogAllArticles = ({ filteredArticles, categories }) => {
	return (
		<div>
			<h2 className="mb-6 text-2xl font-bold">Baca Semua Artikel</h2>
			<div className="grid gap-6 md:grid-cols-2">
				{filteredArticles.length > 0 ? (
					filteredArticles.map((article, index) => (
						<div key={index} className="card group overflow-hidden">
							<div className="relative h-48">
								<img
									src={`${STORAGE_URL}/${article.image}`}
									alt={article.title}
									title={article.title}
									className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
							</div>
							<div className="p-6">
								<div className="mb-3 flex items-center gap-4">
									<span className="text-sm text-crispygo-rust">{article.date}</span>
									<span className="rounded-full bg-crispygo-cream px-2 py-1 text-sm text-crispygo-dark">
										{categories.find(c => c.id === article.type)?.name}
									</span>
								</div>
								<h3 className="mb-3 text-xl font-bold">{article.title}</h3>
								<p className="mb-4 line-clamp-2 text-gray-600">{article.excerpt}</p>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-600">By Admin</span>
									<Link
										to={`/blogs/${article.slug}`}
										className="flex items-center font-medium text-crispygo-rust hover:underline"
									>
										Baca <ChevronRight className="ml-1 h-4 w-4" />
									</Link>
								</div>
							</div>
						</div>
					))
				) : (
					<div className="col-span-full py-12 text-center">
						<p className="text-lg text-gray-500">Tidak ada artikel yang ditemukan.</p>
					</div>
				)}
			</div>
			{/* Pagination */}
			{/* <div className="mt-12 flex justify-center">
				<div className="flex items-center gap-2">
					<button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-crispygo-cream">
						&lt;
					</button>
					<button className="flex h-10 w-10 items-center justify-center rounded-md bg-crispygo-rust text-white">
						1
					</button>
					<button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-crispygo-cream">
						2
					</button>
					<button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-crispygo-cream">
						3
					</button>
					<button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-crispygo-cream">
						&gt;
					</button>
				</div>
			</div> */}
		</div>
	);
};

export default BlogAllArticles;
