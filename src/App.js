import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import TopNav from "./components/TopNav";
import ListCoaches from "./components/ListCoaches";
import ListTeams from "./components/ListTeams"
import MapContainer from './components/GoogleMap'
import "./css/App.css";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


/* global google */

class App extends Component{

  state = {
    coaches: [],
    viewCoach: {},
    teams:[],
    fields:[]
  }

  componentDidMount(){
    fetch('/coaches')
    .then(res => res.json())
    .then(data => this.setState({coaches: data}))

    fetch('/teams')
    .then(res => res.json())
    .then(data => this.setState({teams: data}))

    fetch('/fields')
    .then(res => res.json())
    .then(data => {
      // let fields = [];
      // data.map(f =>{
      //   let string = '';
      //   let field = Object.assign({}, f)
      //   field.name.split(' ').map(word => string += `+${word}`)
      //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${string},+Austin,+TX&key=AIzaSyBsybA2i2zLi1_rzH4wN4TJIiZ3AmIW__Y`)
      //   .then(res => res.json())
      //   .then(data => {
      //     field.lat = data.results[0].geometry.location.lat;
      //     field.lon = data.results[0].geometry.location.lng;
      //   })
      //   console.log(field)
      //   fields.push(field);
        // fetch("/fields", {
        //   method: "PUT",
        //   headers: {"Content-Type": "application/json"},
        //   body: JSON.stringify(field)
        // }).then(console.log(field))
      // })
        this.setState({fields: data});
    })
  }

  updateField = () => {
    let fields = [...this.state.fields]
    fields.map(f =>{
      fetch("/fields", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(f)
      })
    })
  }

  viewMore = (id) =>{
    this.setState({view: "viewcoach"});
    let coach = this.state.coaches.find(c => c._id === id);
    this.setState({viewCoach: coach});
  }

  changeView = () =>{
    this.setState({view: "homepage"})
  }

  clear(){
    let coaches = [...this.state.coaches]
    coaches.map(c=>{
      c.teams = [];
      fetch("/coaches", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(c)
      })
    })
    let teams = [...this.state.teams]
    teams.map(t=>{
      t.coach = "";
      fetch("/teams", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(t)
      })
    })


  }

  render(){
    return (
      <Router basename = {'/'}>
        <div className = "container-fluid">
          <div className = "row">
              <TopNav/>
          </div>
          <div className = "row">
            <div className = " col col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Route exact path='/coaches' component={ListCoaches}/>
            <Route exact path='/teams' component={ListTeams}/>
            <Route exact path='/fields' component={MapContainer}/>
            </div>
          </div>
          <button onClick={()=>{this.clear()}}>clear</button>
        </div>
      </Router>
    ) 
  }
}
export default App;
