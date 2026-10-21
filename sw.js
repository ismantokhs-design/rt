// sw.js - Service Worker RT-Ku
const CACHE_NAME = 'rt-ku-cache-v4';
const urlsToCache = [
    './index.html',     // Berfungsi sebagai Halaman Login utama
    './home.html',      // Berfungsi sebagai Halaman Beranda / Dashboard
    './pages/absensi.html',
    './pages/rapat.html',
    './pages/keuangan.html',
    './assets/css/style.css',
    './assets/js/navigation.js',
    './manifest.json',
    './assets/icons/icon-192.png',
    './assets/icons/icon-512.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache RT-Ku berhasil dibuka');
                return cache.addAll(urlsToCache);
            })
            .catch((err) => {
                console.error('Gagal melakukan caching saat install:', err);
            })
    );
    self.skipWaiting();
});

// Activate Service Worker & Bersihkan Cache Lama
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
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

// Fetch Cache (Cache First, falling back to Network)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});