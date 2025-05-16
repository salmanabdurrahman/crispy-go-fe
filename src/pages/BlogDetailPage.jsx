"use client";

import { useParams } from "react-router-dom";
import BlogDetailHero from "../features/blog-detail/components/BlogDetailHero.jsx";
import BlogDetailArticle from "../features/blog-detail/components/BlogDetailArticle.jsx";

const BlogDetailPage = () => {
	const { slug } = useParams();

	// This would normally come from a database or CMS
	const article = {
		slug: slug,
		title: "Rahasia Tekstur Renyah yang Sempurna",
		date: "10 Mei 2025",
		author: "Chef Budi",
		category: "Tips & Trik",
		content: `
      <p>Makanan crispy selalu menjadi favorit banyak orang. Tekstur renyah yang dipadukan dengan rasa gurih menciptakan pengalaman kuliner yang tak terlupakan. Namun, menciptakan tekstur renyah yang sempurna bukanlah hal yang mudah. Diperlukan teknik dan pengetahuan khusus untuk mendapatkan hasil yang maksimal.</p>
      
      <h2>Pemilihan Bahan</h2>
      <p>Langkah pertama untuk mendapatkan tekstur renyah yang sempurna adalah pemilihan bahan yang tepat. Untuk coating, gunakan tepung yang memiliki kandungan protein rendah hingga sedang. Tepung terigu dengan protein rendah akan menghasilkan tekstur yang lebih renyah dibandingkan tepung dengan protein tinggi.</p>
      <p>Selain itu, penambahan tepung maizena atau tepung tapioka juga dapat meningkatkan kerenyahan. Perbandingan ideal adalah 2:1 untuk tepung terigu dan tepung maizena.</p>
      
      <h2>Teknik Marinasi</h2>
      <p>Untuk bahan utama seperti ayam atau ikan, proses marinasi sangat penting. Marinasi tidak hanya memberikan rasa, tetapi juga membantu menjaga kelembapan bahan sehingga tetap juicy di dalam meskipun renyah di luar.</p>
      <p>Gunakan bahan marinasi yang mengandung asam seperti yogurt, buttermilk, atau lemon untuk membantu melunakkan protein dan membuat daging lebih tender.</p>
      
      <h2>Double Coating</h2>
      <p>Teknik double coating adalah salah satu rahasia untuk mendapatkan lapisan crispy yang tebal dan renyah. Caranya:</p>
      <ol>
        <li>Balurkan bahan dalam tepung kering</li>
        <li>Celupkan ke dalam campuran telur atau buttermilk</li>
        <li>Balurkan kembali dalam tepung kering</li>
      </ol>
      <p>Pastikan untuk menekan-nekan tepung pada bahan agar menempel dengan baik.</p>
      
      <h2>Suhu Minyak yang Tepat</h2>
      <p>Suhu minyak adalah faktor krusial dalam menghasilkan tekstur renyah. Minyak yang terlalu dingin akan membuat makanan menyerap terlalu banyak minyak dan menjadi berminyak. Sementara minyak yang terlalu panas akan membuat bagian luar cepat gosong sementara bagian dalam belum matang.</p>
      <p>Suhu ideal untuk menggoreng makanan crispy adalah sekitar 175-190°C. Gunakan termometer minyak untuk hasil yang lebih akurat.</p>
      
      <h2>Jangan Terlalu Banyak Menggoreng Sekaligus</h2>
      <p>Menggoreng terlalu banyak bahan sekaligus akan menurunkan suhu minyak secara drastis, yang dapat memengaruhi hasil akhir. Goreng dalam batch kecil untuk menjaga suhu minyak tetap stabil.</p>
      
      <h2>Penirisan yang Tepat</h2>
      <p>Setelah digoreng, tiriskan makanan pada rak penirisan atau di atas tisu dapur untuk menyerap kelebihan minyak. Hindari menumpuk makanan yang baru digoreng karena dapat menimbulkan kelembapan dan mengurangi kerenyahan.</p>
      
      <h2>Kesimpulan</h2>
      <p>Menciptakan tekstur renyah yang sempurna membutuhkan perhatian pada setiap detail, mulai dari pemilihan bahan hingga teknik penggorengan. Dengan mengikuti tips di atas, Anda dapat menghasilkan makanan crispy yang renyah di luar, juicy di dalam, dan tentu saja lezat.</p>
      
      <p>Selamat mencoba dan jangan ragu untuk bereksperimen dengan berbagai bumbu dan bahan untuk menciptakan variasi makanan crispy Anda sendiri!</p>
    `,
		tags: ["Crispy", "Cooking Tips", "Food", "Culinary"],
		comments: 15,
		relatedPosts: [
			{
				slug: "5-saus-pendamping-terbaik",
				title: "5 Saus Pendamping Terbaik untuk Makanan Crispy",
				date: "5 Mei 2025",
				excerpt: "Rekomendasi saus pendamping yang akan meningkatkan cita rasa makanan crispy favorit Anda.",
			},
			{
				slug: "tips-menyimpan-makanan-crispy",
				title: "Tips Menyimpan Makanan Crispy Agar Tetap Renyah",
				date: "25 April 2025",
				excerpt: "Bagaimana cara menyimpan makanan crispy agar tetap renyah dan enak saat dinikmati kembali.",
			},
			{
				slug: "resep-saus-spesial-crispygo",
				title: "Resep Saus Spesial ala CrispyGo",
				date: "15 April 2025",
				excerpt: "Buat sendiri saus spesial ala CrispyGo untuk melengkapi hidangan crispy di rumah Anda.",
			},
		],
	};

	return (
		<>
			<BlogDetailHero article={article} />
			<BlogDetailArticle article={article} />
		</>
	);
};

export default BlogDetailPage;
