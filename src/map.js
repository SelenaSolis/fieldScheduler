import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            fields: props
        }
    }

    displayMarkers = () =>{
        return this.state.fields.map((field, index) => {
            return <Marker key = {index} id = {index} position = {{
                lat: field.lat, 
                lng: field.lon
            }}
            onclick={()=>console.log("you clicked me")}/>
        })
    }
    render(){
        console.log(this.state.fields)
        if(this.state.fields){
            return (
                <Map
                    google={this.props.google}
                    zoom={8}
                    // style={mapStyles}
                    initialCenter={{ lat: 30.300117, lng: -97.741697}}
                >
                    {this.displayMarkers()}
                </Map>
            );
        }
    }
}

export default GoogleApiWrapper({
    apiKey: ''
  })(MapContainer);