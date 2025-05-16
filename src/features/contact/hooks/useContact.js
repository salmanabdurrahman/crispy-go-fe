import { useState } from "react";
import { sendContactForm } from "../services/contactService.js";

const useContact = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	const submitContact = async formData => {
		try {
			setIsLoading(true);
			const result = await sendContactForm(formData);

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

	return { isLoading, successMessage, errorMessage, submitContact };
};

export default useContact;
