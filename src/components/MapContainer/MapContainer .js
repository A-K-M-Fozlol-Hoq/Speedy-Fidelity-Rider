// Tutiorial/docs link : https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2 

import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%',
};



export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      >
        <Marker position={{ lat: 48.00, lng: -122.00}} />
      </Map>
    );
  }
}
   

export default GoogleApiWrapper({
  apiKey: ("AIzaSyABQgBvQ-3DgsE8H-VhbJsUNb3BWcqmnAs")
  // apiKey: ("AIzaSyCZQdWZsNyakL30EbvVherjO4c9HcqFc8")
})(MapContainer)
