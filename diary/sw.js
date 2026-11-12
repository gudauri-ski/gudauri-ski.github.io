// Ski Diary works online only now. This file only removes the old offline helper from phones that still have it:
// it clears the saved copies and unregisters itself. The page no longer installs it.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
