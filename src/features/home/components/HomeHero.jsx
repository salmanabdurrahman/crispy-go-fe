import { Link } from "react-router-dom";

const HomeHero = () => {
	return (
		<section className="relative overflow-hidden bg-crispygo-dark py-20 text-white md:py-32">
			{/* <div className="absolute inset-0 opacity-30">
				<img
					src="/placeholder.svg?height=800&width=1600"
					alt="Crispy Food Background"
					className="h-full w-full object-cover"
				/>
			</div> */}
			<div className="container-custom relative z-10">
				<div className="grid items-center gap-12 md:grid-cols-2">
					<div className="space-y-6">
						<h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
							Renyah di Dalam <span className="text-crispygo-orange">Lembut di Luar</span>
						</h1>
						<p className="text-lg opacity-90 md:text-xl">
							Nikmati sensasi renyah dan gurih dari CrispyGo, makanan crispy premium dengan cita rasa
							autentik yang akan memanjakan lidah Anda.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link to="/menus" className="btn btn-primary">
								Lihat Menu
							</Link>
							<Link
								to="/locations"
								className="btn btn-outline border-white text-white hover:bg-white hover:text-crispygo-dark"
							>
								Temukan Outlet
							</Link>
						</div>
					</div>
					<div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-lg md:h-[400px]">
						<img
							src="/images/chicken.webp"
							alt="CrispyGo Logo"
							title="CrispyGo Logo"
							className="w-[70%] rounded-lg object-cover md:w-[85%]"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
