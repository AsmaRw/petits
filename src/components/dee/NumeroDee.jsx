import React, { Component } from 'react'

class NumeroDee extends Component {
    render() {
        return (
            <>
            {/* changer les sates et faire la remonter de donner */}
                <div className="numeroDee">
                    <span className="spanP1">{this.props.numDee}</span>
                    <i className="fas fa-chess-knight logo "></i>

                    <span className="spanP2">{this.props.numDee2}</span>
                    <p className="rainbow">Petit Chevaux</p>
                    <button className={this.props.currentPlayer === 1 ? "b1" : "b2"} onClick={() => this.props.lancerDee()}>Tirer dée du jouer {this.props.currentPlayer}</button>
                </div>
            </>
        )
    }
}

export default NumeroDee