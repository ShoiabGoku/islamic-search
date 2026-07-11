/* Noor al-Hidayah service worker — v4 (app mode)
   Strategy: NETWORK-FIRST. When online, every file is fetched fresh from the
   server (so visitors always see the latest version — no stale-cache problem).
   Each successful fetch is saved as a fallback copy, which is served only when
   the visitor is offline. Cross-origin requests (prayer-times API, fonts,
   audio) are not intercepted at all. */
const CACHE = 'noor-v4';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;   // leave APIs/fonts/audio alone

  event.respondWith(
    fetch(event.request).then(res => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(event.request, copy));
      }
      return res;
    }).catch(() =>
      caches.match(event.request).then(hit => hit || caches.match('./index.html'))
    )
  );
});
