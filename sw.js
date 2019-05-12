importScripts('/maiko-travels/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/maiko-travels/_nuxt/1e3f64e6458799677f92.js",
    "revision": "e94eb0f4dd28844a87472fa656222057"
  },
  {
    "url": "/maiko-travels/_nuxt/2af6daa8ea11e507f0fe.js",
    "revision": "1696a567c684f56d2b6474c902d83657"
  },
  {
    "url": "/maiko-travels/_nuxt/5a41fc573a06bc6f4255.js",
    "revision": "96daf3e8b9b05b189fd5b542940c72ce"
  },
  {
    "url": "/maiko-travels/_nuxt/6d407105d241fd903069.js",
    "revision": "94520ee6fd3d75612e43cea22db25bcc"
  },
  {
    "url": "/maiko-travels/_nuxt/96fc2a1667eb0974859d.js",
    "revision": "46fe94e9fbad6a29c6c111cf3b397191"
  },
  {
    "url": "/maiko-travels/_nuxt/abed0e6d9a7ffc49ac74.js",
    "revision": "febc80d696710f3dad5b148b3232371b"
  },
  {
    "url": "/maiko-travels/_nuxt/b5beac92e7e37f8e483f.js",
    "revision": "9ff12969d3ef847a820da1444b78a066"
  },
  {
    "url": "/maiko-travels/_nuxt/edb527c75c8bcc1f28b8.js",
    "revision": "ca87f65f55fa0710b9436c7d2ce82f8e"
  },
  {
    "url": "/maiko-travels/_nuxt/f02f5683537e0b34b088.js",
    "revision": "fed57b97d1297aa129edf5d921bc97a8"
  },
  {
    "url": "/maiko-travels/_nuxt/fa349251102b7a6b0081.js",
    "revision": "af383105f7af2ff1370c8e9cc76d5e35"
  }
], {
  "cacheId": "travel-blog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/maiko-travels/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/maiko-travels/.*'), workbox.strategies.networkFirst({}), 'GET')
