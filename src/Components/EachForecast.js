import React, { Component } from 'react'
import style from '../CSS/Component/EachForecast'
import { MapIcon } from '../Services/IconMapper'

export default class EachForecast extends Component {

    // This page will render Individual forecast data into the right panel
     
    render() {
        return (
            <div style={style.container}>
                <div>{this.props.data.date}</div>
                <div>{this.props.data.day}</div>
                <img src={MapIcon(this.props.data)} alt="Forecast Icon" style={style.icon}></img>
                <div>{this.props.data.temp}&deg; C</div>
            </div>
        )
    }
}
