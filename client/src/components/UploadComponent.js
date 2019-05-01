import '../App.css';

import React from 'react'
import DropzoneComponent from './DropzoneComponent';


export class UploadComponent extends React.Component {

    render() {
        return (

            <React.Fragment>

                <DropzoneComponent />

            </React.Fragment> 
        );
    }
}

export default UploadComponent;
