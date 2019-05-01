import '../App.css';

import React from 'react'
import DropzoneComponent from './DropzoneComponent';


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
