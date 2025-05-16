import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const initialFormData = {
	name: "",
	email: "",
	phone: "",
	// subject: "",
	message: "",
};

const ContactForm = () => {
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Form submitted:", formData);
		alert("Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.");
		setFormData(initialFormData);
	};

	return (
		<section className="section">
			<div className="container-custom">
				<div className="grid gap-12 lg:grid-cols-2">
					{/* Contact Information */}
					<div>
						<h2 className="mb-6 text-2xl font-bold">Informasi Kontak</h2>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="rounded-full bg-crispygo-cream p-3">
									<MapPin className="h-6 w-6 text-crispygo-rust" />
								</div>
								<div>
									<h3 className="text-lg font-bold">Alamat Kantor Pusat</h3>
									<p className="text-gray-600">
										Condongcatur, Kabupaten Sleman, Daerah Istimewa Yogyakarta
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="rounded-full bg-crispygo-cream p-3">
									<Phone className="h-6 w-6 text-crispygo-rust" />
								</div>
								<div>
									<h3 className="text-lg font-bold">Telepon</h3>
									<p className="text-gray-600">+62 812 3456 7890</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="rounded-full bg-crispygo-cream p-3">
									<Mail className="h-6 w-6 text-crispygo-rust" />
								</div>
								<div>
									<h3 className="text-lg font-bold">Email</h3>
									<p className="text-gray-600">info@crispygo.store</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="rounded-full bg-crispygo-cream p-3">
									<Clock className="h-6 w-6 text-crispygo-rust" />
								</div>
								<div>
									<h3 className="text-lg font-bold">Jam Operasional</h3>
									<p className="text-gray-600">Senin - Minggu: 10:00 - 22:00 WIB</p>
								</div>
							</div>
						</div>
						<div className="mt-10">
							<h2 className="mb-6 text-2xl font-bold">Lokasi Kami</h2>
							<div className="h-80 overflow-hidden rounded-lg bg-gray-200">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3953.3418525332468!2d110.4077242750047!3d-7.753519592265391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDUnMTIuNyJTIDExMMKwMjQnMzcuMSJF!5e0!3m2!1sid!2sid!4v1747384163132!5m2!1sid!2sid"
									className="h-full w-full border-0"
									allowFullScreen=""
									referrerPolicy="no-referrer-when-downgrade"
									loading="lazy"
								></iframe>
							</div>
						</div>
					</div>
					{/* Contact Form */}
					<div>
						<h2 className="mb-6 text-2xl font-bold">Kirim Pesan</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid gap-6">
								<div>
									<label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
										Nama Lengkap
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
										required
									/>
								</div>
							</div>
							<div className="grid gap-6 md:grid-cols-2">
								<div>
									<label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
										Nomor Telepon
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
									/>
								</div>
								<div>
									<label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
										required
									/>
								</div>
								{/* <div>
									<label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
										Subjek
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
										required
									/>
								</div> */}
							</div>
							<div>
								<label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
									Pesan
								</label>
								<textarea
									id="message"
									name="message"
									rows="5"
									value={formData.message}
									onChange={handleChange}
									className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
									required
								></textarea>
							</div>
							<button
								type="submit"
								className="inline-flex items-center rounded-md bg-crispygo-rust px-6 py-3 font-medium text-white transition-colors hover:bg-crispygo-orange"
							>
								<Send className="mr-2 h-5 w-5" />
								Kirim Pesan
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
