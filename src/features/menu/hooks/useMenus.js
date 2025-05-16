import { useEffect, useState } from "react";
import { fetchAllMenus } from "../services/menuService.js";

const useMenus = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getAllMenus = async () => {
			try {
				setIsLoading(true);
				const result = await fetchAllMenus();
				setData(result.data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		getAllMenus();
	}, []);

	return { isLoading, data, error };
};

export default useMenus;
