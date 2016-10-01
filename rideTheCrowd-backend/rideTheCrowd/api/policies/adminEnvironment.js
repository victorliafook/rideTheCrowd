module.exports = function(req, res, next) {

  ReportEntries.find({limit: 5, sort: 'createdAt DESC'})
    .populate('ride')
    .populate('user')
    .exec(function foundReports(err, reportsFound) {
      if (err) return next(err);
      if (!reportsFound) return next();
      res.locals.lastreportslist = reportsFound;

      next()
    });

};
