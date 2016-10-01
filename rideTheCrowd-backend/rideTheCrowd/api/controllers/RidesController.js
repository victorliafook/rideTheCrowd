/**
 * RidesController
 *
 * @description :: Server-side logic for managing rides
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  updateride: function(req, res, next) {
		console.log("### saving ride");
		var rideId = req.param('id');
    Rides.update({
      id: rideId
    }, req.params.all(), function userCreated(err, user) {
      if (err) {
        console.log(err)
        req.session.flash = {
          err: err
        };

      }
      return res.redirect('/admins/rides');
    });
  }
};
