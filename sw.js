// sw.js - Service Worker RT-Ku (Revisi Bersih & Aman)
const CACHE_NAME = 'rt-ku-cache-v6';
const urlsToCache = [
    './index.html',
    './home.html',
    './pages/absensi.html',
    './pages/rapat.html',
    './assets/css/style.css',
    './assets/js/navigation.js',
    './manifest.json',
    './assets/icons/icon-192.png',
    './assets/icons/icon-512.png'
];

// 1. IMPORT FIREBASE (COMPAT) UNTUK BACKGROUND NOTIFICATION
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Inisialisasi Firebase di Service Worker
firebase.initializeApp({
    apiKey: "AIzaSyBx2AF0YRpOEq--q__dn39NwiNCKXvKutM",
    authDomain: "erte-979ca.firebaseapp.com",
    projectId: "erte-979ca",
    storageBucket: "erte-979ca.firebasestorage.app",
    messagingSenderId: "329513636032",
    appId: "1:329513636032:web:25a10b627b91db2bbb5d25"
});

const messaging = firebase.messaging();

// Tangkap Notifikasi saat Aplikasi Ditutup / di Latar Belakang (Background)
messaging.onBackgroundMessage((payload) => {
    console.log('[sw.js] Menerima pesan background:', payload);
    const notificationTitle = payload.notification.title || 'Informasi RT-Ku';
    const notificationOptions = {
        body: payload.notification.body || 'Ada pengumuman baru untuk warga.',
        icon: './assets/icons/icon-192.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});

// 2. INSTALL SERVICE WORKER & CACHE SECARA AMAN (Mencegah error 404 total)
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache RT-Ku dibuka');
                // Menggunakan cache.add satu per satu agar jika ada satu file yang 404, tidak membatalkan cache file lainnya
                return Promise.all(
                    urlsToCache.map(url => {
                        return cache.add(url).catch(err => {
                            console.warn(`Gagal mencache file opsional/belum ada: ${url}`, err);
                        });
                    })
                );
            })
    );
    self.skipWaiting();
});

// 3. ACTIVATE SERVICE WORKER & BERSIHKAN CACHE LAMA
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

// 4. FETCH CACHE DENGAN STRATEGI AMAN
self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    // Jangan cache request dari luar (Firebase, CDN, dll)
    if (requestUrl.origin !== location.origin) {
        event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
        return;
    }

    // Strategi Network First untuk file HTML
    if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                })
                .catch(() => {
                    return caches.match(event.request);
                })
        );
        return;
    }

    // Strategi Cache First untuk Asset (CSS, JS, Gambar)
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});