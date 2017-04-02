'use strict'

const Boom = require('boom')
const podcastsData = require('../../../data/podcasts')
const findPodcast = require('../../../lib/findPodcast').findPodcastBySlug
const getTwitterImage = require('../queries/podcasts').getTwitterImage
const parameterValidator = require('../validation/getPodcast')

module.exports = {
  method: 'GET',
  path: '/api/podcast/{slug}',
  config: {
    pre: [
      {method: getTwitterImage, assign: 'twitterImage'}
    ],
    validate: {
      params: parameterValidator
    },
    handler: (request, reply) => {
      let podcast = findPodcast(podcastsData, request.params.slug)

      // If no podcast is found, send back 404
      if (!podcast) {
        reply(Boom.notFound('Podcast not found'))
      }

      podcast.twitterImage = request.pre.twitterImage
      reply(podcast)
    }
  }
}
