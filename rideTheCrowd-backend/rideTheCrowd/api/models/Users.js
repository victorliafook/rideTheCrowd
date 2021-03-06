/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
      firstname: {
        type: 'string',
        required: true
      },
      surname:{
        type: 'string'
      },
      email: {
        type: 'string',
        required: true,
        email: true,
        unique: true
      },
      password: {
        type: 'string',
        required: true
      },
      bio: {
        type: 'string'
      },
      photo: {
        type: 'string'
      },
      birthdate: {
        type: 'date'
      },
      gender:{
        type: 'string',
        enum: ['female', 'male', 'unspecified']
      },
      country:{
        type: 'string',
        required: true
      },
      city:{
        type: 'string',
        required: true
      },
      usertype: {
        type: 'string',
        enum: ['client','admin'],
        defaultsTo: 'client'
      },
      riding: {
        collection: 'rides',
        via: 'riders'
      },
      ridehistory :{
        collection: 'rideHistories',
        via: 'user'
      }

  }
};
