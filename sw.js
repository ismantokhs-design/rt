// assets/sw.js atau sw.js di root folder
const CACHE_NAME = 'rt-ku-cache-v1';
const urlsToCache = [
    './index.html',
    './pages/login.html',
    './pages/absensi.html',
    './pages/rapat.html',
    './pages/keuangan.html',
    './assets/css/style.css',
    './assets/js/navigation.js',
    './manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache dibuka');
                return cache.addAll(urlsToCache);
            })
    );
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