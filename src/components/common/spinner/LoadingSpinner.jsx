const LoadingSpinner = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-amber-50">
			<div className="h-16 w-16 animate-spin rounded-full border-4 border-crispygo-cream border-t-crispygo-rust"></div>
			<p className="mt-4 font-medium text-crispygo-dark">Memuat...</p>
		</div>
	);
};

export default LoadingSpinner;
