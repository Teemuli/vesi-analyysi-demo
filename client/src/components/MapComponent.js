import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%',
    position: "relative"
};

export class MapComponent extends Component {
  state = {
    data: [],
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };
 
  onMarkerClick = (props, marker, e) =>
  {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    this.props.updateGraphData(props.currentId);
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div>
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 62.893335, lng: 27.64338 }}
      >
        {
          data.map(dat => (
        <Marker 
            position={{lat: dat.latitude, lng: dat.longitude}}
            name={"test_id: " + dat.test_id}
            onClick={this.onMarkerClick}
            currentId={dat.test_id}
          />))
        }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAw6qAw1BwAoR4wJYlf3jwIqIveDlGQGWU'
})(MapComponent);