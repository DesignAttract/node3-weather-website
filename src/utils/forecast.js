const request = require('postman-request')

const forecast = ((lat, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=13cee97c122061bdcece880025302263&query='+ encodeURIComponent(long) + ',' + encodeURIComponent(lat) + '&units=f'
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] + '. The current temp is ' + body.current.temperature + ' ,it feels like ' + body.current.feelslike + ' and the humidity is ' + body.current.humidity
            )
            
        }
    })
    
})

module.exports = forecast