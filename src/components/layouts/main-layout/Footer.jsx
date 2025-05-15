import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
	// Current year for copyright
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-crispygo-dark text-white">
			{/* Main Footer */}
			<div className="container-custom py-12 md:py-16">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* About */}
					<div>
						<h3 className="mb-4 text-xl font-bold">CrispyGo</h3>
						<p className="mb-6 text-gray-300">
							Kelezatan crispy dalam setiap gigitan. Kami menyajikan makanan crispy berkualitas tinggi
							dengan cita rasa autentik.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="hover:bg-crispygo-rust flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="h-4 w-4" />
							</a>
							<a
								href="#"
								className="hover:bg-crispygo-rust flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors"
								aria-label="Twitter"
							>
								<Twitter className="h-4 w-4" />
							</a>
							<a
								href="#"
								className="hover:bg-crispygo-rust flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="h-4 w-4" />
							</a>
							<a
								href="#"
								className="hover:bg-crispygo-rust flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors"
								aria-label="Youtube"
							>
								<Youtube className="h-4 w-4" />
							</a>
						</div>
					</div>
					{/* Quick Links */}
					<div>
						<h3 className="mb-4 text-xl font-bold">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="hover:text-crispygo-rust text-gray-300 transition-colors">
									Beranda
								</Link>
							</li>
							<li>
								<Link to="/menu" className="hover:text-crispygo-rust text-gray-300 transition-colors">
									Menu
								</Link>
							</li>
							<li>
								<Link to="/blog" className="hover:text-crispygo-rust text-gray-300 transition-colors">
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/locations"
									className="hover:text-crispygo-rust text-gray-300 transition-colors"
								>
									Lokasi
								</Link>
							</li>
							{/* <li>
								<Link
									to="/careers"
									className="hover:text-crispygo-rust text-gray-300 transition-colors"
								>
									Karir
								</Link>
							</li>
							<li>
								<Link to="/faq" className="hover:text-crispygo-rust text-gray-300 transition-colors">
									FAQ
								</Link>
							</li> */}
							<li>
								<Link to="/about" className="hover:text-crispygo-rust text-gray-300 transition-colors">
									Tentang Kami
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="hover:text-crispygo-rust text-gray-300 transition-colors"
								>
									Kontak
								</Link>
							</li>
						</ul>
					</div>
					{/* Contact */}
					<div>
						<h3 className="mb-4 text-xl font-bold">Kontak</h3>
						<ul className="space-y-4">
							<li className="flex items-start">
								<MapPin className="text-crispygo-rust mr-3 mt-1 h-5 w-5 flex-shrink-0" />
								<span className="text-gray-300">Jl. Crispy No. 123, Jakarta Selatan, Indonesia</span>
							</li>
							<li className="flex items-center">
								<Phone className="text-crispygo-rust mr-3 h-5 w-5 flex-shrink-0" />
								<span className="text-gray-300">+62 812 3456 7890</span>
							</li>
							<li className="flex items-center">
								<Mail className="text-crispygo-rust mr-3 h-5 w-5 flex-shrink-0" />
								<span className="text-gray-300">info@crispygo.store</span>
							</li>
						</ul>
					</div>
					{/* Newsletter */}
					<div>
						<h3 className="mb-4 text-xl font-bold">Newsletter</h3>
						<p className="mb-4 text-gray-300">
							Dapatkan update terbaru dan promo menarik dari CrispyGo langsung ke inbox Anda.
						</p>
						<form className="space-y-2">
							<input
								type="email"
								placeholder="Email Anda"
								className="focus:ring-crispygo-rust w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2"
								required
							/>
							<button
								type="submit"
								className="bg-crispygo-rust hover:bg-crispygo-orange w-full rounded-md py-2 text-white transition-colors"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
			{/* Bottom Footer */}
			<div className="border-t border-white/10">
				<div className="container-custom py-6">
					<div className="flex flex-col items-center justify-between md:flex-row">
						<p className="text-sm text-gray-400">&copy; {currentYear} CrispyGo. All rights reserved.</p>
						<div className="mt-4 flex space-x-4 md:mt-0">
							<Link
								to="/privacy-policy"
								className="hover:text-crispygo-rust text-sm text-gray-400 transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms-of-service"
								className="hover:text-crispygo-rust text-sm text-gray-400 transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
