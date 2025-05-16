import { useState } from "react";
import useBlogs from "../hooks/useBlogs.js";
import { categories } from "../../../constants/blogData.js";
import LoadingSpinner from "../../../components/common/spinner/LoadingSpinner.jsx";
import BlogSearchAndCategories from "./BlogSearchAndCategories.jsx";
import BlogNewArticle from "./BlogNewArticle.jsx";
import BlogAllArticles from "./BlogAllArticles.jsx";
import BlogSidebar from "./BlogSidebar.jsx";

const BlogContent = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const { isLoading, data } = useBlogs();

	if (isLoading) return <LoadingSpinner />;

	// Filter articles based on active category and search query
	const filteredArticles = data.filter(article => {
		const matchesCategory = activeCategory === "all" || article.type === activeCategory;
		const matchesSearch =
			searchQuery === "" ||
			article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

		return matchesCategory && matchesSearch;
	});

	return (
		<section className="section">
			<div className="container-custom">
				<div className="flex flex-col gap-12 lg:flex-row">
					{/* Main Content */}
					<div className="lg:w-2/3">
						<BlogSearchAndCategories
							searchQuery={searchQuery}
							setSearchQuery={setSearchQuery}
							activeCategory={activeCategory}
							setActiveCategory={setActiveCategory}
							categories={categories}
						/>
						<BlogNewArticle newArticle={data[0]} categories={categories} />
						<BlogAllArticles filteredArticles={filteredArticles} categories={categories} />
					</div>
					{/* Sidebar */}
					<BlogSidebar categories={categories} data={data} />
				</div>
			</div>
		</section>
	);
};

export default BlogContent;
