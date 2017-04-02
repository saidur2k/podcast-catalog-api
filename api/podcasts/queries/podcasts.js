'use strict'

const Boom = require('boom')
const podcastsData = require('../../../data/podcasts')
const findPodcastByName = require('../../../lib/findPodcast')

const verifyUniquePodcast = (request, reply) => {
  const name = request.payload.name
  const existingPodcast = findPodcastByName(podcastsData, name)
  if (existingPodcast) {
    return reply(Boom.notFound('Podcast exists'))
  }
  return reply()
}

const createPodcastSlug = (request, reply) => {
  const name = request.payload.name
  const slug = name.split(' ').join('-')
  return reply(slug.toLowerCase())
}

const getTwitterImage = (request, reply) => {
  const slugFromRequest = request.params.slug
  const twitterHandle = podcastsData.find(
    (podcast) => podcast.slug === slugFromRequest
  )

  if (!twitterHandle) {
    return reply()
  }

  // TODO: connect to twitter API to fetch handle image
  // For now, responding with just the twitter handle
  return reply(twitterHandle.twitter + 'xxx')
}

module.exports = {
  verifyUniquePodcast,
  createPodcastSlug,
  getTwitterImage
}
