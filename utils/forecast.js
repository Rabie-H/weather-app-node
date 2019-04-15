const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e68d051df669dd04981ccd95f2f0f51a/' + latitude + ',' + longitude + '?units=si';
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined);
        }else if(body.error){
            callback('Unable to find location!')
        }else{
            callback(undefined, {body});
        }
    });
    
}

module.exports = forecast;