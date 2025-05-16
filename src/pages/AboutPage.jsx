import AboutHero from "../features/about/components/AboutHero.jsx";
import AboutStory from "../features/about/components/AboutStory.jsx";
import AboutTimeline from "../features/about/components/AboutTimeline.jsx";
import AboutValues from "../features/about/components/AboutValues.jsx";
import AboutTeam from "../features/about/components/AboutTeam.jsx";
import AboutPartners from "../features/about/components/AboutPartners.jsx";
import AboutCallToAction from "../features/about/components/AboutCallToAction.jsx";

const AboutPage = () => {
	return (
		<>
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
