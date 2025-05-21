import { Link } from "react-router-dom";
import { Home, Menu } from "lucide-react";
import SEO from "../components/common/seo/SEO.jsx";

const NotFoundPage = () => {
	return (
		<>
			<SEO
				title="CrispyGo - Halaman Tidak Ditemukan"
				description="Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus."
				keywords="halaman tidak ditemukan, 404, crispygo 404, halaman tidak ada, error 404"
			/>
			<section className="flex min-h-screen flex-col items-center justify-center bg-crispygo-cream px-4 py-16">
				<div className="max-w-lg text-center">
					<div className="relative mb-8">
						<div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-crispygo-orange opacity-20"></div>
						<div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-crispygo-rust opacity-20"></div>
						<h1 className="relative z-10 mb-2 text-8xl font-bold text-crispygo-rust">404</h1>
						<div className="mx-auto mb-4 h-1 w-32 bg-crispygo-orange"></div>
					</div>
					<h2 className="mb-4 text-3xl font-semibold text-crispygo-rust">Halaman Tidak Ditemukan</h2>
					<p className="mb-8 leading-relaxed text-gray-700">
						Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau
						dihapus.
					</p>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Link
							to="/"
							className="flex items-center justify-center gap-2 rounded-lg bg-crispygo-rust px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-crispygo-rust/90"
						>
							<Home size={18} />
							<span>Kembali ke Beranda</span>
						</Link>
						<Link
							to="/menus"
							className="flex items-center justify-center gap-2 rounded-lg border-2 border-crispygo-orange px-6 py-3 font-medium text-crispygo-orange transition-colors hover:bg-crispygo-orange/10"
						>
							<Menu size={18} />
							<span>Lihat Menu Kami</span>
						</Link>
					</div>
					<div className="mt-12 border-t border-crispygo-orange/20 pt-8">
						<p className="text-sm text-gray-500">
							Butuh bantuan? Silakan{" "}
							<Link to="/contact" className="text-crispygo-orange hover:underline">
								hubungi kami
							</Link>{" "}
							atau kembali ke{" "}
							<Link to="/" className="text-crispygo-orange hover:underline">
								halaman utama
							</Link>
							.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default NotFoundPage;
