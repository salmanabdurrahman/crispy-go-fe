"use client";

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	// Navigation items
	const navItems = [
		{ name: "Beranda", path: "/" },
		{ name: "Menu", path: "/menu" },
		{ name: "Blog", path: "/blog" },
		{ name: "Lokasi", path: "/locations" },
		// { name: "Karir", path: "/careers" },
		// { name: "FAQ", path: "/faq" },
		{ name: "Tentang Kami", path: "/about" },
		{ name: "Kontak", path: "/contact" },
	];

	// Handle scroll event
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close menu when route changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [location]);

	return (
		<header
			className={`sticky top-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white py-2 shadow-md" : "bg-transparent py-4"
			}`}
		>
			<div className="container-custom">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link to="/" className="flex items-center">
						<span className="text-crispygo-rust text-2xl font-bold">CrispyGo</span>
					</Link>
					{/* Desktop Navigation */}
					<nav className="hidden items-center space-x-6 lg:flex">
						{navItems.map(item => (
							<NavLink
								key={item.path}
								to={item.path}
								className={({ isActive }) =>
									`font-medium transition-colors ${
										isActive ? "text-crispygo-rust" : "text-crispygo-dark hover:text-crispygo-rust"
									}`
								}
							>
								{item.name}
							</NavLink>
						))}
					</nav>
					{/* Order Button */}
					<div className="hidden lg:block">
						<Link to="/order" className="btn btn-primary flex items-center">
							<ShoppingBag className="mr-2 h-5 w-5" />
							Pesan Sekarang
						</Link>
					</div>
					{/* Mobile Menu Button */}
					<button
						className="p-2 focus:outline-none lg:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
					>
						{isMenuOpen ? (
							<X className="text-crispygo-dark h-6 w-6" />
						) : (
							<Menu className="text-crispygo-dark h-6 w-6" />
						)}
					</button>
				</div>
			</div>
			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="mt-2 border-t bg-white lg:hidden">
					<div className="container-custom py-4">
						<nav className="flex flex-col space-y-4">
							{navItems.map(item => (
								<NavLink
									key={item.path}
									to={item.path}
									className={({ isActive }) =>
										`py-2 font-medium transition-colors ${
											isActive
												? "text-crispygo-rust"
												: "text-crispygo-dark hover:text-crispygo-rust"
										}`
									}
								>
									{item.name}
								</NavLink>
							))}
							<Link to="/order" className="btn btn-primary mt-4 flex items-center justify-center">
								<ShoppingBag className="mr-2 h-5 w-5" />
								Pesan Sekarang
							</Link>
						</nav>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
