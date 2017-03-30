'use strict'

const trimPodcastsData = (podcasts) => {
  return podcasts.map(
    (podcast) => {
      return {
        id: podcast.id,
        name: podcast.name,
        slug: podcast.slug
      }
    }
  )
}

module.exports = trimPodcastsData
