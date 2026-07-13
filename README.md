# 👑 POS Sulthan BU Phone

Sistem Point of Sale (kasir) untuk **Sulthan BU Phone** — Rajanya Jual Beli HP Semarang. Tema merah + emas + hitam, matching website toko.

## File
- `config.js` — Konfigurasi toko + tema (edit di sini)
- `login.html` — Halaman login (Firebase Auth)
- `index.html` — Halaman kasir (POS)
- `reports.html` — Halaman laporan penjualan

## Fitur
- 🔐 Login Firebase Auth
- 🛒 Kasir: tambah/edit/hapus produk, kategori, stok auto-update
- ⚠️ Alert stok menipis
- 💳 Payment: Cash / QRIS / Transfer + validasi uang kurang
- 🖨️ Struk thermal 58/80mm + Print + PDF
- 📊 Laporan Harian/Mingguan/Bulanan/Tahunan (auto-detect)
- 📋 History + Reprint
- 🏆 Best Seller + Export Excel
- 🎨 Tema `sulthan` (merah #E61E25 + emas #FFCC00 + hitam) match website
- 📱 Responsive (mobile + desktop)

## Setup (3 Langkah)
1. **Edit `config.js`** — isi info toko + Firebase config
2. **Setup Firebase** — buat project, enable Email/Password auth, buat Firestore + rules (`allow read, write: if request.auth != null`)
3. **Deploy** — Cloudflare Pages / Vercel (static site, no build)

## Deploy
- Build command: (kosongkan)
- Output directory: `/` (root)
- Production branch: `main`

## Kontak
Sulthan BU Phone · Jl. Syuhada Raya No. 32, Tlogosari, Semarang · WA 0815-8585-7577 · Buka 24 Jam
