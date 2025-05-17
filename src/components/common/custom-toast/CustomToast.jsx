import { Toaster } from "react-hot-toast";

const CustomToast = () => {
	return <Toaster position="top-right" reverseOrder={false} toastOptions={{ duration: 3500, removeDelay: 1000 }} />;
};

export default CustomToast;
