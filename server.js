'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ port: 3000, host: 'localhost' })

server.route(require('./api/podcasts/routes/getPodcasts'))
server.route(require('./api/podcasts/routes/getPodcast'))
server.route(require('./api/podcasts/routes/postPodcasts'))

server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
