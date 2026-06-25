/* Noor al-Hidayah — self-destructing service worker.
   The PWA cache caused stale content, so this worker now removes itself:
   it deletes all caches, unregisters, and reloads open pages so everyone
   always gets the latest version straight from the network. */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
      await self.clients.claim();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach(c => c.navigate(c.url));
    } finally {
      await self.registration.unregister();
    }
  })());
});

// Always go to the network; never serve from cache.
self.addEventListener('fetch', () => {});
