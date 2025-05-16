import { Calendar, User, Tag } from "lucide-react";
import formatDate from "../../../utils/formatDate.js";

const BlogDetailHero = ({ article }) => {
	const articleCategory = article.type.slice(0, 1).toUpperCase() + article.type.slice(1);

	return (
		<section className="bg-crispygo-dark py-16 text-white">
			<div className="container-custom">
				<div className="mx-auto max-w-3xl text-center">
					<div className="mb-4 flex items-center justify-center gap-4">
						<span className="flex items-center text-sm">
							<Calendar className="mr-1 h-4 w-4" /> {formatDate(article.published_at)}
						</span>
						<span className="flex items-center text-sm">
							<User className="mr-1 h-4 w-4" /> Admin
						</span>
						<span className="flex items-center text-sm">
							<Tag className="mr-1 h-4 w-4" /> {articleCategory}
						</span>
					</div>
					<h1 className="mb-4 font-heading text-3xl font-bold md:text-4xl">{article.title}</h1>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailHero;
