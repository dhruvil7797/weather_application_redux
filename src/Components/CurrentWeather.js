import React, { Component } from 'react'
import style from '../CSS/Component/CurrentWeather'
import {MapIcon} from '../Services/IconMapper'

export default class CurrentWeather extends Component {
    // Page will render Current Weather on the right panel
    render() {
        const data = this.props.data; 
        return (
            <div style={style.container}>
                <div style={style.iconContainer}>
                    <img src={MapIcon(data)} alt="Logo" 
                    style={style.weatherIcon}
                    />
                </div>
                <div style={style.dataContainer}>
                    <div style={style.dataField}>{data.temp}&deg; C</div>
                    <div style={style.dataField}>{data.description}</div>
                    <div style={style.dataField}>Wind: {data.speed}ms {data.deg} deg</div>
                    <div style={style.dataField}>Pressure: {data.pressure}</div>
                </div>
            </div>
        )
    }
}
