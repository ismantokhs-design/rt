const CACHE_NAME = 'rt-ku-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/pages/login.html',
  '/pages/absensi.html',
  '/pages/rapat.html',
  '/pages/keuangan.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/assets/js/firebase-config.js',
  '/manifest.json'
];

// Saat Service Worker diinstal
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Mengunduh cache aplikasi...');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Saat Service Worker diaktifkan
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Menghapus cache lama:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Mengambil data dari cache saat offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      if (event.request.mode === 'navigate') {
        return caches.match('/pages/login.html');
      }
    })
  );
});