# Crispy Go Frontend

<!-- <div align="center">
  <img src="https://media.tenor.com/J6dj2ONmbGQAAAAi/fried-chicken-chicken.gif" alt="Crispy Chicken" width="200"/>
</div> -->

## 📝 Deskripsi

**Crispy Go** adalah website branding sekaligus platform pemesanan ayam goreng krispi kekinian berbasis web. Website ini dirancang untuk memperkuat identitas brand **Crispy Go** sebagai pilihan utama pelanggan dalam mencari ayam krispi yang gurih, renyah, dan menggoda lidah.

Website ini menampilkan antarmuka modern dan ramah pengguna yang dibangun dengan **ReactJS** dan **TailwindCSS**, dengan fokus utama pada pengalaman pengguna yang cepat dan responsif.

## 🔍 Navigasi & Halaman

Website terdiri dari beberapa halaman utama yang bisa diakses pengguna melalui navigasi:

- **Beranda:** Halaman utama yang menyambut pengguna dengan informasi singkat dan ajakan untuk memesan.
- **Menu:** Menampilkan daftar varian ayam krispi beserta deskripsi dan harga.
- **Blog:** Berisi artikel menarik seputar makanan, gaya hidup, dan tips seputar dunia crispy.
- **Lokasi:** Menampilkan cabang outlet Crispy Go beserta peta lokasi atau alamat.
- **Tentang Kami:** Halaman yang menjelaskan visi, misi, dan cerita di balik brand Crispy Go.
- **Kontak:** Menyediakan informasi kontak resmi seperti email, telepon, atau formulir feedback.
- **Pesan Sekarang:** Tombol call-to-action berwarna mencolok yang mengarahkan langsung ke halaman pemesanan online.

## ⚙️ Cara Menjalankan

1.  **Clone repo-nya**

    ```bash
    git clone https://github.com/salmanabdurrahman/crispy-go-fe.git
    cd crispy-go-fe
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Setup environment variable**

Buat file `.env` dan isi seperti pada file `.env.example`. Jangan lupa sesuaikan untuk isinya:

- `VITE_API_BASE_URL`: URL base untuk mengakses API aplikasi. Kamu dapat melihat kode API-nya di [repo berikut](https://github.com/salmanabdurrahman/crispy-go-be).
- `FRONTEND_BASE_URL`: URL base untuk mengakses website frontend kamu.
- `VITE_API_TOKEN`: Token untuk autentikasi akses API.
- `VITE_TRACKING_ID`: ID untuk pelacakan analitik. Kamu dapat menggunakan Google Analytics untuk membuatnya.
- `VITE_STORAGE_URL`: URL untuk akses penyimpanan data.

4.  **Jalankan dev server**

    ```bash
    npm run dev
    ```

5.  **Akses di browser**

    Buka `http://localhost:5173` 🚀
