"use client";

import { useParams } from "react-router-dom";
import BlogDetailHero from "../features/blog-detail/components/BlogDetailHero.jsx";
import BlogDetailArticle from "../features/blog-detail/components/BlogDetailArticle.jsx";
import useBlogDetail from "../features/blog-detail/hooks/useBlogDetail.js";
import LoadingSpinner from "./../components/common/spinner/LoadingSpinner";

const BlogDetailPage = () => {
	const { slug } = useParams();
	const { isLoading, data } = useBlogDetail(slug);

	if (isLoading) return <LoadingSpinner />;

	return (
		<>
			<BlogDetailHero article={data} />
			<BlogDetailArticle article={data} />
		</>
	);
};

export default BlogDetailPage;
