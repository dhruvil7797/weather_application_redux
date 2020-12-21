import React, { Component } from 'react'
import EachForecast from './EachForecast'
import style from '../CSS/Component/ForecastWeather'

export default class ForecastWeather extends Component {

    // Bottom right container which contains all five weather forecast
    render() {
        return (
            <div style={style.container}>
                {
                    Object.keys(this.props.data.forecast).map((key, index) => {
                        return <EachForecast key={index} data={this.props.data.forecast[key]} />
                    })
                }
            </div>
        )
    }
}
