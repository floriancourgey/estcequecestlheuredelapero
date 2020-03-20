var moment = require('moment');

exports.index = function(req, res, next) {
    var text = 'OUI';
    const now = moment();
    const minutes = now.minutes();
    if(false){
    } else if(minutes === 5){
      text = "OUI, à cinque, on trinque !";  
    } else if(minutes === 15){
      text = "OUI, à et quart, Ricard !";
    } else if(minutes === 20){
      text = "OUI, à 20, c'est l'heure du vin !";
    } else if( minutes === 45){
      text = "OUI, moins l'quart, Ricard !";
    } else if(now.format('dddd') === 'Friday'){
      text = 'OUI, vendredi tout est permis !';
    }
    res.render('index', {
      text: text,
    })
};
