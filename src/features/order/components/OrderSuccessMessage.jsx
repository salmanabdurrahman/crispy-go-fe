import { Check } from "lucide-react";

const OrderSuccessMessage = ({ orderNumber, setOrderSuccess }) => {
	return (
		<div className="mx-auto max-w-2xl rounded-lg bg-white p-8 text-center shadow-md">
			<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
				<Check className="h-10 w-10 text-green-600" />
			</div>
			<h2 className="mb-4 text-2xl font-bold">Pesanan Berhasil!</h2>
			<p className="mb-6 text-gray-600">
				Terima kasih telah memesan di CrispyGo. Pesanan Anda telah diterima dan sedang diproses.
			</p>
			<div className="mb-6 rounded-md bg-gray-50 p-4 text-left">
				<p className="font-medium">
					Nomor Pesanan: <span className="text-crispygo-rust">{orderNumber}</span>
				</p>
				<p className="mt-2">Kami akan menghubungi Anda melalui email atau telepon untuk konfirmasi pesanan.</p>
			</div>
			<button onClick={() => setOrderSuccess(false)} className="btn btn-primary">
				Pesan Lagi
			</button>
		</div>
	);
};

export default OrderSuccessMessage;
