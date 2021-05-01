const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
      dest: 'public',
      // disable: process.env.NODE_ENV === 'production',
      register: true,
      scope: '/app',
      sw: 'service-worker.js',
    },
    images : {
        domains: ['storage.googleapis.com']
    }
  })

// module.exports = {
//     images : {
//         domains: ['storage.googleapis.com']
//     }
// }