"use client";

import { useParams } from "react-router-dom";
import BlogDetailHero from "../features/blog-detail/components/BlogDetailHero.jsx";
import BlogDetailArticle from "../features/blog-detail/components/BlogDetailArticle.jsx";
import useBlogDetail from "../features/blog-detail/hooks/useBlogDetail.js";
import LoadingSpinner from "./../components/common/spinner/LoadingSpinner";
import SEO from "../components/common/seo/SEO.jsx";

const BlogDetailPage = () => {
	const { slug } = useParams();
	const { isLoading, data } = useBlogDetail(slug);

	if (isLoading) return <LoadingSpinner />;

	return (
		<>
			<SEO
				title={`Crispy Go - ${data?.title}`}
				description={`${data?.excerpt}`}
				keywords={`blog makanan, blog kuliner, lifestyle kuliner, crispy go blog, artikel ayam goreng, tips makan enak, cerita bisnis fnb, ${data?.title.split(" ").join(", ")}`}
			/>
			<BlogDetailHero article={data} />
			<BlogDetailArticle article={data} />
		</>
	);
};

export default BlogDetailPage;
