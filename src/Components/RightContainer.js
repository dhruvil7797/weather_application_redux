import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from '../CSS/Component/RightContainer';
import {FetchForecast} from '../Store/actions/Actions'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import IconButton from '@material-ui/core/IconButton';
import CurrentWeather from '../Components/CurrentWeather'
import ForecastWeather from '../Components/ForecastWeather'
import { toast } from 'react-toastify';

class RightContainer extends Component {

    // Render right container
    render() {
        return (
            <div style={style.container}>
                {/* Check is any city selected or not */}
                {
                    this.props.selectedCityData.name === undefined ? 
                    null 
                    :
                    <div style={style.container}>
                    <div style={style.header}>
                        <div style={style.title}>
                        {this.props.selectedCityData.name}
                        </div>
                        <IconButton style={style.button} onClick={()=>{this.props.RefreshForecast(this.props.selectedCityData.name)}}>
                            <AutorenewIcon/>
                        </IconButton>
                        
                    </div>
                    <CurrentWeather data={this.props.selectedCityData}/>
                    <ForecastWeather data={this.props.selectedCityData}/>
                    </div>
                }
            </div>
        )
    }
}

const linkStateToProps = state => {
    return {
        selectedCityData: state.data.selectedCityData,
    }
}

const linkDispatchToProps = dispatch => {
    return { 
        RefreshForecast: (x) => {
            toast.success("🌦 Data updated",{position:"top-right"})
            dispatch(FetchForecast(x))
        }
    }
}

export default connect(
    linkStateToProps,
    linkDispatchToProps
)(RightContainer)