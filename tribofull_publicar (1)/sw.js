// Service worker minimo: apenas repassa as requisicoes para a rede (nao guarda nada em cache).
// Serve para o Chrome do Android tratar o site como app instalavel e usar os icones do manifesto.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request));
});
