import axios from "axios";
import { API_TOKEN, BASE_URL } from "./appConfig.js";

const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${API_TOKEN}`,
	},
});

export default apiClient;
