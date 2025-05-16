import apiClient from "../../../constants/apiClient.js";

const sendContactForm = async payload => {
	try {
		const response = await apiClient.post("/contact", payload);
		return response.data;
	} catch (error) {
		const errorResponse = error.response;
		return errorResponse.data;
	}
};

export { sendContactForm };
