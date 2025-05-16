import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { STORAGE_URL } from "../../../constants/appConfig.js";

const BlogNewArticle = ({ newArticle, categories }) => {
	return (
		<div className="mb-12">
			<h2 className="mb-6 text-2xl font-bold">Artikel Terbaru</h2>
			<div className="card group overflow-hidden">
				<div className="relative h-80">
					<img
						src={`${STORAGE_URL}/${newArticle.image}`}
						alt={newArticle.title}
						title={newArticle.title}
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
					/>
				</div>
				<div className="p-6">
					<div className="mb-3 flex items-center gap-4">
						<span className="text-sm text-crispygo-rust">{newArticle.date}</span>
						<span className="rounded-full bg-crispygo-cream px-2 py-1 text-sm text-crispygo-dark">
							{categories.find(c => c.id === newArticle.type)?.name}
						</span>
					</div>
					<h3 className="mb-3 text-2xl font-bold">{newArticle.title}</h3>
					<p className="mb-4 text-gray-600">{newArticle.excerpt}</p>
					<div className="flex items-center justify-between">
						<span className="text-sm text-gray-600">By Admin</span>
						<Link
							to={`/blogs/${newArticle.slug}`}
							className="flex items-center font-medium text-crispygo-rust hover:underline"
						>
							Baca Selengkapnya <ChevronRight className="ml-1 h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogNewArticle;
