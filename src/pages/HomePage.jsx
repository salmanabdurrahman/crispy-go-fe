import HomeHero from "../features/home/components/HomeHero.jsx";
import HomeStats from "../features/home/components/HomeStats.jsx";
import HomeWhyChoose from "../features/home/components/HomeWhyChoose.jsx";
import HomeProcess from "../features/home/components/HomeProcess.jsx";
import HomeMenu from "../features/home/components/HomeMenu.jsx";
import HomeCallToAction from "../features/home/components/HomeCallToAction.jsx";
import HomeEvents from "../features/home/components/HomeEvents.jsx";
import HomeTestimonials from "./../features/home/components/HomeTestimonials";
import HomeAwards from "../features/home/components/HomeAwards.jsx";
import HomePartners from "../features/home/components/HomePartners.jsx";
import HomeBlog from "../features/home/components/HomeBlog.jsx";
import HomeFAQ from "../features/home/components/HomeFAQ.jsx";
import AboutTimeline from "../features/about/components/AboutTimeline.jsx";
import SEO from "../components/common/seo/SEO.jsx";

const HomePage = () => {
	return (
		<>
			<SEO
				title="CrispyGo - Ayam Goreng Krispi Kekinian, Renyahnya Gak Ada Lawan!"
				description="Selamat datang di CrispyGo! Nikmati ayam goreng krispi kekinian yang renyah di luar, juicy di dalam. Pesan online atau datang langsung ke outlet terdekat."
				keywords="crispygo, ayam goreng krispi, ayam kekinian, fried chicken Indonesia, ayam enak, kuliner ayam, makanan cepat saji, outlet ayam goreng"
			/>
			<HomeHero />
			<HomeStats />
			<HomeWhyChoose />
			<HomeProcess />
			<HomeMenu />
			<HomeCallToAction />
			<HomeEvents />
			<AboutTimeline />
			<HomeTestimonials />
			<HomeAwards />
			<HomePartners />
			<HomeBlog />
			<HomeFAQ />
		</>
	);
};

export default HomePage;
