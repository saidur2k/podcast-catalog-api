'use strict'

const podcastsData = require('../../data/podcasts')

module.exports = {
  method: 'GET',
  path: '/api/podcast/{slug}',
  config: {
    handler: (request, reply) => {
      const podcast = podcastsData.find(
        (podcast) => podcast.id === Number(request.params.slug)
      )

      if (!podcast) {
        return reply({message: 'Podcast not found'})
      }

      reply(podcast)
    }
  }
}
