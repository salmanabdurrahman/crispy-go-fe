import { Link } from "react-router-dom";
import { Home, Menu } from "lucide-react";

const NotFoundPage = () => {
	return (
		<section className="bg-crispygo-cream flex min-h-screen flex-col items-center justify-center px-4 py-16">
			<div className="max-w-lg text-center">
				<div className="relative mb-8">
					<div className="bg-crispygo-orange absolute -left-6 -top-6 h-24 w-24 rounded-full opacity-20"></div>
					<div className="bg-crispygo-rust absolute -bottom-6 -right-6 h-24 w-24 rounded-full opacity-20"></div>
					<h1 className="text-crispygo-rust relative z-10 mb-2 text-8xl font-bold">404</h1>
					<div className="bg-crispygo-orange mx-auto mb-4 h-1 w-32"></div>
				</div>
				<h2 className="text-crispygo-rust mb-4 text-3xl font-semibold">Halaman Tidak Ditemukan</h2>
				<p className="mb-8 leading-relaxed text-gray-700">
					Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus.
				</p>
				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<Link
						to="/"
						className="bg-crispygo-rust hover:bg-crispygo-rust/90 flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white shadow-md transition-colors"
					>
						<Home size={18} />
						<span>Kembali ke Beranda</span>
					</Link>
					<Link
						to="/menu"
						className="border-crispygo-orange text-crispygo-orange hover:bg-crispygo-orange/10 flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3 font-medium transition-colors"
					>
						<Menu size={18} />
						<span>Lihat Menu Kami</span>
					</Link>
				</div>
				<div className="border-crispygo-orange/20 mt-12 border-t pt-8">
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
	);
};

export default NotFoundPage;
