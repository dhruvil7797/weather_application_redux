// Parse json response from weather API and return relevant informations
export const ParseIndividualResponse = (json) => {
    return ({
        main:json.weather[0].main,
        description:json.weather[0].description,
        type: json.weather[0].icon.includes('n')? 'n' : 'd',
        temp: Math.round(json.main.temp)
    });
}

var weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun']

// Parse json response from forecast API and return relevant informations
export const ParseForecastResponse = (json) => {
    var data = {
        name: json.city.name,
        temp: Math.round(json.list[0].temp.max),
        main: json.list[0].weather[0].main,
        description: json.list[0].weather[0].description,
        type: json.list[0].weather[0].icon.includes('n')? 'n' : 'd',
        pressure: json.list[0].pressure,
        speed: Math.round(json.list[0].speed),
        deg: json.list[0].deg,
    }
    
    var forecast = {};
    for(var i = 1; i<=5; i++){
        forecast[i] = {
            temp: Math.round(json.list[i].temp.max),
            main: json.list[i].weather[0].main,
            description: json.list[i].weather[0].description,
            type: json.list[i].weather[0].icon.includes('n')? 'n' : 'd',
            date: (new Date(json.list[i].dt * 1000)).getDate(),
            day: weekDay[(new Date(json.list[i].dt * 1000)).getDay()]
        }    
    }
    data['forecast'] = forecast;    
    return (data);
}