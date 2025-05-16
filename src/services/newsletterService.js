import apiClient from "../constants/apiClient.js";

const sendEmailNewsletter = async payload => {
	try {
		const response = await apiClient.post("/newsletter", payload);
		return response.data;
	} catch (error) {
		const errorResponse = error.response;
		return errorResponse.data;
	}
};

export { sendEmailNewsletter };
