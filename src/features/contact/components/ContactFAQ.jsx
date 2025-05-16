import { contactFaq } from "../../../constants/contactData.js";

const ContactFAQ = () => {
	return (
		<section className="section bg-crispygo-cream">
			<div className="container-custom">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2 className="text-crispygo-dark">Pertanyaan Umum</h2>
					<p className="mt-4 text-crispygo-dark/80">
						Beberapa pertanyaan yang sering diajukan oleh pelanggan kami
					</p>
				</div>
				<div className="mx-auto max-w-3xl">
					{contactFaq.map((faq, index) => (
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
