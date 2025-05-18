const fs = require("fs");
const path = require("path");

const baseUrl = "https://crispygo.store";
const staticRoutes = ["/", "/menus", "/blogs", "/locations", "/about", "/contact", "/order"];

// If you have dynamic routes like "/blogs/:slug"
// you can fetch the slug from your backend here later

const generateSitemapXml = routes => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${routes
	.map(
		route => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>
`
	)
	.join("")}
</urlset>`;

const sitemapContent = generateSitemapXml(staticRoutes);

// Write to public/sitemap.xml
fs.writeFileSync(path.join(__dirname, "./public/sitemap.xml"), sitemapContent);

console.log("✅ Sitemap berhasil dibuat!");
