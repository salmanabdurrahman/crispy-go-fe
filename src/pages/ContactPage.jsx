"use client";

import ContactHero from "../features/contact/components/ContactHero.jsx";
import ContactFAQ from "../features/contact/components/ContactFAQ.jsx";
import ContactForm from "../features/contact/components/ContactForm.jsx";

const ContactPage = () => {
	return (
		<>
			<ContactHero />
			<ContactForm />
			<ContactFAQ />
		</>
	);
};

export default ContactPage;
