import apiClient from "../../../constants/apiClient.js";

const fetchAllMenus = async () => {
	try {
		const response = await apiClient.get("/menus");
		return response.data;
	} catch (error) {
		const errorResponse = error.response;
		return errorResponse.data;
	}
};

export { fetchAllMenus };
