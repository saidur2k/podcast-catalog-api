'use strict'

const Joi = require('joi')

const payloadValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  twitter: Joi.string().regex(/^(@)[A-Za-z0-9_]{1,15}$/),
  episodes: Joi.array().items(Joi.string())
})

module.exports = payloadValidator
