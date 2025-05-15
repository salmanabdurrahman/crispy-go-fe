const LoadingSpinner = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-amber-50">
			<div className="border-crispygo-cream border-t-crispygo-rust h-16 w-16 animate-spin rounded-full border-4"></div>
			<p className="text-crispygo-dark mt-4 font-medium">Loading...</p>
		</div>
	);
};

export default LoadingSpinner;
