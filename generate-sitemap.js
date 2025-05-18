const { Sitemap } = require("react-router-sitemap");
const path = require("path");

const sitemap = new Sitemap([
	"/",
	"/menus",
	"/blogs",
	"/blogs/apa-yang-harus-dimiliki-website-untuk-bisnis-makanan",
	"/blogs/strategi-soft-launching-yang-efektif-untuk-bisnis-kuliner",
	"/blogs/7-tips-membuat-konten-promosi-kuliner-yang-bikin-ngiler-di-sosmed",
	"/blogs/mengapa-produk-ayam-goreng-harus-punya-identitas-yang-kuat",
	"/locations",
	"/about",
	"/contact",
	"/order",
])
	.build("https://crispygo.store")
	.save(path.resolve(__dirname, "./public/sitemap.xml"));

console.log("✅ Sitemap generated at ./public/sitemap.xml");
