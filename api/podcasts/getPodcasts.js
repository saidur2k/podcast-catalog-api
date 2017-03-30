'use strict'

const podcastsData = require('../../data/podcasts')
const sortBy = require('lodash').sortBy

module.exports = {
  method: 'GET',
  path: '/api/podcasts',
  config: {
    handler: (request, reply) => {
      const trimmedPodcastsData = podcastsData.map(
        (podcast) => {
          return {
            id: podcast.id,
            name: podcast.name,
            slug: podcast.slug
          }
        }
      )

      const sortDirection = request.query.sortDirection
      const sortKey = request.query.sortKey

      const sortData = (data, direction, key) => {
        if (direction === 'asc') {
          return sortBy(data, key)
        } else if (direction === 'desc') {
          return sortBy(data, key).reverse()
        } else {
          return data
        }
      }

      reply(sortData(trimmedPodcastsData, sortDirection, sortKey))
    }
  }
}
