import { useState } from "react";
import { sendEmailNewsletter } from "../services/newsletterService.js";

const useNewsletter = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	const submitNewsletter = async formData => {
		try {
			setIsLoading(true);
			const result = await sendEmailNewsletter(formData);

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

	return { isLoading, successMessage, errorMessage, submitNewsletter };
};

export default useNewsletter;
