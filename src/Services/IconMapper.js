import CloudyDay from '../Assets/Static/Images/cloudy-day-3.svg'
import CloudyNight from '../Assets/Static/Images/cloudy-night-3.svg'
import Cloudy from '../Assets/Static/Images/cloudy.svg'
import Day from '../Assets/Static/Images/day.svg'
import Night from '../Assets/Static/Images/night.svg'
import Drizzle from '../Assets/Static/Images/rainy-1.svg'
import Rain from '../Assets/Static/Images/rainy-6.svg'
import Snow from '../Assets/Static/Images/snowy-6.svg'
import Thunder from '../Assets/Static/Images/thunder.svg'
import Mist from '../Assets/Static/Images/weather.svg'


// Return icon according to the weather condition
export const MapIcon = (data) => {
    const mainCondition = data.main;
    const description = data.description;
    const type = data.type;
    switch (mainCondition){
        case 'Clear':
            if(type === 'd') return Day;
            else return Night;
        case 'Clouds':
            if(description.includes('few')){
                if(type === 'd') return CloudyDay;
                else return CloudyNight;
            }
            else return Cloudy;
        case 'Snow':
            return Snow;
        case 'Rain':
            return Rain;
        case 'Drizzel':
            return Drizzle;
        case 'Thunderstorm':
            return Thunder;
        default:
            return Mist;
    }
}

