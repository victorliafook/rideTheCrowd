/**
 * Messages.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    sender: {
      model: 'users'
    },
    recipient: {
      model: 'users'
    },
    datetime: {
      type: 'datetime',
      required: true
    },
    text: {
      type: 'string',
      required: true
    }
  }
};
