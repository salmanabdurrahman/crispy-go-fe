import { useState } from "react";
import { sendOrderForm } from "../services/orderService.js";

const useOrder = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	const submitOrder = async formData => {
		try {
			setIsLoading(true);
			const result = await sendOrderForm(formData);

			if (result.success) {
				setSuccessMessage(result.message);
			} else {
				setErrorMessage(result.message);
			}
		} catch (error) {
			setErrorMessage(error);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, successMessage, errorMessage, submitOrder };
};

export default useOrder;
