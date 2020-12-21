import configData from '../Config.json'


// Return URL to call weather API based on cityname
export const BuildURL = (cityName) => {
    return configData.SERVER_URL + "weather" +
    "?q=" + cityName +
    "&appid=" + process.env.REACT_APP_WEATHER_API_KEY +
    "&units=metric";
}

// Return URL to call forecast API based on cityname
export const BuildForecastURL = (cityName) => {
    return configData.SERVER_URL + 'forecast/daily' +
    "?q=" + cityName +
    "&appid=" + process.env.REACT_APP_WEATHER_API_KEY +
    "&units=metric";
}

// Convert string to Capitalize form
export const CapitalizeCity = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
}