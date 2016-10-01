/**
 * AdminsController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	dashboard: function(req, res, next){
		var user = req.session.user;
		var userlist = [], ridelist = [], activitylist = [];

		Users.find(function foundUsers(err, usersFound){
				if(err) return next(err);
				if(!usersFound) return next();
				userlist = usersFound;
				Rides.find(function foundRides(err, ridesFound){
						if(err) return next(err);
						if(!ridesFound) return next();
						ridelist = ridesFound;
						
						res.view({
							user: user,
							users: userlist,
							rides: ridelist,
							activities: activitylist
						});
				});
		});



	},
	users: function(req, res, next){
		var user = req.session.user;

		Users.find(function foundUsers(err, usersFound){
			if(err) return next(err);
			if(!usersFound) return next();
			userlist = usersFound;
			res.view({
				user: user,
				users: userlist
			});
		});
	},
	rides: function(req, res, next){
		var user = req.session.user;

		Rides.find()
			.populate('activity')
			.populate('owner').exec(function foundRides(err, ridesFound){
					if(err) return next(err);
					if(!ridesFound) return next();
					rideslist = ridesFound;
					res.view({
						user: user,
						rides: rideslist
					});
			});
	},
	activities: function(req, res, next){
		var user = req.session.user;

		Activities.find(function foundActivites(err, activitiesFound){
			if(err) return next(err);
			if(!activitiesFound) return next();
			activitieslist = activitiesFound;
			res.view({
				user: user,
				activities: activitieslist
			});
		});
	},
	reports: function(req, res, next){
		var user = req.session.user;

		ReportEntries.find(function foundReports(err, reportsFound){
			if(err) return next(err);
			if(!reportsFound) return next();
			reportslist = reportsFound;
			res.view({
				user: user,
				reports: reportslist
			});
		});
	}
};
