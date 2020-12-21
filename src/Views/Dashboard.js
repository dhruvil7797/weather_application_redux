import React, { Component } from 'react'
import LeftContainer from '../Components/LeftContainer'
import RightContainer from '../Components/RightContainer'
import style from '../CSS/View/Dashboard'

class Dashboard extends Component {
    render() {
        return (
            // Parent Container
            <div style={style.container}>

                {/* Left Container 30% of the screen */}
                <div style={style.partContainer} >
                    <LeftContainer />
                </div>

                {/* Right Container 70% of the screen */}
                <div style={{ ...style.partContainer, ...style.right }}>
                    <RightContainer />
                </div>

            </div>
        )
    }
}

export default Dashboard;