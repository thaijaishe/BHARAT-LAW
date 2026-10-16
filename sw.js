// BHARAT LAW service worker. Change VERSION on every release.
const VERSION="2.6.1";
const CACHE="bharat-law-"+VERSION;
const CORE=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/logo.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE.map(u=>new Request(u,{cache:"reload"})))))});
self.addEventListener("message",e=>{if(e.data==="SKIP_WAITING")self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("bharat-law-")&&!k.startsWith(CACHE)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const req=e.request,u=new URL(req.url);
  if(req.method!=="GET")return;
  if(u.origin!==location.origin){
    if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname))e.respondWith(caches.open(CACHE+"-fonts").then(c=>c.match(req).then(r=>r||fetch(req).then(res=>{c.put(req,res.clone());return res}))));
    return}
  if(u.pathname.endsWith("version.json")||u.pathname.endsWith("sw.js"))return;
  // the app page: always try the network first so updates show at once; use the saved copy when offline
  if(req.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith("index.html")){
    e.respondWith(fetch(req,{cache:"no-cache"}).then(res=>{if(res.ok){const cl=res.clone();caches.open(CACHE).then(c=>c.put("index.html",cl))}return res})
      .catch(()=>caches.match("index.html").then(r=>r||caches.match("./"))));
    return}
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req).then(res=>{if(res.ok){const cl=res.clone();caches.open(CACHE).then(c=>c.put(req,cl))}return res})));
});
