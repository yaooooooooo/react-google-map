

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Label} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) =>
<Label as='a' content={text} icon='home' pointing ='below' color='orange' circular/>;

AnyReactComponent.propTypes={
  text:PropTypes.string.isRequired
}

export default class HelloMap extends Component {
  state = {
    center: {
      lat: 38.8893771,
      lng: 121.5350036
    },
    zoom: 11,
  }

  render() {
    const {center,zoom}=this.state;
    return (
       // Important! Always set the container height explicitly
       <div style={{ height: '75vh', width: '100%' }}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: 'AIzaSyDTCrL-WZEy25Nte36IYepv5S84wKsug2o'}}
         defaultCenter={center}
         defaultZoom={zoom}
       >
         <AnyReactComponent
           lat={38.8893771}
           lng={121.5350036}
           text='dalian_neusoft'
         />
       </GoogleMapReact>
     </div>
    )
  }
}