// sw.js (Di root folder utama)
const CACHE_NAME = 'rt-ku-cache-v2';
const urlsToCache = [
    '/rt/',
    '/rt/index.html',
    '/rt/pages/login.html',
    '/rt/pages/absensi.html',
    '/rt/pages/rapat.html',
    '/rt/pages/keuangan.html',
    '/rt/assets/css/style.css',
    '/rt/assets/js/navigation.js',
    '/rt/manifest.json',
    '/rt/assets/icons/icon-192.png',
    '/rt/assets/icons/icon-512.png'
];

// Install Service Worker & Cache All Files
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

// Activate & Clean Old Caches
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

// Fetch Strategy: Cache First, falling back to Network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
            .catch(() => {
                // Opsional: Anda bisa menampilkan halaman offline khusus di sini jika diperlukan
            })
    );
});