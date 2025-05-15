import { Award, Users, Heart, Target } from "lucide-react";

const AboutValues = () => {
	return (
		<section className="section">
			<div className="container-custom">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2>Nilai-Nilai Kami</h2>
					<p className="mt-4 text-gray-600">
						Prinsip-prinsip yang menjadi landasan dalam setiap langkah kami
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-4">
					<div className="card p-6 text-center">
						<div className="bg-crispygo-cream mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
							<Award className="text-crispygo-rust h-8 w-8" />
						</div>
						<h3 className="mb-2 text-xl font-bold">Kualitas</h3>
						<p className="text-gray-600">
							Kami berkomitmen untuk selalu menghadirkan produk dengan kualitas terbaik.
						</p>
					</div>
					<div className="card p-6 text-center">
						<div className="bg-crispygo-cream mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
							<Heart className="text-crispygo-rust h-8 w-8" />
						</div>
						<h3 className="mb-2 text-xl font-bold">Passion</h3>
						<p className="text-gray-600">
							Kami memiliki passion yang besar dalam menciptakan pengalaman kuliner terbaik.
						</p>
					</div>
					<div className="card p-6 text-center">
						<div className="bg-crispygo-cream mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
							<Target className="text-crispygo-rust h-8 w-8" />
						</div>
						<h3 className="mb-2 text-xl font-bold">Inovasi</h3>
						<p className="text-gray-600">
							Kami terus berinovasi untuk menghadirkan menu-menu baru yang menggugah selera.
						</p>
					</div>
					<div className="card p-6 text-center">
						<div className="bg-crispygo-cream mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
							<Users className="text-crispygo-rust h-8 w-8" />
						</div>
						<h3 className="mb-2 text-xl font-bold">Pelayanan</h3>
						<p className="text-gray-600">
							Kami selalu berusaha memberikan pelayanan terbaik untuk kepuasan pelanggan.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutValues;
