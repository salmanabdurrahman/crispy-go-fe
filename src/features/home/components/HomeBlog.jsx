import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HomeBlog = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="section-title">
					<h2>Blog & Artikel</h2>
					<p className="mx-auto mt-4 max-w-3xl text-gray-600">
						Informasi terbaru seputar CrispyGo dan dunia kuliner
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					{[
						{
							title: "Rahasia Tekstur Renyah yang Sempurna",
							date: "10 Mei 2025",
							excerpt:
								"Pelajari teknik dan tips untuk mendapatkan tekstur renyah yang sempurna pada setiap masakan crispy Anda.",
						},
						{
							title: "5 Saus Pendamping Terbaik untuk Makanan Crispy",
							date: "5 Mei 2025",
							excerpt:
								"Rekomendasi saus pendamping yang akan meningkatkan cita rasa makanan crispy favorit Anda.",
						},
						{
							title: "CrispyGo Membuka Outlet Baru di Bali",
							date: "1 Mei 2025",
							excerpt:
								"Kabar gembira untuk pecinta CrispyGo di Bali! Kami telah membuka outlet baru di Kuta, Bali.",
						},
					].map((blog, index) => (
						<div key={index} className="card group">
							<div className="relative h-48">
								<img
									src={`/placeholder.svg?height=192&width=400&text=Blog+${index + 1}`}
									alt={blog.title}
									className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<p className="text-crispygo-rust mb-2 text-sm">{blog.date}</p>
								<h3 className="mb-2 text-xl font-bold">{blog.title}</h3>
								<p className="mb-4 text-gray-600">{blog.excerpt}</p>
								<Link
									to="/blog"
									className="text-crispygo-rust flex items-center font-medium hover:underline"
								>
									Baca Selengkapnya <ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className="mt-12 text-center">
					<Link to="/blog" className="btn btn-primary">
						Lihat Semua Artikel
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeBlog;
