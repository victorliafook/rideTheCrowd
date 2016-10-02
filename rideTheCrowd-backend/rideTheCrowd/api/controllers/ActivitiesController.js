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
			}else{
				req.session.flash = {
					success: "Activity created successfully!"
				};
			}
			res.redirect('/admins/addactivity');
		});
	},
	update: function(req, res, next) {
    console.log("### saving activity");
    var userId = req.param('id');
    Activities.update({
      id: userId
    }, req.params.all(), function(err, user) {
      	if (err) {
        console.log(err)
        req.session.flash = {
          err: err
        };
      }else{
				req.session.flash = {
					success: "Activity details saved successfully!"
				};
			}
      return res.redirect('/admins/addactivity');
    });
  }
};
