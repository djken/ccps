self.importScripts('sw-toolbox.js')
toolbox.precache(['https://ccps-english.netlify.app/images-icons/index.html', ''])
toolbox.router.get('/*', toolbox.networkFirst, {
 networkTimeoutSeconds: 5
})
