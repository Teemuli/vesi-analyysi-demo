
// /client/App.js
import React, { Component } from "react";
import './App.css';
import axios from "axios";
import MapContainer from './components/MapContainer';
//import UploadComponent from './components/UploadComponent';

class App extends Component {
  // initialize our state 
  state = {
    data: []
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has 
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
  }

  // never let a process live forever 
  // always kill a process everytime we are done using it
  componentWillUnmount() {
  }

  // our first get method that uses our backend api to 
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base

 
  putDataToDB = () => {
    axios.post("api/putData", {
      test_id: "test" + Math.random()*100,
      user_id: "user" + Math.random()*100,
      exposure_num: Math.random()*100
    });
  };

  // here is our UI
  // it is easy to understand their functions when you 
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="App">
            <header className="App-header">
              <script>
              </script>
              <h3>
                UEF sovelletun fysiikan laitoksen vesianalyysi WebApp
              </h3>
            </header>
            <div className="container">
          </div>
          </div>
        <MapContainer/>
      </div>
      
    );
  }
}

export default App;
