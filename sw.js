// Clevora Service Worker — PWA offline support
const CACHE_NAME = 'clevora-v2';
const ASSETS = [
  'index.html','services.html','service.html','builder.html','pricing.html',
  'tools.html','tool.html','store.html','api.html','blog.html','post.html',
  'about.html','contact.html','privacy.html','signup.html','login.html',
  'dashboard.html','settings.html',
  'css/styles.css','js/app.js','assets/favicon.svg'
];

self.addEventListener('install',(e)=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',(e)=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',(e)=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>{if(cached)return cached;return fetch(e.request).then(res=>{if(res.ok&&e.request.url.startsWith(self.location.origin)){const clone=res.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));}return res;}).catch(()=>cached);});});