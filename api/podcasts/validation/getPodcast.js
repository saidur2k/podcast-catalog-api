'use strict'

const Joi = require('joi')

const parameterValidator = Joi.object({
  slug: Joi.string().required()
})

module.exports = { parameterValidator }
