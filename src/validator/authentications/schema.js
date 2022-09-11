const Joi = require('joi');

const PostAuthenticationPlayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const PutAuthenticationPlayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const DeleteAuthenticationPlayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  PostAuthenticationPlayloadSchema,
  PutAuthenticationPlayloadSchema,
  DeleteAuthenticationPlayloadSchema,
};
