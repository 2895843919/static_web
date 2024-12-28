const CACHES_NAME = "v1.2.1"


self.addEventListener('install', eveFnt => {
    // 安装
    console.log("安装完成",CACHES_NAME)
    self.skipWaiting()
})

self.addEventListener('activate', async (event) => {
    // 激活
    console.log("激活成功", CACHES_NAME)
})

self.addEventListener('fetch', event => {
    // 请求
    console.log("收到fetch", CACHES_NAME)
})
