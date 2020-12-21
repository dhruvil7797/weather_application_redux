import React, { Component } from 'react'
import AddCity from './AddCity'
import ViewCityList from './ViewCityList'
import style from '../CSS/Component/LeftContainer'

class LeftContainer extends Component {

    // render left container
    render() {
        return (
            <div style={style.container}>
                <AddCity />
                <div style={style.cityList}><ViewCityList /></div>
            </div>
        )
    }
}

export default LeftContainer