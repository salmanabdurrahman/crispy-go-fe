import apiClient from "../../../constants/apiClient.js";

const fetchBlogDetail = async slug => {
	try {
		const response = await apiClient.get(`/blogs/${slug}`);
		return response.data;
	} catch (error) {
		const errorResponse = error.response;
		return errorResponse.data;
	}
};

export { fetchBlogDetail };
