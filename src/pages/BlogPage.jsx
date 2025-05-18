"use client";

import BlogHero from "../features/blog/components/BlogHero.jsx";
import BlogContent from "../features/blog/components/BlogContent.jsx";
import SEO from "../components/common/seo/SEO.jsx";

const BlogPage = () => {
	return (
		<>
			<SEO
				title="Crispy Go - Blog"
				description="Baca artikel menarik seputar dunia kuliner, tips makanan, lifestyle anak muda, dan cerita di balik dapur Crispy Go. Update terus tiap minggu!"
				keywords="blog makanan, blog kuliner, lifestyle kuliner, crispy go blog, artikel ayam goreng, tips makan enak, cerita bisnis fnb"
			/>
			<BlogHero />
			<BlogContent />
		</>
	);
};

export default BlogPage;
