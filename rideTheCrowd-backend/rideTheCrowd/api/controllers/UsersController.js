/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		console.log("#### UserController::new " + JSON.stringify(req.session.flash));
		if(req.session.authenticated == true)
				res.redirect('/admins/dashboard/');
		res.view('users/new', {layout: 'login'});


	},

	create: function(req, res, next){
		req.params.usertype = 'admin';
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
		console.log("#### UserController::login " + JSON.stringify(req.session.flash));
		Users.findOneByEmail(req.param('email'), function(err, user){
			if(err) return next(err);

			var pass = req.param('password');
			if(!user || pass != user.password){
				var authError = {name: 'Authentication Error', message:'Incorrect Email or Password!'};
				req.session.flash = {err: authError};
				return res.redirect('/users/new/');
			}
			if(user.usertype != 'admin'){
				var authError = {name: 'Authentication Error', message:'You are not an admin!'};
				req.session.flash = {err: authError};
				return res.redirect('/users/new/');
			}
			req.session.user = user;
			req.session.authenticated = true;
			return res.redirect('/admins/dashboard/');
		});
	},

	logout: function(req, res, next){
		req.session.user = {};
		req.session.authenticated = false;
		return res.redirect('/users/new/');
	},

	updateuser: function(req, res, next) {
		console.log("### saving user");
		var userId = req.param('id');
    User.update({
      id: userId
    }, req.params.all(), function userCreated(err, user) {
      if (err) {
        console.log(err)
        req.session.flash = {
          err: err
        };

      }
      return res.redirect('/admins/dashboard');
    });
  }
};
