import '../App.css';

import React from 'react'
import DropzoneComponent from './DropzoneComponent';


// const axios = require("axios");


export class UploadComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    
    handleSubmit(event) {
        event.preventDefault();
        alert(
        `
        Tiedosto tallennettu:

        ${this.fileInput.current.files[0].name}
        `
        );

        // Parse CSV:
        


/*         axios.post(
                "api/putData", { 
                test_id: "8022", 
                user_id: "8023", 
                exposure_num: 8024,
                result_manganese: 322,
                latitude: 62.898000,
                longitude: 27.622000 }
            )
            .then(r => console.log(r.status))
            .catch(e => console.log(e))
*/
        }

    render() {
        return (

            <React.Fragment>

                <DropzoneComponent />

            </React.Fragment>
            
        );
    }
}

export default UploadComponent;