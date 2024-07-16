// Verifique se a API Cache Storage está disponível no navegador
if ('caches' in window) {
    caches.keys().then(function(cacheNames) {
      cacheNames.forEach(function(cacheName) {
        caches.open(cacheName).then(function(cache) {
          cache.keys().then(function(requests) {
            requests.forEach(function(request) {
              if (request.url.endsWith('.jpg') || request.url.endsWith('.jpeg') ||
                  request.url.endsWith('.png') || request.url.endsWith('.gif') ||
                  request.url.endsWith('.css') || request.url.endsWith('.js')) {
                cache.delete(request);
                window.location.reload(true);
              }
            });
          });
        });
      });
    });
  } else {
    console.log('Cache Storage API não está disponível no navegador.');
  }
  

//window.location.reload(true);
    
