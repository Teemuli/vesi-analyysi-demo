import React, { Component } from 'react';
import '../App.css';


export class UploadComponent extends Component{

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
            <div className="form">
            <form onSubmit={this.handleSubmit}>
                <label>
                Lataa tiedosto:
                <br />
                    <input type="file" ref={this.fileInput} />
                </label>
                <br />

                <br />

                <button type="submit">Tallenna
                </button>
                
            </form>
            </div>
            
        );
    }
}

export default UploadComponent;