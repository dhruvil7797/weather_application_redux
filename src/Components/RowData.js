import React, { Component } from 'react';
import { connect } from 'react-redux'
import style from '../CSS/Component/RowData';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import {RemoveCity, RefreshCity, FetchForecast} from '../Store/actions/Actions'
import { MapIcon } from '../Services/IconMapper';

class RowData extends Component {

    // Render individual row into the left container
    render() {
        return (
            <div style={style.container}>
                <img style={style.icon} src={MapIcon(this.props.data)} alt="RowIcon"></img>
                <div onClick={()=>{this.props.FetchForecastData(this.props.name)}} style={style.data}>
                    <pre>{this.props.name.padEnd(12,' ')} {this.props.data.temp}&deg;C {this.props.data.main}</pre>
                </div>
                <IconButton style={style.button} onClick={()=>{this.props.RefreshCity(this.props.name)}}>
                    <AutorenewIcon/>
                </IconButton>
                <IconButton style={style.button} onClick={()=>{this.props.RemoveCity(this.props.name)}}>
                    <ClearIcon/>
                </IconButton>
            </div>
        )
    }
}

const linkDispatchToProps = dispatch => {
    return {
        RefreshCity: (x) => dispatch(RefreshCity(x)),
        RemoveCity: (x) => dispatch(RemoveCity(x)),
        FetchForecastData : (x) => dispatch(FetchForecast(x))
    }
}

export default connect(
    null,
    linkDispatchToProps
)(RowData)