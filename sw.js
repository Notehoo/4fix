// ตัวแทนเปล่าๆ ให้ติดตั้งเป็นแอปได้ (ไม่แคชอะไร จึงไม่ค้างของเก่า)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', () => {});
