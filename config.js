// ╔════════════════════════════════════════════════╗
// ║      MASTER POS — CONFIGURATION TEMPLATE        ║
// ║                                                ║
// ║  Edit this file to customize the POS for a     ║
// ║  new client. All store-specific values live    ║
// ║  here — no need to touch the HTML files.       ║
// ╚════════════════════════════════════════════════╝

const CONFIG = {

    // ─── Store Info ───
    storeName:    "SULTHAN SHOP BU PHONE",             // Tampil di header & struk
    storeJargon:  "Rajanya Jual Beli HP Semarang", // Tampil di struk (italic)
    storeAddress: "Jl. Syuhada Raya No. 32, Tlogosari Kulon, Pedurungan, Semarang",
    storeHours:   "Buka 24 Jam Non-Stop",
    storeWA:      "0815-8585-7577",
    storeIG:      "@sulthanbuphone",
    storeWebsite: "sulthanbuphone.we.id",

    // ─── Theme ───
    // Warna utama: 'emerald', 'blue', 'purple', 'orange', 'rose', 'cyan', 'amber', 'magenta', 'sulthan'
    theme: 'sulthan',

    // ─── Firebase Config ───
    // Buat project baru di https://console.firebase.google.com
    // Copy config dari Project Settings → Web App
    firebase: {
        apiKey:            "AIzaSyDogXSXDHNEe10Y0o1J_62D6vjuDm9Yhws",
        authDomain:        "pos-sulthan-buphone.firebaseapp.com",
        projectId:         "pos-sulthan-buphone",
        storageBucket:     "pos-sulthan-buphone.firebasestorage.app",
        messagingSenderId: "1001698740050",
        appId:             "1:1001698740050:web:70127a5e45223a31dddc8b"
    },

    // ─── Receipt Settings ───
    receipt: {
        width: 80,           // mm — 58 or 80 (thermal printer)
        showFooter: true,    // tampilkan alamat/jam/WA/IG di struk
    },

    // ─── Admin Default ───
    // Login pakai user yang dibuat di Firebase Console → Authentication → Users
    // JANGAN taruh password asli di sini (repo publik). Hint email aja.
    adminHint: {
        email: "admin@sulthanbuphone.com",
        password: ""
    }
};

// ─── Theme Colors ───
const THEMES = {
    emerald: { primary: 'emerald', hex: '#10b981', bg: '#064e3b' },
    blue:    { primary: 'blue',    hex: '#3b82f6', bg: '#1e3a8a' },
    purple:  { primary: 'purple',  hex: '#8b5cf6', bg: '#4c1d95' },
    orange:  { primary: 'orange',  hex: '#f97316', bg: '#7c2d12' },
    rose:    { primary: 'rose',    hex: '#f43f5e', bg: '#881337' },
    cyan:    { primary: 'cyan',    hex: '#06b6d4', bg: '#0e7490' },
    amber:   { primary: 'amber',   hex: '#f59e0b', bg: '#78350f' },
    magenta: { primary: 'magenta', hex: '#e11d8f', bg: '#831843' },
    // Tema custom Sulthan BU Phone — merah + emas + hitam (match website)
    // primary='emerald' biar nama class dinamis (bg-emerald-600 dll) resolve ke utility asli,
    // lalu di-override jadi merah+emas via CSS injection di index.html & reports.html
    sulthan: { primary: 'emerald', hex: '#E61E25', bg: '#4a0a0d', gold: '#FFCC00' },
};
