/**
 * Rides.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
        type: 'string'
    },
    description: {
      type: 'string',
      required: true
    },
    activity: {
      model: 'activities',
      required: true
    },
    owner: {
      model: 'users',
      required: true
    },
    riders: {
      collection: 'users',
      via: 'riding',
      dominant: true
    },
    chatEntries:{
      collection: 'chatEntries',
      via: 'ride'
    },
    datetime: {
      type: 'datetime',
      required: true
    },
    photoUrl: {
        type: 'string'
    },
    country: {
      type: 'string',
      required: true
    },
    city: {
        type: 'string',
        required: true
    },
    address: {
        type: 'string',
        required: true
    },
    startLocation: {
        type: 'string'
    },
    endLocation: {
        type: 'string'
    },
    repeating: {
        type: boolean
    },
    status: {
        type: 'string',
        enum: ['active','inactive']
    }
  }
};
