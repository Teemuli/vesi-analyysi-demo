
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
      currentTest: 'not selected',
    };
  }

  updateCurrentTest = (testid) => {
    this.setState({currentTest: testid})
  }

  render() {
    return (
      <div>
        <div className="App">
            <header className="App-header">
              <h3>
                UEF sovelletun fysiikan laitoksen vesianalyysi WebApp
              </h3>
            </header>
            <div><UploadComponent/></div>
            <div className="left"><GraphComponent currentId={this.state.currentTest}/></div>
            <div className="right"><MapComponent updateGraphData={this.updateCurrentTest}/></div>
          </div>
          
      </div>
    );
  }
}

export default App;
