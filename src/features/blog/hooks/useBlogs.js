import { useEffect, useState } from "react";
import { fetchAllBlogs } from "../services/blogService.js";

const useBlogs = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getAllBlogs = async () => {
			try {
				setIsLoading(true);
				const result = await fetchAllBlogs();
				setData(result.data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		getAllBlogs();
	}, []);

	return { isLoading, data, error };
};

export default useBlogs;
