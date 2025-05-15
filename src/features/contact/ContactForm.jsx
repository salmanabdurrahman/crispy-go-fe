import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactForm = ({ formData, onChange, onSubmit }) => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="grid gap-12 lg:grid-cols-2">
					{/* Contact Information */}
					<div>
						<h2 className="mb-6 text-2xl font-bold">Informasi Kontak</h2>

						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="bg-crispygo-cream rounded-full p-3">
									<MapPin className="text-crispygo-rust h-6 w-6" />
								</div>
								<div>
									<h3 className="text-lg font-bold">Alamat Kantor Pusat</h3>
									<p className="text-gray-600">Jl. Crispy No. 123, Jakarta Selatan, Indonesia</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="bg-crispygo-cream rounded-full p-3">
									<Phone className="text-crispygo-rust h-6 w-6" />
								</div>
								<div>
									<h3 className="text-lg font-bold">Telepon</h3>
									<p className="text-gray-600">+62 812 3456 7890</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="bg-crispygo-cream rounded-full p-3">
									<Mail className="text-crispygo-rust h-6 w-6" />
								</div>
								<div>
									<h3 className="text-lg font-bold">Email</h3>
									<p className="text-gray-600">info@crispygo.com</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="bg-crispygo-cream rounded-full p-3">
									<Clock className="text-crispygo-rust h-6 w-6" />
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
								<img
									src="/placeholder.svg?height=320&width=600&text=Google+Map"
									alt="CrispyGo Location Map"
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div>
						<h2 className="mb-6 text-2xl font-bold">Kirim Pesan</h2>
						<form onSubmit={onSubmit} className="space-y-6">
							<div className="grid gap-6 md:grid-cols-2">
								<div>
									<label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
										Nama Lengkap
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={onChange}
										className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
										required
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
										onChange={onChange}
										className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
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
										onChange={onChange}
										className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
									/>
								</div>
								<div>
									<label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
										Subjek
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={onChange}
										className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
										required
									/>
								</div>
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
									onChange={onChange}
									className="focus:ring-crispygo-orange w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
									required
								></textarea>
							</div>

							<button
								type="submit"
								className="bg-crispygo-rust hover:bg-crispygo-orange inline-flex items-center rounded-md px-6 py-3 font-medium text-white transition-colors"
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
