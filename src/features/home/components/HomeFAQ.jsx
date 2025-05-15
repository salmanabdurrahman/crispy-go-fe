import { Link } from "react-router-dom";

const HomeFAQ = () => {
	return (
		<section className="section bg-crispygo-cream">
			<div className="container-custom">
				<div className="section-title">
					<h2 className="text-crispygo-dark">Pertanyaan yang Sering Diajukan</h2>
					<p className="text-crispygo-dark/80 mx-auto mt-4 max-w-3xl">
						Jawaban untuk pertanyaan umum tentang CrispyGo
					</p>
				</div>
				<div className="mx-auto max-w-3xl">
					{[
						{
							question: "Apakah CrispyGo menyediakan layanan delivery?",
							answer: "Ya, CrispyGo menyediakan layanan delivery melalui aplikasi kami sendiri dan juga tersedia di berbagai platform food delivery populer.",
						},
						{
							question: "Apakah tersedia menu untuk vegetarian?",
							answer: "Ya, kami memiliki beberapa pilihan menu vegetarian yang tetap mempertahankan cita rasa crispy khas CrispyGo.",
						},
						{
							question: "Bagaimana cara memesan untuk acara besar?",
							answer: "Untuk pemesanan dalam jumlah besar atau catering, Anda dapat menghubungi kami melalui form di halaman Contact atau langsung menghubungi outlet terdekat.",
						},
						{
							question: "Apakah CrispyGo menyediakan franchise?",
							answer: "Ya, CrispyGo membuka kesempatan franchise. Untuk informasi lebih lanjut, silakan kunjungi halaman Careers atau hubungi tim kami.",
						},
						{
							question: "Bagaimana cara bergabung dengan CrispyGo?",
							answer: "Kami selalu mencari talenta baru untuk bergabung dengan tim kami. Kunjungi halaman Careers untuk melihat posisi yang tersedia.",
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
					<div className="mt-8 text-center">
						<Link to="/faq" className="btn btn-primary">
							Lihat Semua FAQ
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeFAQ;
