const ContactFAQ = () => {
	return (
		<section className="section bg-crispygo-cream">
			<div className="container-custom">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2 className="text-crispygo-dark">Pertanyaan Umum</h2>
					<p className="text-crispygo-dark/80 mt-4">
						Beberapa pertanyaan yang sering diajukan oleh pelanggan kami
					</p>
				</div>
				<div className="mx-auto max-w-3xl">
					{[
						{
							question: "Bagaimana cara memesan untuk acara besar?",
							answer: "Untuk pemesanan dalam jumlah besar atau catering, Anda dapat mengisi form kontak di atas atau langsung menghubungi outlet terdekat minimal 3 hari sebelum acara.",
						},
						{
							question: "Apakah CrispyGo menyediakan layanan delivery?",
							answer: "Ya, CrispyGo menyediakan layanan delivery melalui aplikasi kami sendiri dan juga tersedia di berbagai platform food delivery populer.",
						},
						{
							question: "Bagaimana cara mengajukan kerjasama bisnis?",
							answer: "Untuk kerjasama bisnis, silakan kirim proposal Anda melalui email ke partnership@crispygo.com atau hubungi kami melalui form kontak di atas.",
						},
					].map((faq, index) => (
						<div key={index} className="mb-4 overflow-hidden rounded-lg bg-white shadow-sm">
							<div className="border-b border-gray-100 p-4">
								<h3 className="text-lg font-bold">{faq.question}</h3>
							</div>
							<div className="p-4">
								<p className="text-gray-600">{faq.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactFAQ;
