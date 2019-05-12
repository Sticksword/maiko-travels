importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2af6daa8ea11e507f0fe.js",
    "revision": "1696a567c684f56d2b6474c902d83657"
  },
  {
    "url": "/_nuxt/5a41fc573a06bc6f4255.js",
    "revision": "96daf3e8b9b05b189fd5b542940c72ce"
  },
  {
    "url": "/_nuxt/6d407105d241fd903069.js",
    "revision": "94520ee6fd3d75612e43cea22db25bcc"
  },
  {
    "url": "/_nuxt/96fc2a1667eb0974859d.js",
    "revision": "46fe94e9fbad6a29c6c111cf3b397191"
  },
  {
    "url": "/_nuxt/a0590b90d3940089b2b5.js",
    "revision": "96900fe8e2a3a3ba1537e47c1cbac53b"
  },
  {
    "url": "/_nuxt/a2d9a781ccfbe84477d5.js",
    "revision": "ef6dd2460d60dd02ac988c8bc31897e8"
  },
  {
    "url": "/_nuxt/abed0e6d9a7ffc49ac74.js",
    "revision": "febc80d696710f3dad5b148b3232371b"
  },
  {
    "url": "/_nuxt/b5beac92e7e37f8e483f.js",
    "revision": "9ff12969d3ef847a820da1444b78a066"
  },
  {
    "url": "/_nuxt/f02f5683537e0b34b088.js",
    "revision": "fed57b97d1297aa129edf5d921bc97a8"
  },
  {
    "url": "/_nuxt/fa349251102b7a6b0081.js",
    "revision": "af383105f7af2ff1370c8e9cc76d5e35"
  }
], {
  "cacheId": "travel-blog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
