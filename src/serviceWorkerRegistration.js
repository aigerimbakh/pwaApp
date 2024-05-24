// serviceWorkerRegistration.js

export function register() {
   if ('serviceWorker' in navigator) {
     window.addEventListener('load', () => {
       navigator.serviceWorker.register('/service-worker.js')
         .then(registration => {
           console.log('Service Worker registered:', registration);
         })
         .catch(error => {
           console.error('Error registering Service Worker:', error);
         });
     });
   } else {
     console.log('Service Worker is not supported by this browser.');
   }
 }
 