'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d1819dde26278e6b0600fb0b68eea536",
"assets/assets/icons/accounting.svg": "0805e694955e042978a883eb8afb447a",
"assets/assets/icons/API.svg": "e0fef14e7fa4e00f4bad367dfa98fa60",
"assets/assets/icons/buying.svg": "5bf432cdb0757f2bf4b7ed34d87a3a92",
"assets/assets/icons/chain.svg": "c7739cf9b414db506b97dbfad2bd1926",
"assets/assets/icons/chat.svg": "4ca10945a8c3eba4467f2f634e09aedf",
"assets/assets/icons/crm.svg": "1eb8c9e6a276a3fe50a6ecd3cac46300",
"assets/assets/icons/customer.svg": "0e38e9d9e36c25b6acd5135808b840f0",
"assets/assets/icons/database.svg": "afc6b5bd79d45f6d57d341649df5316d",
"assets/assets/icons/discord.svg": "3e406029a667cced8edb0c710c838966",
"assets/assets/icons/documentation.svg": "6d17351de79bb248f87c6b44554ed655",
"assets/assets/icons/ecommerce.svg": "3b39584c44a72c24c10ddd6b8bc44773",
"assets/assets/icons/elearning.svg": "aa5fd1a38292d1f02bb84ccab1762010",
"assets/assets/icons/email%2520marketing.svg": "f96122b1165b5a3b67c088ae0015d79f",
"assets/assets/icons/enrollment.svg": "8f84c52e9bedad7d84ca0737df54db6e",
"assets/assets/icons/facebook.svg": "c509a4c46008514b5a5084d2596c99e4",
"assets/assets/icons/forum.svg": "18620dde8ebf6eae4fb6721d3e0c0f02",
"assets/assets/icons/github.svg": "79fac77068c135f499d7e4e8c501cf3e",
"assets/assets/icons/github_community.svg": "2c2870f30b878f062aa23308eef8d57b",
"assets/assets/icons/helpdesk.svg": "80f8fa6dea980579b6de91e3a4df9e88",
"assets/assets/icons/human%2520resources.svg": "f5739eab16f153bac2952f1b85dced62",
"assets/assets/icons/industry.svg": "2da78519940eb37021b8503ad16e2bd2",
"assets/assets/icons/info.svg": "9016b724e7d1b0d5d42ef43eb7ca2fef",
"assets/assets/icons/inventory.svg": "81828807832c49b53ae1fa8ea877c4e2",
"assets/assets/icons/left-chevron.svg": "f55a0d3dd07b9f6487a2dd42ef5adb22",
"assets/assets/icons/less.svg": "2fd2e4269fbdd5f00ca3da927f3f93e5",
"assets/assets/icons/lms.svg": "c504f43c81e1587cdc5065c56d3160cd",
"assets/assets/icons/marketing.svg": "e94dfa7e78049a21f8c7a1b88f27623e",
"assets/assets/icons/menu.svg": "07e0d80f6f0589fdada8d3bb8fc1090e",
"assets/assets/icons/more.svg": "641a6cdc069778e1da19e4d484cf6b46",
"assets/assets/icons/mrp.svg": "ea23f3bda4b97c734d5c4f64287e286c",
"assets/assets/icons/pos.svg": "4bc6b4792e0f7d0d5cbb292eb4b32d04",
"assets/assets/icons/right-chevron.svg": "ba80dd2876fe2dd1e92b29ba4789f607",
"assets/assets/icons/schedule.svg": "70c66ab544c9ed1b1e8ce7eacdf01b8d",
"assets/assets/icons/school%2520admission.svg": "5d9ab127be9a6f42374695555f2eace3",
"assets/assets/icons/search.svg": "ac088494376d013a0c1fe47da522661e",
"assets/assets/icons/tutorials.svg": "7ba5d5300de16db8a607ff5051433a91",
"assets/assets/icons/twitter.svg": "182d5ef4d173a3cd93897242a6fd56a5",
"assets/assets/icons/user.svg": "0a747da4914479440d7b119ac891736a",
"assets/assets/img/aboutus.png": "232af5d1d0ccdd39425a330f2eea40a0",
"assets/assets/img/about_banner.png": "1817d71c06938598bf466e707ff91623",
"assets/assets/img/about_banner_screenshot.png": "bae0b16edd2ebdc08720ef5aded41deb",
"assets/assets/img/accounting_grey.png": "f288fe104c69ed25e349d68f367a9f3b",
"assets/assets/img/accounting_screenshot_00.png": "dfdd319dd2a628bcd2fc49b964e408fe",
"assets/assets/img/accounting_screenshot_01.png": "d9832d330ce3561cb348592a5d891dfb",
"assets/assets/img/accounting_software.png": "6b47a1447a097feb6be22abdac95e980",
"assets/assets/img/bg.png": "e9b7e5efdc008f6ea89ce3c6a2937872",
"assets/assets/img/bg1.png": "ec75a29c5ea4c6c7bce244df0e1dcacf",
"assets/assets/img/bg2.png": "564529d06a37af126ccae2b0e3eb0090",
"assets/assets/img/bgz.png": "f753a5fb209c455af2bc43de310bcb73",
"assets/assets/img/blank.png": "9da2555132a4a8bba96fa408fdd70dd9",
"assets/assets/img/blank_image.png": "4d5d6b7ca107d78f346b8a3fa3766b27",
"assets/assets/img/blank_video.png": "3c7cd78a76ed6743c788f3765535c933",
"assets/assets/img/build%2520sustainability%2520in%2520what%2520you%2520do.png": "27c3f1ac704fbd3cb62f135a2f87001c",
"assets/assets/img/businessman.png": "d131cc9f6e905ed43d79e1e96fa5bf75",
"assets/assets/img/buying.png": "c8c8f0eab7b501b28725d734fb8164da",
"assets/assets/img/checked.png": "bdc67153c3993a6b5bcf5cf80cb73c8c",
"assets/assets/img/community.png": "dc70de681d9cae459773bc0b0a8971e0",
"assets/assets/img/company_information_screenshot.png": "223678fd0ceb92c02c14b2c161e28733",
"assets/assets/img/company_tabs_block1.png": "d5415e9ce2786b619762d788d69dc7bc",
"assets/assets/img/company_tabs_block16.png": "2d39bd9d760cfaf3917d8476ac0bd53e",
"assets/assets/img/company_tabs_block2.png": "915f035d630d0d500f37ccd62c39c5f3",
"assets/assets/img/company_tabs_block26.png": "b6b30dc15e257994190407d560cc6859",
"assets/assets/img/crm.png": "1320a881376ebd100b2365e988117b72",
"assets/assets/img/crm_software.png": "6b47a1447a097feb6be22abdac95e980",
"assets/assets/img/customer%2520experience.png": "c4055850155c4aa8ab532854fb28cc55",
"assets/assets/img/data.png": "6dfcc4513a8eab75bfc0bc747f17abc3",
"assets/assets/img/default_profile.png": "772aa709423494dba2e436c8df1fe643",
"assets/assets/img/dummy_info_screenshot.png": "0fbeaca1a1ce9e1423ae2763676e2c07",
"assets/assets/img/ecommerce.png": "f5d52c5225eed679b6b72165d9817947",
"assets/assets/img/elearning.png": "7cb7a6dcb32478ef1fba1733a2fa552d",
"assets/assets/img/erp_circle.png": "2191b83c500638ab8688518a5970dc70",
"assets/assets/img/faqs.png": "8ee945b64436a39ff5c4a9b2208718b5",
"assets/assets/img/footer_start_creenshot.png": "283effc6008f24cab4db808524ea344c",
"assets/assets/img/grow%2520with%2520us.png": "78437a3edc1ad0e68fbf8aade7c3c26d",
"assets/assets/img/history.png": "0dee0ebc206ee6330f5bf93ffc5d9842",
"assets/assets/img/home_banner_screenshot.png": "112463d01fef23cf213cd40f202ef937",
"assets/assets/img/how_is_screenshot.png": "84f8d6ec2ef362ced397a7605c2f9b81",
"assets/assets/img/industry%2520recognition.png": "bfa028459e4ed4e25450b8c72cdcdc2b",
"assets/assets/img/inventory.png": "7b73bad977dc9133fdc0516d28b2fbf4",
"assets/assets/img/inventory_manager.png": "c8374eaa731af06ebe9e85e8d56a0922",
"assets/assets/img/inventory_software.png": "6b47a1447a097feb6be22abdac95e980",
"assets/assets/img/leadership.png": "68959be098b2f08f4d47ac5c05b14e90",
"assets/assets/img/legal_screenshot.png": "c4a0b92089fb39218e3052b2e7188a25",
"assets/assets/img/lms.png": "b6e600de8cbf590f8900454e4d3e0fcd",
"assets/assets/img/logo.png": "54b68b32f1f4c51917ed0f8e6f748919",
"assets/assets/img/makerting.png": "bf1aff4342090333e7af9372f59a483e",
"assets/assets/img/mockup.png": "adbe7cb101254d53edd299d34e28f084",
"assets/assets/img/mockup1.png": "6b47a1447a097feb6be22abdac95e980",
"assets/assets/img/mrp.png": "e36e61fc08628fdc002ffd988eb26e7f",
"assets/assets/img/pos.png": "e7b79735479946a9beceda15d4d3ffd0",
"assets/assets/img/privacy_screenshot.png": "26ba95210732b91dc9526f6c002002df",
"assets/assets/img/products.png": "7b05cf89ae1c89e5f01265aa6124bbd4",
"assets/assets/img/products_accounting.png": "de0ae4df94e5a499a1ffbccff63db0c0",
"assets/assets/img/product_accounting.png": "426ab5a02af2cfa7df0977a9b766a597",
"assets/assets/img/product_bg.png": "66f51a66776d8b3ebac48165ae74a6c9",
"assets/assets/img/product_crm.png": "97fc3783c3910ed6ddabb6841ad4a141",
"assets/assets/img/product_Inventory.png": "aeda0808ea28617899173d3092fb46a2",
"assets/assets/img/product_markerting.png": "6b47a1447a097feb6be22abdac95e980",
"assets/assets/img/product_purchase.png": "74c80e890073d779a3ef34244114eec6",
"assets/assets/img/purchase_software.png": "6b47a1447a097feb6be22abdac95e980",
"assets/assets/img/row_poster1.png": "d31311a50fbc5b405c55356e630b4c02",
"assets/assets/img/row_poster2.png": "0bcc83be5ae25dec01e3e2ee36aaf447",
"assets/assets/img/row_posters_screenshot.png": "0765d0c8a717f90d534689815f27bc0c",
"assets/assets/img/search.png": "3f6873af0f52eb8b89ae6f3d36cce391",
"assets/assets/img/security_screenshot.png": "fbd58f6044db2466dfb816f1d38f8455",
"assets/assets/img/supply%2520chain.png": "23d18d36e826464dc341f11078f9af08",
"assets/assets/img/support.png": "73c0438161ea13d5f92323e0cb9b78e2",
"assets/assets/img/touch.png": "ffa2a30f76340336c9cd02b5c20d9023",
"assets/assets/img/user.png": "8e9689b55c8f7601589444a51ce26aa8",
"assets/assets/img/video.png": "43ea30fdaf7469c8af940338767acb9f",
"assets/assets/img/what_is_bg.png": "c7eb18544d27b19fcbb1031649b2f82d",
"assets/assets/img/what_is_bg_empty.png": "0481ee7eabedcbec7b08788381b80de2",
"assets/assets/img/what_is_canva.png": "4f1130c7cce5435b71ee1d6557e918b5",
"assets/assets/img/what_is_canva2.png": "aeca3d8f8fd97e4189e51d865292a16d",
"assets/assets/img/what_is_creenshot.png": "bfe8bb6094fedad4a3dedc1333ad7c72",
"assets/FontManifest.json": "199ef9bc37b4ad0f729c52ee43c65af0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/OpenSans/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/fonts/OpenSans/OpenSans-BoldItalic.ttf": "78b08a68d05d5fabb0b8effd51bf6ade",
"assets/fonts/OpenSans/OpenSans-Italic.ttf": "c7dcce084c445260a266f92db56f5517",
"assets/fonts/OpenSans/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/fonts/OpenSans/OpenSans-LightItalic.ttf": "6943fb6fd4200f3d073469325c6acdc9",
"assets/fonts/OpenSans/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/fonts/OpenSans/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/fonts/OpenSans/OpenSans-SemiboldItalic.ttf": "73f7301a9cd7a086295401eefe0c998f",
"assets/NOTICES": "7065af73bbebe045583645f3d72ef8cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0890a3c283e3d4226f079898f9c0036",
"/": "b0890a3c283e3d4226f079898f9c0036",
"main.dart.js": "394b80a94924ebfb639fe89f60e531e5",
"manifest.json": "d86e47fae3ab538ba539345bdfae1d47",
"version.json": "3dfacfa61816b9aa40ca4165efb06b84"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
