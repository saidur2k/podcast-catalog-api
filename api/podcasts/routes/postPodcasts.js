'use strict'

const query = require('../queries/podcasts')
const payloadValidator = require('../validation/postPodcast')
let podcastsData = require('../../../data/podcasts')

module.exports = {
  method: 'POST',
  path: '/api/podcasts',
  config: {
    pre: [
      {method: query.verifyUniquePodcast},
      {method: query.createPodcastSlug, assign: 'slug'}
    ],
    validate: {
      payload: payloadValidator
    },
    handler: (request, reply) => {
      let submittedData = request.payload
      submittedData.id = podcastsData.length + 1
      submittedData.slug = request.pre.slug
      podcastsData.push(submittedData)
      reply(submittedData)
    }
  }
}
