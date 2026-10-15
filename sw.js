// BHARAT LAW service worker. Change VERSION on every release so phones get the update.
const VERSION="2.2.1";
const CACHE="bharat-law-"+VERSION;
const CORE=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/logo.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener("message",e=>{if(e.data==="SKIP_WAITING")self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("bharat-law-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET")return;
  if(u.origin!==location.origin){ // Google fonts: cache after first use
    if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname))e.respondWith(caches.open(CACHE+"-fonts").then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(res=>{c.put(e.request,res.clone());return res}))));
    return}
  if(u.pathname.endsWith("version.json"))return; // always network
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl))}return res}).catch(()=>caches.match("index.html"))));
});
