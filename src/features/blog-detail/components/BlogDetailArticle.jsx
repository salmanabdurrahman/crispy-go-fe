import { STORAGE_URL } from "../../../constants/appConfig.js";
import BlogDetailSidebar from "./BlogDetailSidebar.jsx";

const BlogDetailArticle = ({ article }) => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="flex flex-col gap-12 lg:flex-row">
					<div className="lg:w-2/3">
						<div className="relative mb-8 h-[400px] overflow-hidden rounded-lg">
							<img
								src={`${STORAGE_URL}/${article.image}`}
								alt={article.title}
								title={article.title}
								className="h-full w-full object-cover"
								loading="lazy"
							/>
						</div>
						<div
							className="prose prose-lg prose-slate dark:prose-invert prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-ol:marker:text-orange-500 prose-strong:text-orange-600 prose-em:italic prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-sm prose-code:font-mono prose-code:font-semibold prose-code:text-orange-600 prose-pre:bg-gray-100 prose-pre:px-4 prose-pre:py-2 prose-pre:rounded-lg prose-pre:text-sm prose-pre:font-mono prose-pre:font-semibold prose-pre:text-orange-600 mb-8 max-w-none leading-8"
							dangerouslySetInnerHTML={{ __html: article.content }}
						/>
					</div>
					<BlogDetailSidebar article={article} />
				</div>
			</div>
		</section>
	);
};

export default BlogDetailArticle;
