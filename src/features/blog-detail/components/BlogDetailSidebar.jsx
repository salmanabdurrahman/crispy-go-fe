import { useState } from "react";
import useBlogs from "./../../blog/hooks/useBlogs.js";
import LoadingSpinner from "../../../components/common/spinner/LoadingSpinner.jsx";
import BlogDetailSearch from "./BlogDetailSearch.jsx";
import BlogDetailRelatedPosts from "./BlogDetailRelatedPosts.jsx";

const BlogDetailSidebar = ({ article }) => {
	const [query, setQuery] = useState("");
	const { isLoading, data } = useBlogs();

	if (isLoading) return <LoadingSpinner />;

	const relatedPosts = data
		.filter(
			post =>
				post.id !== article.id &&
				(query.trim() === "" ||
					post.title.toLowerCase().includes(query.toLowerCase()) ||
					post.excerpt.toLowerCase().includes(query.toLowerCase()))
		)
		.slice(0, 4);

	return (
		<div className="lg:w-1/3">
			<BlogDetailSearch query={query} setQuery={setQuery} />
			<BlogDetailRelatedPosts relatedPosts={relatedPosts} />
		</div>
	);
};

export default BlogDetailSidebar;
