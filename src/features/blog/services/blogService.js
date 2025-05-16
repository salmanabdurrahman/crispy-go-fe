import apiClient from "../../../constants/apiClient.js";

const fetchAllBlogs = async () => {
	try {
		const response = await apiClient.get("/blogs");
		return response.data;
	} catch (error) {
		const errorResponse = error.response;
		return errorResponse.data;
	}
};

export { fetchAllBlogs };
