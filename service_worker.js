'use strict';
const version = 1;

const resources = [
  // Internal
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/favicon-192.png',
  '/img/monogram.svg',
  '/img/portrait.jpg',
  '/img/google-scholar.svg',
  '/img/github.svg',
  '/img/linkedin.svg',
  '/img/facebook.svg',
  '/img/email.svg',

  // External
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.googleapis.com/css?family=Varela',
  'https://unpkg.com/material-components-web@latest/dist/material-components-web.css',
  'https://unpkg.com/material-components-web@latest/dist/material-components-web.js',
];

self.addEventListener('install', event => event.waitUntil((async () => {
  const cache = await caches.open(version.toString());
  await cache.addAll(resources);
})()));

self.addEventListener('fetch', event => event.respondWith((async () => {
  const resp = await caches.match(event.request);
  if (resp) {
    return resp;
  } else {
    const [response, cache] = await Promise.all([
      fetch(event.request),
      caches.open(version.toString()),
    ]);
    cache.put(event.request, response.clone());
    return response;
  }
})()));

self.addEventListener('activate', event => event.waitUntil((async () => {
  const keyList = await caches.keys();
  await Promise.all(keyList.map(async (key) => {
    if (key !== version.toString()) {
      await caches.delete(key);
    }
  }));
})()));
