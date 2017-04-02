'use strict'

require('dotenv').config()
const Hapi = require('hapi')
const winston = require('winston')
require('winston-loggly-bulk')
winston.add(winston.transports.Loggly, {
  token: process.env.WINSTON_TOKEN,
  subdomain: process.env.WINSTON_SUBDOMAIN,
  tags: ['Winston-NodeJS'],
  json: true
})

const server = new Hapi.Server()

server.connection({ port: 3000, host: 'localhost' })

server.route(require('./api/podcasts/routes/getPodcasts'))
server.route(require('./api/podcasts/routes/getPodcast'))
server.route(require('./api/podcasts/routes/postPodcasts'))

server.start((err) => {
  if (err) {
    throw err
  }

  winston.log('info', `Server running at: ${server.info.uri}`)
  console.log(`Server running at: ${server.info.uri}`)
})
