/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		res.locals.flash = _.clone(req.session.flash);
		res.view();
	},

	create: function(req, res, next){
		Users.create(req.params.all(), function userCreated(err, user){
			if(err){
				console.log(err)
				req.session.flash = {
					err: err
				};

				return res.redirect('/users/new');
			}
			req.session.user = user;
			req.session.authenticated = true;
			return res.redirect('/admins/dashboard/');
		});
	},

	login: function(req, res, next){
		Users.findOneByEmail(req.param('email'), function(err, user){
			if(err) return next(err);
			if(!user){
				return res.redirect('/users/new/');
			}
			req.session.user = user;
			req.session.authenticated = true;
			return res.redirect('/admins/dashboard/');
		});
	}
};
