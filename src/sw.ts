/// <reference lib="webworker" />

self.addEventListener("install", _event => {
  console.log("Service worker installing...");
  // self.skipWaiting();
});

self.addEventListener("activate", _event => {
  console.log("Service worker activating...");
  // event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", _event => {
  // Pass through
});
