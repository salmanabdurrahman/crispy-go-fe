import { Link } from "react-router-dom";
import { MessageCircle, Facebook, Twitter, Instagram, Search } from "lucide-react";

const BlogDetailArticle = ({ article }) => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="flex flex-col gap-12 lg:flex-row">
					{/* Main Content */}
					<div className="lg:w-2/3">
						{/* Featured Image */}
						<div className="relative mb-8 h-[400px] overflow-hidden rounded-lg">
							<img
								src={`/placeholder.svg?height=400&width=800&text=Featured+Image`}
								alt={article.title}
								className="h-full w-full object-cover"
							/>
						</div>
						{/* Article Content */}
						<div className="prose prose-lg mb-8 max-w-none">
							<div dangerouslySetInnerHTML={{ __html: article.content }} />
						</div>
						{/* Tags */}
						<div className="mb-8 flex flex-wrap gap-2">
							{article.tags.map((tag, index) => (
								<Link
									key={index}
									to={`/blog/tag/${tag.toLowerCase().replace(" ", "-")}`}
									className="rounded-full bg-crispygo-cream px-3 py-1 text-sm text-crispygo-dark transition-colors hover:bg-crispygo-orange hover:text-white"
								>
									#{tag}
								</Link>
							))}
						</div>
						{/* Share */}
						<div className="mb-12 flex items-center gap-4 border-b pb-8">
							<span className="font-medium">Share:</span>
							<div className="flex gap-2">
								<a
									href="#"
									className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white hover:opacity-80"
								>
									<Facebook className="h-4 w-4" />
								</a>
								<a
									href="#"
									className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white hover:opacity-80"
								>
									<Twitter className="h-4 w-4" />
								</a>
								<a
									href="#"
									className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-80"
								>
									<Instagram className="h-4 w-4" />
								</a>
							</div>
						</div>
						{/* Author Bio */}
						<div className="mb-12 rounded-lg bg-gray-50 p-6">
							<div className="flex items-center gap-4">
								<div className="relative h-16 w-16 overflow-hidden rounded-full">
									<img
										src={`/placeholder.svg?height=64&width=64&text=Chef`}
										alt={article.author}
										className="h-full w-full object-cover"
									/>
								</div>
								<div>
									<h3 className="text-lg font-bold">{article.author}</h3>
									<p className="text-gray-600">Executive Chef at CrispyGo</p>
								</div>
							</div>
							<p className="mt-4 text-gray-600">
								Chef Budi adalah seorang profesional kuliner dengan pengalaman lebih dari 15 tahun di
								industri makanan. Spesialisasinya adalah makanan crispy dengan berbagai teknik inovatif.
							</p>
						</div>
						{/* Comments */}
						<div className="mb-12">
							<div className="mb-6 flex items-center justify-between">
								<h3 className="text-2xl font-bold">Komentar ({article.comments})</h3>
								<button className="font-medium text-crispygo-rust">Lihat Semua</button>
							</div>
							<div className="space-y-6">
								{[...Array(3)].map((_, index) => (
									<div key={index} className="border-b pb-6">
										<div className="flex items-start gap-4">
											<div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
												<img
													src={`/placeholder.svg?height=48&width=48&text=User`}
													alt={`User ${index + 1}`}
													className="h-full w-full object-cover"
												/>
											</div>
											<div>
												<div className="mb-1 flex items-center gap-2">
													<h4 className="font-bold">Pengguna {index + 1}</h4>
													<span className="text-xs text-gray-500">
														• {index + 1} hari yang lalu
													</span>
												</div>
												<p className="text-gray-600">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
													euismod bibendum laoreet. Proin gravida dolor sit amet lacus
													accumsan et viverra justo commodo.
												</p>
												<button className="mt-2 flex items-center text-sm text-crispygo-rust">
													<MessageCircle className="mr-1 h-4 w-4" /> Balas
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
							{/* Comment Form */}
							<div className="mt-8">
								<h3 className="mb-4 text-xl font-bold">Tinggalkan Komentar</h3>
								<form className="space-y-4">
									<div className="grid gap-4 md:grid-cols-2">
										<input
											type="text"
											placeholder="Nama"
											className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
											required
										/>
										<input
											type="email"
											placeholder="Email"
											className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
											required
										/>
									</div>
									<textarea
										rows="4"
										placeholder="Komentar Anda"
										className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
										required
									></textarea>
									<button
										type="submit"
										className="rounded-md bg-crispygo-rust px-6 py-2 text-white transition-colors hover:bg-crispygo-orange"
									>
										Kirim Komentar
									</button>
								</form>
							</div>
						</div>
					</div>
					{/* Sidebar */}
					<div className="lg:w-1/3">
						{/* Search */}
						<div className="mb-8">
							<div className="relative">
								<input
									type="text"
									placeholder="Cari artikel..."
									className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
								/>
								<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
							</div>
						</div>
						{/* Related Posts */}
						<div className="card mb-8 p-6">
							<h3 className="mb-4 text-xl font-bold">Artikel Terkait</h3>
							<div className="space-y-6">
								{article.relatedPosts.map((post, index) => (
									<div key={index} className="flex gap-4">
										<div className="relative h-20 w-20 flex-shrink-0">
											<img
												src={`/placeholder.svg?height=80&width=80&text=${index + 1}`}
												alt={post.title}
												className="h-full w-full rounded-md object-cover"
											/>
										</div>
										<div>
											<h4 className="mb-1 line-clamp-2 font-bold">
												<Link
													to={`/blog/${post.slug}`}
													className="transition-colors hover:text-crispygo-rust"
												>
													{post.title}
												</Link>
											</h4>
											<span className="text-sm text-crispygo-rust">{post.date}</span>
										</div>
									</div>
								))}
							</div>
						</div>
						{/* Categories */}
						<div className="card mb-8 p-6">
							<h3 className="mb-4 text-xl font-bold">Kategori</h3>
							<ul className="space-y-2">
								{["Semua", "Resep", "Tips & Trik", "Berita", "Event"].map((category, index) => (
									<li key={index}>
										<Link
											to={`/blog/category/${category.toLowerCase().replace(" & ", "-").replace(" ", "-")}`}
											className="flex items-center justify-between py-2 transition-colors hover:text-crispygo-rust"
										>
											<span>{category}</span>
											<span className="rounded-full bg-crispygo-cream px-2 py-1 text-sm text-crispygo-dark">
												{Math.floor(Math.random() * 10) + 1}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/* Newsletter */}
						<div className="card p-6">
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailArticle;
