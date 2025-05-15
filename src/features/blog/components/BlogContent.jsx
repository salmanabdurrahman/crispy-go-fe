import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Search } from "lucide-react";

const BlogContent = () => {
	// Blog categories
	const categories = [
		{ id: "all", name: "Semua" },
		{ id: "recipes", name: "Resep" },
		{ id: "tips", name: "Tips & Trik" },
		{ id: "news", name: "Berita" },
		{ id: "events", name: "Event" },
	];

	// Featured article
	const featuredArticle = {
		slug: "rahasia-tekstur-renyah-sempurna",
		title: "Rahasia Tekstur Renyah yang Sempurna",
		date: "10 Mei 2025",
		category: "tips",
		excerpt:
			"Pelajari teknik dan tips untuk mendapatkan tekstur renyah yang sempurna pada setiap masakan crispy Anda. Dari pemilihan bahan hingga teknik penggorengan yang tepat.",
		author: "Chef Budi",
	};

	// Blog articles
	const articles = [
		{
			slug: "5-saus-pendamping-terbaik",
			title: "5 Saus Pendamping Terbaik untuk Makanan Crispy",
			date: "5 Mei 2025",
			category: "recipes",
			excerpt: "Rekomendasi saus pendamping yang akan meningkatkan cita rasa makanan crispy favorit Anda.",
			author: "Siti Rahma",
		},
		{
			slug: "crispygo-buka-outlet-bali",
			title: "CrispyGo Membuka Outlet Baru di Bali",
			date: "1 Mei 2025",
			category: "news",
			excerpt: "Kabar gembira untuk pecinta CrispyGo di Bali! Kami telah membuka outlet baru di Kuta, Bali.",
			author: "Tim CrispyGo",
		},
		{
			slug: "tips-menyimpan-makanan-crispy",
			title: "Tips Menyimpan Makanan Crispy Agar Tetap Renyah",
			date: "25 April 2025",
			category: "tips",
			excerpt: "Bagaimana cara menyimpan makanan crispy agar tetap renyah dan enak saat dinikmati kembali.",
			author: "Chef Andi",
		},
		{
			slug: "event-crispy-food-festival",
			title: "CrispyGo Gelar Crispy Food Festival 2025",
			date: "20 April 2025",
			category: "events",
			excerpt: "CrispyGo akan menggelar festival makanan crispy terbesar di Indonesia pada bulan Juni 2025.",
			author: "Tim Event CrispyGo",
		},
		{
			slug: "resep-saus-spesial-crispygo",
			title: "Resep Saus Spesial ala CrispyGo",
			date: "15 April 2025",
			category: "recipes",
			excerpt: "Buat sendiri saus spesial ala CrispyGo untuk melengkapi hidangan crispy di rumah Anda.",
			author: "Chef Maya",
		},
		{
			slug: "crispygo-raih-penghargaan",
			title: "CrispyGo Raih Penghargaan Best Food Chain 2025",
			date: "10 April 2025",
			category: "news",
			excerpt: "CrispyGo berhasil meraih penghargaan Best Food Chain 2025 dalam ajang Indonesia Food Awards.",
			author: "Tim CrispyGo",
		},
	];

	const [activeCategory, setActiveCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	// Filter articles based on active category and search query
	const filteredArticles = articles.filter(article => {
		const matchesCategory = activeCategory === "all" || article.category === activeCategory;
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
						{/* Search & Categories */}
						<div className="mb-10">
							<div className="mb-6 flex flex-col gap-4 md:flex-row">
								<div className="relative flex-grow">
									<input
										type="text"
										placeholder="Cari artikel..."
										className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
										value={searchQuery}
										onChange={e => setSearchQuery(e.target.value)}
									/>
									<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
								</div>
								<select
									className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
									value={activeCategory}
									onChange={e => setActiveCategory(e.target.value)}
								>
									<option value="all">Semua Kategori</option>
									{categories.slice(1).map(category => (
										<option key={category.id} value={category.id}>
											{category.name}
										</option>
									))}
								</select>
							</div>
							<div className="flex flex-wrap gap-2">
								{categories.map(category => (
									<button
										key={category.id}
										className={`rounded-full px-4 py-2 text-sm ${
											category.id === activeCategory
												? "bg-crispygo-rust text-white"
												: "border border-gray-200 bg-white hover:border-crispygo-orange hover:bg-crispygo-cream"
										} transition-colors`}
										onClick={() => setActiveCategory(category.id)}
									>
										{category.name}
									</button>
								))}
							</div>
						</div>
						{/* Featured Article */}
						<div className="mb-12">
							<h2 className="mb-6 text-2xl font-bold">Featured Article</h2>
							<div className="card group overflow-hidden">
								<div className="relative h-80">
									<img
										src={`/placeholder.svg?height=320&width=800&text=Featured+Article`}
										alt={featuredArticle.title}
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
								<div className="p-6">
									<div className="mb-3 flex items-center gap-4">
										<span className="text-sm text-crispygo-rust">{featuredArticle.date}</span>
										<span className="rounded-full bg-crispygo-cream px-2 py-1 text-sm text-crispygo-dark">
											{categories.find(c => c.id === featuredArticle.category)?.name}
										</span>
									</div>
									<h3 className="mb-3 text-2xl font-bold">{featuredArticle.title}</h3>
									<p className="mb-4 text-gray-600">{featuredArticle.excerpt}</p>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-600">By {featuredArticle.author}</span>
										<Link
											to={`/blog/${featuredArticle.slug}`}
											className="flex items-center font-medium text-crispygo-rust hover:underline"
										>
											Baca Selengkapnya <ChevronRight className="ml-1 h-4 w-4" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						{/* All Articles */}
						<div>
							<h2 className="mb-6 text-2xl font-bold">Artikel Terbaru</h2>
							<div className="grid gap-6 md:grid-cols-2">
								{filteredArticles.map((article, index) => (
									<div key={index} className="card group overflow-hidden">
										<div className="relative h-48">
											<img
												src={`/placeholder.svg?height=192&width=400&text=Article+${index + 1}`}
												alt={article.title}
												className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
											/>
										</div>
										<div className="p-6">
											<div className="mb-3 flex items-center gap-4">
												<span className="text-sm text-crispygo-rust">{article.date}</span>
												<span className="rounded-full bg-crispygo-cream px-2 py-1 text-sm text-crispygo-dark">
													{categories.find(c => c.id === article.category)?.name}
												</span>
											</div>
											<h3 className="mb-3 text-xl font-bold">{article.title}</h3>
											<p className="mb-4 line-clamp-2 text-gray-600">{article.excerpt}</p>
											<div className="flex items-center justify-between">
												<span className="text-sm text-gray-600">By {article.author}</span>
												<Link
													to={`/blog/${article.slug}`}
													className="flex items-center font-medium text-crispygo-rust hover:underline"
												>
													Baca <ChevronRight className="ml-1 h-4 w-4" />
												</Link>
											</div>
										</div>
									</div>
								))}
							</div>
							{/* Pagination */}
							<div className="mt-12 flex justify-center">
								<div className="flex items-center gap-2">
									<button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-crispygo-cream">
										&lt;
									</button>
									<button className="flex h-10 w-10 items-center justify-center rounded-md bg-crispygo-rust text-white">
										1
									</button>
									<button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-crispygo-cream">
										2
									</button>
									<button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-crispygo-cream">
										3
									</button>
									<button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-crispygo-cream">
										&gt;
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* Sidebar */}
					<div className="lg:w-1/3">
						{/* Newsletter */}
						<div className="card mb-8 p-6">
							<h3 className="mb-4 text-xl font-bold">Subscribe Newsletter</h3>
							<p className="mb-4 text-gray-600">
								Dapatkan update terbaru dari CrispyGo langsung ke inbox Anda
							</p>
							<form className="space-y-4">
								<input
									type="email"
									placeholder="Email Anda"
									className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
									required
								/>
								<button
									type="submit"
									className="w-full rounded-md bg-crispygo-rust py-2 text-white transition-colors hover:bg-crispygo-orange"
								>
									Subscribe
								</button>
							</form>
						</div>
						{/* Categories */}
						<div className="card mb-8 p-6">
							<h3 className="mb-4 text-xl font-bold">Kategori</h3>
							<ul className="space-y-2">
								{categories.map(category => (
									<li key={category.id}>
										<Link
											to={`/blog/category/${category.id}`}
											className="flex items-center justify-between py-2 transition-colors hover:text-crispygo-rust"
										>
											<span>{category.name}</span>
											<span className="rounded-full bg-crispygo-cream px-2 py-1 text-sm text-crispygo-dark">
												{category.id === "all"
													? articles.length
													: Math.floor(Math.random() * 10) + 1}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/* Popular Posts */}
						<div className="card p-6">
							<h3 className="mb-4 text-xl font-bold">Artikel Populer</h3>
							<div className="space-y-4">
								{articles.slice(0, 3).map((article, index) => (
									<div key={index} className="flex gap-4">
										<div className="relative h-20 w-20 flex-shrink-0">
											<img
												src={`/placeholder.svg?height=80&width=80&text=${index + 1}`}
												alt={article.title}
												className="h-full w-full rounded-md object-cover"
											/>
										</div>
										<div>
											<h4 className="mb-1 line-clamp-2 font-bold">
												<Link
													to={`/blog/${article.slug}`}
													className="transition-colors hover:text-crispygo-rust"
												>
													{article.title}
												</Link>
											</h4>
											<span className="text-sm text-crispygo-rust">{article.date}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogContent;
