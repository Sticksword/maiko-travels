importScripts('/maiko-travels/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/maiko-travels/_nuxt/1da477e548850c1b3fca.js",
    "revision": "32b665c8f1acce358cb9998a7d78f4f6"
  },
  {
    "url": "/maiko-travels/_nuxt/270d6cad6d69bef2f387.js",
    "revision": "f7c9c542dfcd468dff31676f8d3e3acf"
  },
  {
    "url": "/maiko-travels/_nuxt/66594d3ebeb601015ba3.js",
    "revision": "0cf2d5814fe121c80ef23003f47ec56e"
  },
  {
    "url": "/maiko-travels/_nuxt/6acdfdee377988ea47e9.js",
    "revision": "99776209db32c06a733be5c9b0cf6ad8"
  },
  {
    "url": "/maiko-travels/_nuxt/7da2b28c5eedba55c6c3.js",
    "revision": "3b0a89fe223c96108a139dd1fde224df"
  },
  {
    "url": "/maiko-travels/_nuxt/9a6727ecbc1b5aa42a48.js",
    "revision": "70cc8560b30203cceab39c1ef94aaf0b"
  },
  {
    "url": "/maiko-travels/_nuxt/a108b6e3eacdea016c48.js",
    "revision": "6fb530014942089a640658000111407a"
  },
  {
    "url": "/maiko-travels/_nuxt/a52553bb9c05218769bd.js",
    "revision": "962e9481767839259c0a91382558eb31"
  },
  {
    "url": "/maiko-travels/_nuxt/b0884ab40d166350035a.js",
    "revision": "c134cb24b411b42bc926b40310c26b9a"
  },
  {
    "url": "/maiko-travels/_nuxt/b6291a46c0d7a3f9497b.js",
    "revision": "549e96434c8a0904efcb97cfbb7b2505"
  },
  {
    "url": "/maiko-travels/_nuxt/bb566ea23726b58e7d01.js",
    "revision": "2f40d4b71de8d9921fbf4cd1ba1dcee9"
  },
  {
    "url": "/maiko-travels/_nuxt/cab385062d72bcbd4a7b.js",
    "revision": "159a518a9fed53d78780a22e3b51dde2"
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
