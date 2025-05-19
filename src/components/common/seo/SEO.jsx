import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { FRONTEND_BASE_URL } from "../../../constants/appConfig.js";

const SEO = ({ description, keywords, title }) => {
	const { pathname } = useLocation();
	const currentUrl = `${FRONTEND_BASE_URL}${pathname}`;
	const smallFavicon = `${FRONTEND_BASE_URL}/icons/favicon-16x16.png`;
	const largeFavicon = `${FRONTEND_BASE_URL}/icons/favicon-32x32.png`;

	const id = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Crispy Go",
		url: currentUrl,
		description: description,
		publisher: {
			"@type": "Organization",
			name: "Crispy Go",
			logo: {
				"@type": "ImageObject",
				url: `${FRONTEND_BASE_URL}/icons/favicon-32x32.png`,
			},
		},
	};

	return (
		<Helmet>
			{/* Title */}
			<title>{title}</title>
			{/* Basic Meta Tags */}
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content="Salman Abdurrahman" />
			{/* <meta name="google-signin-client_id" content="" /> */}
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={currentUrl} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={largeFavicon} />
			<meta property="og:locale" content="id_ID" />
			{/* Structured Data */}
			<script type="application/ld+json">{JSON.stringify(id)}</script>
			{/* Canonical URL */}
			<link rel="canonical" href={currentUrl} />
			{/* Favicon */}
			<link rel="icon" type="image/png" sizes="32x32" href={largeFavicon} />
			<link rel="icon" type="image/png" sizes="16x16" href={smallFavicon} />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#ffffff" />
			{/* Security Headers */}
			<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
			<meta name="referrer" content="strict-origin-when-cross-origin" />
			{/* Robots */}
			<meta name="robots" content="index, follow" />
		</Helmet>
	);
};

export default SEO;
