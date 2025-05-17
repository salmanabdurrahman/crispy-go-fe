import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import useBlogs from "./../../blog/hooks/useBlogs.js";
import LoadingSpinner from "../../../components/common/spinner/LoadingSpinner.jsx";
import { STORAGE_URL } from "../../../constants/appConfig.js";
import { categories } from "../../../constants/blogData.js";

const HomeBlog = () => {
	const { isLoading, data } = useBlogs();

	if (isLoading) return <LoadingSpinner />;

	return (
		<section className="section">
			<div className="container-custom">
				<div className="section-title">
					<h2>Blog & Artikel</h2>
					<p className="mx-auto mt-4 max-w-3xl text-gray-600">
						Informasi terbaru seputar CrispyGo dan dunia kuliner
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					{data.slice(0, 3).map((article, index) => (
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
									<span className="text-sm text-gray-600">Oleh Admin</span>
									<Link
										to={`/blogs/${article.slug}`}
										className="flex items-center font-medium text-crispygo-rust hover:underline"
									>
										Baca <ChevronRight className="ml-1 h-4 w-4" />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-12 text-center">
					<Link to="/blogs" className="btn btn-primary">
						Lihat Semua Artikel
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeBlog;
