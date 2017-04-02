'use strict'

const findPodcastBySlug = (podcasts, slug) => {
  return podcasts.find(
    (podcast) => {
      return podcast.slug === slug
    }
  )
}

const findPodcastByName = (podcasts, name) => {
  return podcasts.find(
    (podcast) => {
      return podcast.name === name
    }
  )
}

module.exports = {
  findPodcastBySlug,
  findPodcastByName
}
