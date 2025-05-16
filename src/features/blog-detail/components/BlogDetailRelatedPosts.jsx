import { Link } from "react-router-dom";
import { STORAGE_URL } from "../../../constants/appConfig.js";

const BlogDetailRelatedPosts = ({ relatedPosts }) => {
	return (
		<div className="card mb-8 p-6">
			<h3 className="mb-4 text-xl font-bold">Artikel Terkait</h3>
			<div className="space-y-6">
				{relatedPosts.length > 0 ? (
					relatedPosts.map((post, index) => (
						<div key={index} className="flex gap-4">
							<div className="relative h-20 w-20 flex-shrink-0">
								<img
									src={`${STORAGE_URL}/${post.image}`}
									alt={post.title}
									title={post.title}
									className="h-full w-full rounded-md object-cover"
									loading="lazy"
								/>
							</div>
							<div>
								<h5 className="mb-1 line-clamp-2 font-bold">
									<Link
										to={`/blogs/${post.slug}`}
										className="transition-colors hover:text-crispygo-rust"
									>
										{post.title}
									</Link>
								</h5>
								<span className="text-sm text-crispygo-rust">{post.date}</span>
							</div>
						</div>
					))
				) : (
					<div className="col-span-full py-12 text-center">
						<p className="text-lg text-gray-500">Tidak ada artikel yang ditemukan.</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default BlogDetailRelatedPosts;
