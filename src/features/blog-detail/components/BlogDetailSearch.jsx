import { Search } from "lucide-react";

const BlogDetailSearch = ({ query, setQuery }) => {
	return (
		<div className="mb-8">
			<div className="relative">
				<input
					type="text"
					placeholder="Cari artikel..."
					className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-crispygo-orange"
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
				<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
			</div>
		</div>
	);
};

export default BlogDetailSearch;
