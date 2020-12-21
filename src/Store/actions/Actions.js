import {ParseIndividualResponse,ParseForecastResponse } from "../../Services/Parser";
import {BuildURL , CapitalizeCity, BuildForecastURL} from '../../Services/StringBuider'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Dispatch action which will add city information into store
const AddCityDispatch = (name, val) => {
    return { type: "addCity", name: name, data: val };
}

// Dispatch action which will remove error
export const ResetError = () => {
    return { type: "resetError" };
}

// Dispatch action which will set error
export const SetError = (errMessage) => {
    return { type: "setError", errorMessage: errMessage };
}

// Dispatch action which will fetch weather data for a particular city
export const AddCityAction = (val) => {

    // If data is empty return error
    if (val.trim() === '') {
        return (dispatch) => { dispatch(SetError("Please enter a city name")); }
    }

    else {
        return (dispatch, getState) => {
            var capitalizeCity = CapitalizeCity(val);

            // If City already exist in list return error
            if (getState().data.allCityData[capitalizeCity] !== undefined) {
                dispatch(SetError("City already exist in the list"));
            }

            else {
                var apiURL = BuildURL(val);
                fetch(apiURL)
                    .then(async (data) => {

                        // If all data is valid return the response of the API
                        if (data.ok) {
                            data = await data.json()
                            var cityName = data['name']
                            var currentWeather = ParseIndividualResponse(data);
                            dispatch(AddCityDispatch(cityName, currentWeather));
                        }

                        //If city is not valid return error
                        else {
                            dispatch(SetError('Please enter a valid city name'));
                        }
                    })
                    .catch(e => console.log('Connection error', e))
            }
        }
    }
}

// Dispatch action which will remove a particular city from the list
export const RemoveCity = (val) => {
    return { type: "removeCity", data: val };
}

// Dispatch action which will update weather data for a particular city into store
export const RefreshCityDispatch = (name, val) => {
    toast.success("🌦 Data updated");
    return { type: "refreshCity", name: name, data: val };
}

// Dispatch action which will fetch updated weather data for a particular city
export const RefreshCity = (val) => {
    return (dispatch) => {
        var apiURL = BuildURL(val);
        fetch(apiURL)
            .then(res => res.json())
            .then(json => {
                var cityName = json['name']
                var currentWeather = ParseIndividualResponse(json);
                dispatch(RefreshCityDispatch(cityName, currentWeather));
            })
    }
}

// Dispatch action which will add forecast weather data for a particular city into store
export const FetchForecastDispatch = (val) => {
    return { type: "fetchForecast", data: val };
}

// Dispatch action which will fetch forecast weather data for a particular city
export const FetchForecast = (val) => {
    return (dispatch) => {
        var apiURL = BuildForecastURL(val);
        fetch(apiURL)
            .then(res => res.json())
            .then(json => {
                var forecastData = ParseForecastResponse(json);
                dispatch(FetchForecastDispatch(forecastData));
            })
    }
}

// Dispatch action which will clear all weather data from store
export const ClearList = () => {
    return { type: "clearAllCity" }
}