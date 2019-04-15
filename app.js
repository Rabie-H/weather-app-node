const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2]

if(location){
    geocode(location, (error, {latitude, longitude, location}) => {
        if(error){
            console.log(error)
        }else {
            forecast(latitude, longitude, (error, {body}) => {
                if(error){
                    console.log(error)
                }else{
                    console.log('location : ' + location + ' '
                        + body.daily.data[0].summary 
                        + ' It is currently ' + body.currently.temperature 
                        + ' degress out. There is a ' 
                        + body.currently.precipProbability 
                        + '% chance of rain.')
                }
            })
        }
    })
}else{
    console.log('Please specify the location you are looking for!')
}


