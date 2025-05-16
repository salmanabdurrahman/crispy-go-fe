import { useEffect, useState } from "react";
import { fetchBlogDetail } from "../services/blogDetailService.js";

const useBlogDetail = slug => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getBlogDetail = async () => {
			try {
				setIsLoading(true);
				const result = await fetchBlogDetail(slug);
				setData(result.data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		getBlogDetail();
	}, [slug]);

	return { isLoading, data, error };
};

export default useBlogDetail;
