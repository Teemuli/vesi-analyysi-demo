import React from "react";
import CSVReader from "react-csv-reader";
import '../App.css';
import axios from 'axios';

export class DropzoneComponent extends React.Component {
    
    render() {

    const handleForce = data => {
        // console.log(data)
        // console.log(data[1][1])
        axios.post(
            "api/putData", data 
        )
        .then(r => console.log(r.status))
        .catch(e => console.log(e))
      };
      
      const reader = (
        <div className="container">
          <CSVReader
            cssClass="react-csv-input"
            label="Valitse XRF-data CSV file."
            onFileLoaded={handleForce}
          />
          <p>tiedot lautuvat tietokantaan automaattisesti</p>
        </div>
      );
    
    return ( reader );
    }
}

export default DropzoneComponent;
