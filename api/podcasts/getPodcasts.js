'use strict'

const podcastsData = require('../../data/podcasts')
const trimmedPodcastsData = require('../../lib/trimmedPodcastsData')(podcastsData)
const sortData = require('../../lib/sortData')

module.exports = {
  method: 'GET',
  path: '/api/podcasts',
  config: {
    handler: (request, reply) => {
      const sortDirection = request.query.sortDirection || 'asc'
      const sortKey = request.query.sortKey || 'id'
      reply(sortData(trimmedPodcastsData, sortDirection, sortKey))
    }
  }
}
