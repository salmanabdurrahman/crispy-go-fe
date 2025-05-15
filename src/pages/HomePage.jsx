import HomeHero from "../features/home/components/HomeHero.jsx";
import HomeStats from "../features/home/components/HomeStats.jsx";
import HomeWhyChoose from "../features/home/components/HomeWhyChoose.jsx";
import HomeProcess from "../features/home/components/HomeProcess.jsx";
import HomeMenu from "../features/home/components/HomeMenu.jsx";
import HomeCallToAction from "../features/home/components/HomeCallToAction.jsx";
import HomeEvents from "../features/home/components/HomeEvents.jsx";
import HomeStory from "../features/home/components/HomeStory.jsx";
import HomeTestimonials from "./../features/home/components/HomeTestimonials";
import HomeAwards from "../features/home/components/HomeAwards.jsx";
import HomePartners from "../features/home/components/HomePartners.jsx";
import HomeBlog from "../features/home/components/HomeBlog.jsx";
import HomeFAQ from "../features/home/components/HomeFAQ.jsx";

const HomePage = () => {
	return (
		<>
			{/* Hero Section */}
			<HomeHero />
			{/* CrispyGo dengan Angka */}
			<HomeStats />
			{/* Mengapa Memilih CrispyGo */}
			<HomeWhyChoose />
			{/* Proses Pembuatan */}
			<HomeProcess />
			{/* Menu Favorit Kami */}
			<HomeMenu />
			{/* Nikmati Kelezatan CrispyGo Sekarang Juga! */}
			<HomeCallToAction />
			{/* Cocok Untuk Berbagai Acara */}
			<HomeEvents />
			{/* Perjalanan CrispyGo */}
			<HomeStory />
			{/* Apa Kata Mereka? */}
			<HomeTestimonials />
			{/* Penghargaan Kami */}
			<HomeAwards />
			{/* Partner Bisnis Kami */}
			<HomePartners />
			{/* Blog & Artikel */}
			<HomeBlog />
			{/* Pertanyaan yang Sering Diajukan */}
			<HomeFAQ />
		</>
	);
};

export default HomePage;
