const cacheName = 'app-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // הוסף כאן את כל הקבצים והמשאבים שברצונך לשמור במטמון
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});