// Service Worker — POS Sulthan BU Phone
const CACHE = 'pos-sulthan-v2';
const ASSETS = [
  './',
  './login',
  './reports',
  './config.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install: cache app shell
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

// Activate: buang cache lama
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network-first buat Firebase/API, cache-first buat asset statis
self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  // Jangan cache Firebase / Google API (harus selalu fresh)
  if (url.includes('firestore') || url.includes('googleapis') || url.includes('firebase') || url.includes('gstatic')) {
    return; // biarin browser handle langsung ke network
  }
  // Cache-first buat asset lokal
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request).then((res) => {
      const clone = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, clone)).catch(() => {});
      return res;
    }).catch(() => cached))
  );
});
