import React, {Component} from 'react';
import GoogleApiWrapper from "./GoogleMap";
import MapContainer from "./GoogleMap"

class Fields extends Component{
  state = {
    fields:[]
  }
  componentDidMount(){
    fetch('/fields')
    .then(res => res.json())
    .then(data => this.setState({fields: data}))
  }
  render(){
    return(
      <div>
        FIELDS
        {console.log(this.state.fields)}
        <div id = "map" style ={{height: '500px'}}>
        {/* <iframe width="600" height="450" frameborder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLwPMoJm1RIYRetVp1EtGm10&key=AIzaSyBsybA2i2zLi1_rzH4wN4TJIiZ3AmIW__Y" allowfullscreen></iframe> */}
          <MapContainer
            fields = {this.state.fields}
          />
          {/* </GoogleApiWrapper> */}
        </div>
      </div>
    ) 
  }
}

export default Fields;