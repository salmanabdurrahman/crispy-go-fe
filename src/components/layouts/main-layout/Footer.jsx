import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone, MapPin, Github } from "lucide-react";
import { BsTiktok } from "react-icons/bs";
import { toast } from "react-hot-toast";
import useNewsletter from "../../../hooks/useNewsletter";

const Footer = () => {
	const [email, setEmail] = useState("");
	const { isLoading, submitNewsletter } = useNewsletter();
	// Current year for copyright
	const currentYear = new Date().getFullYear();

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		await submitNewsletter({ email });

		toast.success("Terima kasih telah subscribe newsletter CrispyGo");
		setEmail("");
	};

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
								href="https://www.instagram.com/crispygoofficial"
								target="_blank"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-crispygo-rust"
								aria-label="Instagram"
							>
								<Instagram className="h-4 w-4" />
							</a>
							<a
								href="https://www.tiktok.com/@crispygo54"
								target="_blank"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-crispygo-rust"
								aria-label="Instagram"
							>
								<BsTiktok className="h-4 w-4" />
							</a>
							<a
								href="https://github.com/salmanabdurrahman/crispy-go-fe"
								target="_blank"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-crispygo-rust"
								aria-label="Instagram"
							>
								<Github className="h-4 w-4" />
							</a>
							<a
								href="#"
								target="_blank"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-crispygo-rust"
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
								<Link to="/" className="text-gray-300 transition-colors hover:text-crispygo-rust">
									Beranda
								</Link>
							</li>
							<li>
								<Link to="/menus" className="text-gray-300 transition-colors hover:text-crispygo-rust">
									Menu
								</Link>
							</li>
							<li>
								<Link to="/blogs" className="text-gray-300 transition-colors hover:text-crispygo-rust">
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/locations"
									className="text-gray-300 transition-colors hover:text-crispygo-rust"
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
								<Link to="/about" className="text-gray-300 transition-colors hover:text-crispygo-rust">
									Tentang Kami
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="text-gray-300 transition-colors hover:text-crispygo-rust"
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
								<MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-crispygo-rust" />
								<span className="text-gray-300">
									Condongcatur, Kabupaten Sleman, Daerah Istimewa Yogyakarta
								</span>
							</li>
							<li className="flex items-center">
								<Phone className="mr-3 h-5 w-5 flex-shrink-0 text-crispygo-rust" />
								<span className="text-gray-300">+62 812 3456 7890</span>
							</li>
							<li className="flex items-center">
								<Mail className="mr-3 h-5 w-5 flex-shrink-0 text-crispygo-rust" />
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
						<form className="space-y-2" method="POST" onSubmit={handleSubmit}>
							<input
								type="email"
								placeholder="Email Anda"
								className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-crispygo-rust"
								name="email"
								required
								value={email}
								onChange={handleEmailChange}
							/>
							<button
								type="submit"
								className="w-full rounded-md bg-crispygo-rust py-2 text-white transition-colors hover:bg-crispygo-orange"
								disabled={isLoading}
							>
								{isLoading ? "Mengirim..." : "Subscribe"}
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
								className="text-sm text-gray-400 transition-colors hover:text-crispygo-rust"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms-of-service"
								className="text-sm text-gray-400 transition-colors hover:text-crispygo-rust"
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
