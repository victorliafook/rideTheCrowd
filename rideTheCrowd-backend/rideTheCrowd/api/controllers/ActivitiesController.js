/**
 * ActivitiesController
 *
 * @description :: Server-side logic for managing activities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next){
		Activities.create(req.params.all(), function(err, activity){
			if(err){
				console.log(err)
				req.session.flash = {
					err: err
				};
			}
			res.redirect('/admins/addactivity');
		});
	},
};
