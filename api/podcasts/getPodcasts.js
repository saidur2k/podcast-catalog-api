'use strict'

const podcastsData = require('../../data/podcasts')

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
      reply(trimmedPodcastsData)
    }
  }
}
