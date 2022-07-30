console.log('sw')
const cacheName='cache-1';
var filesToCache=[
    './',
    './?utm_source=homescreen',
    './circle.svg',
    './circle-h.svg',
    './Manifest.webmanifest',
    './rotate-left.svg',
    './vue.js',
    './xmark.svg',
    './xmark-h.svg',
    './style.css'
];


self.addEventListener('install',(e)=>{
    console.log('install')
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            return cache.addAll(filesToCache);
        })
    );
})
self.addEventListener('fetch',(event)=>{
    console.log('fetch:',event)
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    )
})
self.addEventListener('activate',(event)=>{
    console.log('activate')
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
            return Promise.all(
                cacheNames.filter((name)=>{
                    return name !== cacheName
                }).map((cacheName)=>{
                    return caches.delete(cacheName);
                })
            );
        })
    );
})
