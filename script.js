/**
 * DeepHub AI - Maintenance Page Script
 * Lightweight and dependency-free
 */

document.addEventListener('DOMContentLoaded', function () {
  // Check connection status periodically (every 3 minutes)
  setInterval(function () {
    fetch(window.location.href, { method: 'HEAD', cache: 'no-store' })
      .then(function (response) {
        // If server returns standard OK 200 and not maintenance, reload
        if (response.status === 200 && response.headers.get('X-Maintenance-Mode') !== 'true') {
          // Maintenance completed
          window.location.reload();
        }
      })
      .catch(function () {
        // Still in maintenance or offline
      });
  }, 180000);
});
