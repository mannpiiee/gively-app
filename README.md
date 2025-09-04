# 🎁 Gively App

✨ Aplikasi **manajemen donasi** kekinian yang dibangun dengan **Laravel** (Backend) & **VueJS** (Frontend)!  
Gively App membantu kamu mengelola, memantau, dan mendistribusikan donasi dengan mudah, transparan, dan efisien.  

## 🚀 Fitur Utama

- 💸 **Manajemen Donasi:** Input, update, & monitoring donasi.
- 👥 **Manajemen Pengguna:** Registrasi, login, dan kelola data user.
- 📊 **Laporan Donasi:** Visualisasi data donasi yang transparan.
- 🔔 **Notifikasi:** Update status donasi & pemberitahuan penting.
- ⚡ **Integrasi Backend & Frontend:** Performa ngebut berkat Laravel & VueJS.

## 🛠️ Teknologi yang Digunakan

- 🐘 **Laravel** – Backend API & manajemen basis data.
- 🖼️ **VueJS** – Frontend interaktif dan responsif.
- 🗃️ **MySQL** – Basis data utama.
- 🔗 **RESTful API** – Komunikasi backend ↔️ frontend.

## 📦 Instalasi & Setup

1. **Clone repository**
    ```bash
    git clone https://github.com/mannpiiee/gively-app.git
    cd gively-app
    ```
2. **Install dependencies backend (Laravel)**
    ```bash
    composer install
    cp .env.example .env
    php artisan key:generate
    ```
3. **Install dependencies frontend (VueJS)**
    ```bash
    cd frontend
    npm install
    npm run serve
    ```
4. **Migrasi Database**
    ```bash
    php artisan migrate
    ```
5. **Jalankan aplikasi**
    - Backend: `php artisan serve`
    - Frontend: `npm run serve` (di folder frontend)

## 🤝 Kontribusi

Kontributor sangat diterima!  
Yuk, open issue atau pull request untuk penambahan fitur, perbaikan bug, atau saran pengembangan.  
Bersama kita buat aplikasi donasi jadi makin bermanfaat! 🚀

## 📄 Lisensi

Aplikasi ini menggunakan lisensi [MIT](LICENSE).

---

🎉 **Gively App** – Solusi donasi yang transparan & efisien.  
Bantu sebarkan kebaikan, mulai dari sini! 🌱
