import React, { Component } from 'react'
import Circle from '../Circle.jsx'

class Container extends Component {
    render() {
        return (
            <>
            {/*changer les sates en props*/}
                <div className="containerP1">
                    <div className="divchildP1">
                        <div >
                            <Circle circleColor={this.props.player1Tokens[0] ? "#4646e8" : "black"} />
                            <Circle circleColor={this.props.player1Tokens[1] ? "#4646e8" : "black"} />
                        </div>

                        <div >
                            <Circle circleColor={this.props.player1Tokens[2] ? "#4646e8" : "black"} />
                            <Circle circleColor={this.props.player1Tokens[3] ? "#4646e8" : "black"} />
                        </div>
                    </div>
                </div>

                <div className="containerP2">
                    <div className="divchildP2">
                        <div >
                            <Circle circleColor={this.props.player2Tokens[0] ? "#c30c0c" : "black"} />
                            <Circle circleColor={this.props.player2Tokens[1] ? "#c30c0c" : "black"} />
                        </div>

                        <div >
                            <Circle circleColor={this.props.player2Tokens[2] ? "#c30c0c" : "black"} />
                            <Circle circleColor={this.props.player2Tokens[3] ? "#c30c0c" : "black"} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Container;