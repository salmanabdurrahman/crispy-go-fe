import { Award, Users, Calendar, MessageCircle } from "lucide-react";

const HomeEvents = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="section-title">
					<h2>Cocok Untuk Berbagai Acara</h2>
					<p className="mx-auto mt-4 max-w-3xl text-gray-600">
						CrispyGo hadir untuk melengkapi berbagai momen spesial Anda
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-4">
					<div className="card p-6 text-center">
						<div className="bg-crispygo-cream mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
							<Calendar className="text-crispygo-rust h-8 w-8" />
						</div>
						<h3 className="mb-2 text-lg font-bold">Pesta Ulang Tahun</h3>
						<p className="text-gray-600">Paket spesial untuk merayakan hari spesial Anda</p>
					</div>
					<div className="card p-6 text-center">
						<div className="bg-crispygo-cream mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
							<Users className="text-crispygo-rust h-8 w-8" />
						</div>
						<h3 className="mb-2 text-lg font-bold">Gathering</h3>
						<p className="text-gray-600">Pilihan tepat untuk acara kumpul bersama teman dan keluarga</p>
					</div>
					<div className="card p-6 text-center">
						<div className="bg-crispygo-cream mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
							<Award className="text-crispygo-rust h-8 w-8" />
						</div>
						<h3 className="mb-2 text-lg font-bold">Acara Kantor</h3>
						<p className="text-gray-600">Solusi catering untuk meeting dan acara perusahaan</p>
					</div>
					<div className="card p-6 text-center">
						<div className="bg-crispygo-cream mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
							<MessageCircle className="text-crispygo-rust h-8 w-8" />
						</div>
						<h3 className="mb-2 text-lg font-bold">Hangout</h3>
						<p className="text-gray-600">Tempat nyaman untuk nongkrong bersama teman</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeEvents;
