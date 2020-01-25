import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: [
        {lat: 50.450001, lng: 30.523333},
        {latitude: 50.447914, longitude: 30.522192},
      ]
    }
  }
  
  displayMarkers = () => {
    return this.state.place.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")} 
        />
      )
    })
  }
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 50.450001, lng: 30.523333}}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDhuHUIIKsP3gtKqTd5NLhKI5v1YaM2F1k'
})(MapContainer);