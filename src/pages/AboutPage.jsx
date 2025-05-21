import AboutHero from "../features/about/components/AboutHero.jsx";
import AboutStory from "../features/about/components/AboutStory.jsx";
import AboutTimeline from "../features/about/components/AboutTimeline.jsx";
import AboutValues from "../features/about/components/AboutValues.jsx";
import AboutTeam from "../features/about/components/AboutTeam.jsx";
import AboutPartners from "../features/about/components/AboutPartners.jsx";
import AboutCallToAction from "../features/about/components/AboutCallToAction.jsx";
import SEO from "../components/common/seo/SEO.jsx";

const AboutPage = () => {
	return (
		<>
			<SEO
				title="CrispyGo - Tentang Kami"
				description="CrispyGo hadir sebagai solusi kuliner ayam krispi kekinian. Kenali cerita brand kami, visi misi, dan tim di balik kelezatan setiap gigitan."
				keywords="tentang crispygo, profil perusahaan ayam goreng, kisah bisnis kuliner, sejarah crispygo, brand ayam krispi"
			/>
			<AboutHero />
			<AboutStory />
			<AboutTimeline />
			<AboutValues />
			<AboutTeam />
			<AboutPartners />
			<AboutCallToAction />
		</>
	);
};

export default AboutPage;
