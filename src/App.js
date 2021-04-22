import React from "react";
import './App.css'
import Circle from "./components/Circle.jsx"
import Winner from "./pic/winner.gif"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      numDee: 0,
      numCase: 0,
      numDee2: 0,
      numCase2: 0,
      player1Tokens: [false, false, false, false],
      player2Tokens: [false, false, false, false]

    }

    this.lancerDee = this.lancerDee.bind(this)
    this.renderVictory = this.renderVictory.bind(this)
  }


  lancerDee(player) {
    const dee = Math.floor(Math.random() * (6 - 1)) + 1;
    console.log("numDEE :", dee);

    if (player === "player1") {
      this.setState({
        numDee: dee,
        numCase: this.state.numCase + dee
      })
    } else if (player === "player2") {
      this.setState({
        numDee2: dee,
        numCase2: this.state.numCase2 + dee
      })
    }
  }

  // Bonus
  // go() {
  //   if (dee === 6) {


  //   } else {
  //     window.alert("noob")
  //   }
  // }






  renderCircles(n, p) {
    let circlesArray = []

    console.log("n", n);
    console.log("p", p);


    if (n >= p) {

      for (let index = n; index <= p; index++) {
        // console.log("index renderCircles", index);

        // circlesArray.push(<Circle circleColor="black" />)

        // if (this.state.numCase==index){
        //   return  circlesArray.push(<Circle circleColor="white"/>)
        // }else  if(this.state.numCase2==index){
        //  return circlesArray.push(<Circle circleColor="red"/>)
        // }else{
        //   circlesArray.push(<Circle circleColor="black"/>)
        // }
        // if(this.state.numCase){
        //   circlesArray.push(<Circle circleColor={this.state.numCase == index ? "white" : "black"} />)
        // }

        if (this.state.numCase2 === index) {
          // circlesArray.splice(index - 1, 1, <Circle circleColor="red" />)
          circlesArray.push(<Circle key={index} circleColor="#ec4444" />)
        } else if (this.state.numCase === index) {
          // circlesArray.splice(index - 1, 1, <Circle circleColor="blue" />)
          circlesArray.push(<Circle key={index} circleColor="#4480ec" />)
        } else {
          circlesArray.push(<Circle key={index} circleColor="black" />)
        }

        // console.log("cicle:", circlesArray)

        if (this.state.numCase > 37) {
          // console.log(circlesArray[37]);

          const arrayTokens = [...this.state.player1Tokens]
          const indexFirstFalse = arrayTokens.indexOf(false)

          arrayTokens[indexFirstFalse] = true

          this.setState({

            numCase: 0,
            player1Tokens: arrayTokens
          })
        } else if (this.state.numCase2 > 37) {
          const arrayTokens2 = [...this.state.player2Tokens]
          const indexSecondFalse = arrayTokens2.indexOf(false)
          arrayTokens2[indexSecondFalse] = true
          this.setState({
            numCase2: 0,
            player2Tokens: arrayTokens2

          })


        }


      }
    } else {
      for (let index = n; index >= p; index--) {
        // console.log("index renderCircles", index);

        // circlesArray.push(<Circle circleColor="black" />)

        // if (this.state.numCase==index){
        //   return  circlesArray.push(<Circle circleColor="white"/>)
        // }else  if(this.state.numCase2==index){
        //  return circlesArray.push(<Circle circleColor="red"/>)
        // }else{
        //   circlesArray.push(<Circle circleColor="black"/>)
        // }
        // if(this.state.numCase){
        //   circlesArray.push(<Circle circleColor={this.state.numCase == index ? "white" : "black"} />)
        // }

        if (this.state.numCase2 === index) {
          // circlesArray.splice(index - 1, 1, <Circle circleColor="red" />)
          circlesArray.push(<Circle key={index} circleColor="#ec4444" />)
        } else if (this.state.numCase === index) {
          // circlesArray.splice(index - 1, 1, <Circle circleColor="blue" />)
          circlesArray.push(<Circle key={index} circleColor="#4480ec" />)
        } else {
          circlesArray.push(<Circle key={index} circleColor="black" />)
        }

        // console.log("cicle:", circlesArray)

        if (this.state.numCase > 37) {
          // console.log(circlesArray[37]);

          const arrayTokens = [...this.state.player1Tokens]
          const indexFirstFalse = arrayTokens.indexOf(false)

          arrayTokens[indexFirstFalse] = true

          this.setState({

            numCase: 0,
            player1Tokens: arrayTokens
          })
        } else if (this.state.numCase2 > 37) {
          const arrayTokens2 = [...this.state.player2Tokens]
          const indexSecondFalse = arrayTokens2.indexOf(false)
          arrayTokens2[indexSecondFalse] = true
          this.setState({
            numCase2: 0,
            player2Tokens: arrayTokens2

          })


        }


      }
    }


    return circlesArray

  }

  renderEmptySpans(amount) {
    let arraySpan = []

    for (let index = 0; index <= amount; index++) {
      arraySpan.push(<span></span>)
    }

    return arraySpan
  }

  renderVictory() {
    if (this.state.player1Tokens.indexOf(false) === -1 || this.state.player2Tokens.indexOf(false) === -1) {
      return (<div>
        <p>You Win !</p>
        <div style={{ background: `url(${Winner})`, height: `${window.innerHeight}px`, backgroundRepeat: "no-repeat", marginLeft: "7vmax" }} />
      </div>)
    } else {
      return (
        <div>
          <div id="jeu">

            {/* <div style={{display: "flex", justifyContent: "space-between"}}>
              <div id="col1">
                {this.renderCircles(1, 10)}
              </div>

              <div id="col3">
                {this.renderCircles(19, 28)}
              </div>
            </div>

            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div id="col2">
                {this.renderCircles(11, 18)}
              </div>

              <div id="col4">
                {this.renderCircles(29, 36)}
              </div>

            </div> */}

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(10, 80px)",
              gridTemplateRows: "repeat(10, 80px)",
              gridGap: "5px"
            }}>

              {this.renderCircles(1, 10)}

              {this.renderCircles(36, 36)}

              {this.renderEmptySpans(8)}

              {this.renderCircles(11, 11)}

              {this.renderCircles(35, 35)}

              {this.renderEmptySpans(8)}

              {this.renderCircles(12, 12)}

              {this.renderCircles(34, 34)}

              {this.renderEmptySpans(8)}

              {this.renderCircles(13, 13)}

              {this.renderCircles(33, 33)}

              {this.renderEmptySpans(8)}

              {this.renderCircles(14, 14)}

              {this.renderCircles(32, 32)}

              {this.renderEmptySpans(8)}

              {this.renderCircles(15, 15)}

              {this.renderCircles(31, 31)}

              {this.renderEmptySpans(8)}

              {this.renderCircles(16, 16)}

              {this.renderCircles(30, 30)}

              {this.renderEmptySpans(8)}

              {this.renderCircles(17, 17)}

              {this.renderCircles(29, 29)}

              {this.renderEmptySpans(8)}

              {this.renderCircles(18, 18)}

              {this.renderCircles(28, 19)}


              {/* 
              <div>
                {this.renderCircles(3, 7)}
              </div>

              <div>
                {this.renderCircles(7, 10)}
              </div> */}

              {/* {this.renderCircles(1, 10)}

              {this.renderCircles(11, 18)}

              {this.renderCircles(19, 28)}

              {this.renderCircles(29, 36)} */}

            </div>

            <div className="containerP1">
              <div className="divchildP1">
                <div >

                  <Circle circleColor={this.state.player1Tokens[0] /* === true */ ? "white" : "black"} />
                  <Circle circleColor={this.state.player1Tokens[1] /* === true */ ? "white" : "black"} />


                </div>

                <div >
                  <Circle circleColor={this.state.player1Tokens[2] /* === true */ ? "white" : "black"} />
                  <Circle circleColor={this.state.player1Tokens[3] /* === true */ ? "white" : "black"} />
                </div>
              </div>



            </div>

            <div className="containerP2">
              <div className="divchildP2">
                <div >
                  <Circle circleColor={this.state.player2Tokens[0] /* === true */ ? "red" : "black"} />
                  <Circle circleColor={this.state.player2Tokens[1] /* === true */ ? "red" : "black"} />



                </div>

                <div >
                  <Circle circleColor={this.state.player2Tokens[2] /* === true */ ? "red" : "black"} />
                  <Circle circleColor={this.state.player2Tokens[3] /* === true */ ? "red" : "black"} />


                </div>
              </div>
            </div>



            <div className="numeroDee">

              <span className="spanP1">{this.state.numDee}</span>
              <i class="fas fa-chess-knight logo"></i>

              <span className="spanP2">{this.state.numDee2}</span>
              <p>Petit Chevaux</p>
              <button className="b1" onClick={() => this.lancerDee("player1")}>Player 1</button>
              <button className="b2" onClick={() => this.lancerDee("player2")}>Player 2</button>
            </div>
            {/* <p className="numeroDee"> {this.state.numDee2} </p> */}




          </div>



          {/* <div>
          <button onClick={this.lancerDee}>Lancer le Dé</button>
          <p></p>
      </div> */}
        </div>
      )
    }
  }

  render() {


    // console.log("this.state.numCase", this.state.numCase);
    // console.log("index of", this.state.player1Tokens.indexOf(false));

    return (
      <div>{this.renderVictory()}</div>
    )
  }

}



export default App

