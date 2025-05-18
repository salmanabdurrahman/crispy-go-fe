"use client";

import ContactHero from "../features/contact/components/ContactHero.jsx";
import ContactFAQ from "../features/contact/components/ContactFAQ.jsx";
import ContactForm from "../features/contact/components/ContactForm.jsx";
import SEO from "../components/common/seo/SEO.jsx";

const ContactPage = () => {
	return (
		<>
			<SEO
				title="Crispy Go - Hubungi Kami"
				description="Punya pertanyaan, kritik, saran, atau mau ajukan kerja sama franchise? Hubungi tim Crispy Go lewat form atau sosial media kami!"
				keywords="kontak crispy go, hubungi crispy go, cs crispy go, franchise ayam krispi, kontak bisnis kuliner"
			/>
			<ContactHero />
			<ContactForm />
			<ContactFAQ />
		</>
	);
};

export default ContactPage;
