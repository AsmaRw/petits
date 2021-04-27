import React from "react";
import './App.css'
import Circle from "./components/Circle.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayPlayer1 from './components/Play/DisplayPlayer1'
import DisplayPlayer2 from './components/Play/DisplayPlayer2'
import Container from './components/container/Container.jsx'
import NumeroDee from './components/dee/NumeroDee.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      numDee: 0,
      numCase: 0,
      // numDeeC2: 0,
      // numCase2: 0,
      player1Tokens: [false, false, false, false],
      player2Tokens: [false, false, false, false],
      currentPlayer: 1

    }

    this.lancerDee = this.lancerDee.bind(this)
    this.renderVictory = this.renderVictory.bind(this)
  }



  lancerDee() {
    const dee = Math.floor(Math.random() * 6 + 1)
    console.log("numDEE :", dee);

    const player = this.state.currentPlayer

    if (player === 1) {

      if (this.state.numDeeC !== 0 || dee === 6) {
        this.setState({
          numDee: dee,
          numCase: this.state.numDee + dee,
          currentPlayer: 2
        })
      } else {
        this.setState({
          numDee: dee,
          currentPlayer: 2
        })
      }


    } else if (player === 2) {

      if (this.state.numDeeC2 !== 0 || dee === 6) {
        this.setState({
          numDee: dee,
          numCase: this.state.numCase + dee,
          currentPlayer: 1
        })
      } else {
        this.setState({
          numDee: dee,
          currentPlayer: 1
        })
      }

    }
  }

  renderCircles(n, p) {
    let circlesArray = []

    for (let index = n; index <= p; index++) {


      if (this.state.numCase === index) {
        circlesArray.push(<Circle key={index} circleColor="#ec4444" />)
      } else if (this.state.numCase === index) {
        circlesArray.push(<Circle key={index} circleColor="#4480ec" />)
      } else {
        circlesArray.push(<Circle key={index} circleColor="black" />)
      }

      if (this.state.numCase > 37) {
        const arrayTokens = [...this.state.player1Tokens]
        const indexFirstFalse = arrayTokens.indexOf(false)

        arrayTokens[indexFirstFalse] = true

        this.setState({

          numCase: 1,
          player1Tokens: arrayTokens
        })
      } else if (this.state.numCase > 37) {
        const arrayTokens2 = [...this.state.player2Tokens]
        const indexSecondFalse = arrayTokens2.indexOf(false)

        arrayTokens2[indexSecondFalse] = true

        this.setState({
          numCase: 1,
          player2Tokens: arrayTokens2

        })

      }

    }

    return circlesArray
  }

  renderVictory() {
    if (this.state.player1Tokens.indexOf(false) === -1) {
      return (
        <DisplayPlayer1 />
      )
    } else if (this.state.player2Tokens.indexOf(false) === -1) {
      return (
        <DisplayPlayer2 />
      )

    } else {
      return (

        <div className=" bg-g">
          <div className="offset-2 py-4">
            <div id="jeu">

              <div className="grid-game">

                {this.renderCircles(1, 1)}

                <div className="flex">
                  {this.renderCircles(2, 9)}
                </div>

                {this.renderCircles(10, 10)}

                <div className="flex grid-item-4">
                  {this.renderCircles(29, 36)}
                </div>

                <div className="flex grid-item-5">
                  {/* remonter de donner */}

                  <Container player1Tokens={this.state.player1Tokens} player2Tokens={this.state.player2Tokens}/>
                  
                  <NumeroDee numDee= {this.state.numDee} currentPlayer={this.state.currentPlayer} lancerDee={this.lancerDee}/>

                </div>

                <div className="flex grid-item-6">
                  {this.renderCircles(11, 18)}
                </div>

                {this.renderCircles(28, 28)}

                <div className="flex grid-item-8">
                  {this.renderCircles(20, 27)}
                </div>

                {this.renderCircles(19, 19)}

              </div>

            </div>
          </div>
        </div>
      )
    }
  }

  render() {

    return (
      <div>{this.renderVictory()}</div>
    )
  }

}



export default App

