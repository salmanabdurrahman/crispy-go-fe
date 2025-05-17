import { Link } from "react-router-dom";
import { faqs } from "../../../constants/homeData.js";

const HomeFAQ = () => {
	return (
		<section className="section bg-crispygo-cream">
			<div className="container-custom">
				<div className="section-title">
					<h2 className="text-crispygo-dark">Pertanyaan yang Sering Diajukan</h2>
					<p className="mx-auto mt-4 max-w-3xl text-crispygo-dark/80">
						Jawaban untuk pertanyaan umum tentang CrispyGo
					</p>
				</div>
				<div className="mx-auto max-w-3xl">
					{faqs.map((faq, index) => (
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
