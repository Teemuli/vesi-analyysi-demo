import React from "react";
import CSVReader from "react-csv-reader";
import '../App.css';
import axios from 'axios';


export class DropzoneComponent extends React.Component {
    
    render() {

    const handleForce = data => {
        console.log(data)
        console.log(data[1][1])
                    
        axios.post(
                "api/putData", { 
                test_id: data[1][0], 
                user_id: data[1][1], 
                exposure_num: data[1][2],
                result_manganese: data[1][3],
                latitude: data[1][4],
                longitude: data[1][5] }
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
          <p>tiedot lautuvat consoleen</p>
        </div>
      );
      
    
    return ( reader );
    }
}

export default DropzoneComponent;
