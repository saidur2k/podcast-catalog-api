'use strict'

const podcastsData = require('../../../data/podcasts')
const trimmedPodcastsData = require('../../../lib/trimmedPodcastsData')(podcastsData)
const sortData = require('../../../lib/sortData')
const queryValidator = require('../validation/getPodcasts')

module.exports = {
  method: 'GET',
  path: '/api/podcasts',
  config: {
    validate: {
      query: queryValidator
    },
    handler: (request, reply) => {
      const sortDirection = request.query.sortDirection
      const sortKey = request.query.sortKey
      reply(sortData(trimmedPodcastsData, sortDirection, sortKey))
    }
  }
}
