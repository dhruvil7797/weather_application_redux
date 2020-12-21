import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from '../CSS/Component/AddCity'
import {AddCityAction, ResetError} from '../Store/actions/Actions'

class AddCity extends Component {

    constructor(props) {
        super(props);
        // Set cityname empty every time page loads
        this.state = { cityName: ""}
    }

    // Page will render left top part which allows user to add city into list
    render() {

        // When enter is pressed or add button is clicked
        // Call API to add city into the list
        const handleAdd = () => {
            this.props.AddList(this.state.cityName)
            this.setState({cityName : ''})
        }

        return (
            <div>
                <div style={style.errorMessage}>{this.props.errorMessage }</div>
                <div style={style.addListContainer}>
                    <input
                        style={style.addListInput}
                        placeholder="Type city name"
                        value={this.state.cityName}
                        onChange={(e) => {
                            this.setState({cityName:e.target.value})
                            this.props.ResetError();
                        }}
                        onKeyDown={(e)=>{ if(e.key === 'Enter'){ handleAdd(); } }}
                    >
                    </input>
                    <button
                        style={style.addButton}
                        onClick={()=>{handleAdd()}}
                    > + </button>
                </div>
            </div>
        )
    }
}

//Map state data to props
const linkStateToProps = state => {
    return {
        errorMessage: state.errorMessage,
    }
}

//Map action to props
const linkDispatchToProps = dispatch => {
    return { 
        AddList: (x) => dispatch(AddCityAction(x)),
        ResetError: ()=> dispatch(ResetError())
    }
}

export default connect(
    linkStateToProps,
    linkDispatchToProps
)(AddCity)
