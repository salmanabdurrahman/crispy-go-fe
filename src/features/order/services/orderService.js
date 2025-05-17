import apiClient from "../../../constants/apiClient.js";

const sendOrderForm = async payload => {
	try {
		const response = await apiClient.post("/order", payload);
		return response.data;
	} catch (error) {
		const errorResponse = error.response;
		return errorResponse.data;
	}
};

export { sendOrderForm };
