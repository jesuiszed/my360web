'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "89a431fc2259c01e33c1d20dd2fb76d8",
"version.json": "389a6e6e6f34312743ca5f36467c84b5",
"index.html": "e1431e674759fce692d8538a68b77433",
"/": "e1431e674759fce692d8538a68b77433",
"main.dart.js": "d61b301108b274a692b06d726188c412",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "56128fc6ec7568b99d6fc24cfa34a218",
"assets/AssetManifest.json": "f14ba449f5c508028182781e6e56f83b",
"assets/NOTICES": "a15a984c0db4f716808f493fb454d08b",
"assets/FontManifest.json": "db8f453ee5bd623ef9ffbe9d7a009cf7",
"assets/AssetManifest.bin.json": "fe834674b751db4ff0b9a27935ef6071",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b483d364beef8092ff4fe58adc8787be",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "f315afa1e4da74bb6b69c2a90a5a3b3b",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "6dbe862ca85ee7cac6bf700f52cb804d",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "ae52b4ad53ee1d2215ae862f76b6dd2b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "04d6b35842876ceb2c455f28c8e7d144",
"assets/fonts/MaterialIcons-Regular.otf": "6d9885788682af8f17e2aa0d556dd9d9",
"assets/assets/images/auth_bg_collage.png": "42235fe8a41b843d2321fde3c0038f54",
"assets/assets/lotties/chatbot_icon.json": "2a44049cca11df876688a4a0cf12021e",
"assets/assets/lotties/vr_loading.json": "1e78e48e5463453e825de8785de9a68e",
"assets/assets/lotties/info_animation.json": "417b1f52422f49199a5be9f10937fdc5",
"assets/assets/lotties/chatbot_welcome.json": "6ff44f33d88ae94b119926ed93592ece",
"assets/assets/lotties/loading_dots.json": "f5381165ea473f792913d7aaa421dd99",
"assets/assets/lotties/loading_animation.json": "7b3eddfa65c176b0c339b8c736aea490",
"assets/assets/lotties/speaking_animation.json": "c7edb53a2538e12d9de7f16035340224",
"assets/assets/icons/search.svg": "17c5bc71e358a76ca02d65c207af33c8",
"assets/assets/icons/stream.svg": "071ccf4f08884432ccb37477e65b6a38",
"assets/assets/icons/assistant.svg": "b0183ed5e2cac2a76381df4055932d77",
"assets/assets/icons/home.svg": "4b28899f03c099254f81e023d2d6cefc",
"assets/assets/icons/views.svg": "65b8bb538888e81e7d401888995aa9ab",
"assets/assets/icons/search1.svg": "fa9fe5aad99c0cb11224bf3aa0b52f97",
"assets/assets/icons/vr_3601.svg": "16dd52af13adad73fe91515d24e3e819",
"assets/assets/icons/expand.svg": "76680c13ad066889545035993415e61d",
"assets/assets/icons/vr_3602.svg": "485cf2593c92a7e45ecb4f109dfdce0a",
"assets/assets/icons/assistant1.svg": "caf14b79b4bd2e28c2c81fef82ace7db",
"assets/assets/icons/duration.svg": "73bff7913469e8c8e91188088f3d7790",
"assets/assets/icons/profile1.svg": "f81a3e0892445aa2f99eccf6ce0de1ae",
"assets/assets/icons/favorite.svg": "62b12f2c8685645dee43ec224df93c8c",
"assets/assets/icons/play1.svg": "7ef41f25d72c7aad686520572e17d023",
"assets/assets/icons/play.svg": "4cd3cc49423be858c4684ac3b072ea02",
"assets/assets/icons/premium.svg": "e5dfb684110e0b5378c36f1d0c05ddd4",
"assets/assets/icons/home1.svg": "d5e153a4f3151718a99e9884c8ebb3c8",
"assets/assets/icons/trending.svg": "0ff30bd9d5ce39cd3ec53f21fef41360",
"assets/assets/icons/star.svg": "4066a3a9f0d7463e3147bc316dac8ade",
"assets/assets/icons/idea.svg": "99cca4cf25d16179b45a09e09240218b",
"assets/assets/icons/vr_360.svg": "223bf25cdd51c97b74043040812fe379",
"assets/assets/icons/profile.svg": "8989d0b20031c73137526d92d7dfb24c",
"assets/assets/icons/error.svg": "1f2da2a83453fa65517c1493a4b02515",
"assets/assets/icons/bookmark.svg": "0c1d803fca522a375ad32b0884ecf285",
"assets/assets/icons/history.svg": "262016f61f63cd2ce959b5c98135f078",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
