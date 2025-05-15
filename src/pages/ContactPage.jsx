"use client";

import { useState } from "react";
import ContactHero from "../features/contact/components/ContactHero.jsx";
import ContactFAQ from "../features/contact/components/ContactFAQ.jsx";
import ContactForm from "../features/contact/components/ContactForm.jsx";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Form submitted:", formData);
		alert("Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.");
		setFormData({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});
	};

	return (
		<>
			{/* Hero Section */}
			<ContactHero />
			{/* Contact Info & Form Section */}
			<ContactForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
			{/* FAQ Section */}
			<ContactFAQ />
		</>
	);
};

export default ContactPage;
