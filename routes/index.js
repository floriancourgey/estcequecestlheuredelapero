var moment = require('moment');

exports.index = function(req, res, next) {
    var text = 'OUI';
    const now = moment();
    if(now.format('dddd') === 'Friday'){
      text = 'OUI, vendredi tout est permis !';
    }
    res.render('index', {
      text: text,
    })
};
