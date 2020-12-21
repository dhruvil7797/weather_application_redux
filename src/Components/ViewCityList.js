import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from '../CSS/Component/ViewCityList'
import { ClearList } from '../Store/actions/Actions'
import RowData from './RowData'

class ViewCityList extends Component {

    // Contains weather information of all cities which are added into the list
    render() {
        return (
            <div style={style.container}>
                <div style={style.titleMessage}>Recent Location</div>
                <div style={style.listDiv}>
                {
                    Object.keys(this.props.data).reverse().map((key, index) => {
                        return <RowData key={index} name={key} data={this.props.data[key]} />
                    })
                }
                </div>
                <button style={style.clearButton} onClick={this.props.ClearList}>Clear</button>
            </div>
        )
    }
}

const linkStateToProps = state => {
    return {
        data: state.data.allCityData
    }
}

const linkDispatchToProps = dispatch => {
    return { 
        ClearList: () => dispatch(ClearList())
    }
}

export default connect(
    linkStateToProps,
    linkDispatchToProps
)(ViewCityList)
