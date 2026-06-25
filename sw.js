/* Noor al-Hidayah service worker — network-first so updates always show */
const CACHE = 'noor-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './library/quran.js',
  './library/nahj.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    // Network-first: always fetch the latest when online, fall back to cache offline.
    e.respondWith(
      fetch(e.request).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
    );
  } else {
    // Cross-origin (fonts, audio): cache-first is fine.
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
  }
});
