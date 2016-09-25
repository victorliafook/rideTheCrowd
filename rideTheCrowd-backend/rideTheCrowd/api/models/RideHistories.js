/**
 * RideHistories.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    user: {
      model: 'users'
    },
    ride: {
      model: 'rides'
    },
    date: {
      type: 'date',
      required: true
    }
  }
};
