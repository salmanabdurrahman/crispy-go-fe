"use client";

import ContactHero from "../features/contact/components/ContactHero.jsx";
import ContactFAQ from "../features/contact/components/ContactFAQ.jsx";
import ContactForm from "../features/contact/components/ContactForm.jsx";
import SEO from "../components/common/seo/SEO.jsx";

const ContactPage = () => {
	return (
		<>
			<SEO
				title="CrispyGo - Hubungi Kami"
				description="Punya pertanyaan, kritik, saran, atau mau ajukan kerja sama franchise? Hubungi tim CrispyGo lewat form atau sosial media kami!"
				keywords="kontak crispygo, hubungi crispygo, cs crispygo, franchise ayam krispi, kontak bisnis kuliner"
			/>
			<ContactHero />
			<ContactForm />
			<ContactFAQ />
		</>
	);
};

export default ContactPage;
