import React, { Component } from 'react'
import Winner from "../../assets/pic/Winner.gif"

class DisplayPlayer1 extends Component {
    render() {
        return (<div className="winner" >
            <p className="pWins"> <span className="spanP1">Player 1</span> Wins !</p>
            <div className="offset-3" style={{ background: `url(${Winner})`, height: `${500}px`, backgroundRepeat: "no-repeat" }} />
        </div>)
    }
}

export default DisplayPlayer1;