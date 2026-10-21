const CACHE_NAME = 'rt-ku-cache-v3';
const urlsToCache = [
    './index.html',
    './pages/login.html',
    './pages/absensi.html',
    './pages/rapat.html',
    './pages/keuangan.html',
    './assets/css/style.css',
    './assets/js/navigation.js',
    './assets/js/firebase-config.js',
    './manifest.json',
    './assets/icons/icon-192.png',
    './assets/icons/icon-512.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache berhasil dibuka');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch Cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});