if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UTKM9XcvVIf3H2DeU1KaZ/_buildManifest.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/_next/static/UTKM9XcvVIf3H2DeU1KaZ/_ssgManifest.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.59841866d02f83718ac4.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/_next/static/chunks/framework.ced6e340f70acef0a47b.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/_next/static/chunks/main-178b4e574cb06cb0617c.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/_next/static/chunks/pages/_app-5f894ab00a78e090ab02.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/_next/static/chunks/pages/_error-26968d43f670ce8ae924.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/_next/static/chunks/pages/index-d5df440a7718bae8850e.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/_next/static/chunks/polyfills-36bde18dcfde0c144be5.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"UTKM9XcvVIf3H2DeU1KaZ"},{url:"/favicon.ico",revision:"ef7aded9867e4966ba72720674d7e9bb"},{url:"/icon/icon_144x144.png",revision:"66ac78e659b45420f05ca0951900b750"},{url:"/icon/icon_192x192.png",revision:"a9985d965f7c5f2e00749cd41d1e9f0a"},{url:"/icon/icon_512x512.png",revision:"c181997b1e70d323b4e406f40b8b8d9b"},{url:"/icon/icon_72x72.png",revision:"d2c925ea20f4600f6a70b92e87fcf3fd"},{url:"/manifest.json",revision:"12221cf4ba3fa9f710b062c7e0e33a4c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));