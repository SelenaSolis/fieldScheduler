import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Fields from "./Fields"


const mapStyles = {
  width: '400px',
  height: '400px',
};


export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields:[]
    }
  }
  componentDidMount(){
    fetch('/fields')
    .then(res => res.json())
    .then(data => this.setState({fields: data}))
  }
    

  displayMarkers = () =>{
    return this.state.fields.map((field, index) => {
      return <Marker key = {index} id = {index} position = {{
        lat: field.lat, 
        lng: field.lon
      }}
      onClick={()=>console.log(`you clicked ${field.name}`)}/>
    })
  }
  render(){
    if(this.state.fields.length !== 0){
      return (
        <div className = "row">
          <div id = "map" className = "col-6">
          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{ lat: 30.282930, lng: -97.836910}}
          >
            {this.displayMarkers()}
          </Map>
          </div>
          <div className = "col-6">
            {this.state.fields.map((f)=>
              <Fields
                field={f}
              />
            )}
          </div>
          

        </div>
      )
    }
    else{
      return  "...loading"
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBsybA2i2zLi1_rzH4wN4TJIiZ3AmIW__Y'
})(MapContainer);