/**
 * ReportEntries.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ride: {
      model: 'rides'
    },
    user: {
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
