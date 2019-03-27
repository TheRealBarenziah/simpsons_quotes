import React, { Component } from 'react';
import './App.css';
import Quotes from './Components/Quotes'

class App extends Component {
  // constructor goes here
  constructor(props){
    super(props)
    // state est un objet... 
    this.state = {
      working: false
    }
  }
  // end constructor
  render() {
    console.log('State of working is :', this.state)
    const homerWorkingState = this.state.working? "working" : "idle"
    const homerTextState = this.state.working? "Homer is currently working, yay !" : "Homer is idle! Put him back to work !"
    const buttonState = this.state.working? "Untoggle work" : "Toggle work"
    const homerPhotoState = this.state.working? "https://cdn.quotesgram.com/img/28/29/1066291973-top-100-simpsons-quotes-100-pics_61.jpg" : "https://3stoogiez.com/wp-content/uploads/2015/08/happy-homer-750857.png"
    return (
      <div className="App">
        <h1>Simpsons Quotes</h1>
          <div className={`${homerWorkingState}`}>
            <p>{`${homerTextState}`}</p>
          </div>
          <img src={`${homerPhotoState}`} alt="Unhappy Homer" width="20%" />
        <br></br>
          <button onClick={() => 
            this.setState({ working : !this.state.working})}>{`${buttonState}`}
          </button>
        <br></br>
          <Quotes />
      </div>
    );
  }
}

export default App;
