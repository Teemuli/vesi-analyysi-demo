
import React, { Component } from "react";
import './App.css';
import MapComponent from './components/MapComponent';
import UploadComponent from './components/UploadComponent';
import GraphComponent from './components/GraphComponent';

class App extends Component {
  // initialize our state 
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      currentTest: 'not selected'
    };
  }

  updateCurrentTest = (testid) => {
    this.setState({currentTest: testid})
  }

  // here is our UI
  // it is easy to understand their functions when you 
  // see them render into our screen
  render() {
    return (
      <div>
        <div className="App">
            <header className="App-header">
              <h3>
                UEF sovelletun fysiikan laitoksen vesianalyysi WebApp
              </h3>
            </header>
            <UploadComponent />
            <div className="left"><MapComponent updateGraphData={this.updateCurrentTest}/></div>
            <div className="right"><GraphComponent currentId={this.state.currentTest}/></div>
          </div>
      </div>
    );
  }
}

export default App;
