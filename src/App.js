import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import TopNav from "./components/TopNav";
import ListCoaches from "./components/ListCoaches";
import ListTeams from "./components/ListTeams"
import MapContainer from './components/GoogleMap'
import Scheduler from "./components/Scheduler"
import "./css/App.css";
import Home from './components/Home'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
require("dotenv").config();


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
      let fields = [];
      data.map(f =>{
        let string = '';
        let field = Object.assign({}, f)
        field.name.split(' ').map(word => string += `+${word}`)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${string},+Austin,+TX&key=` + process.env.API_KEY)
        .then(res => res.json())
        .then(data => {
          field.lat = data.results[0].geometry.location.lat;
          field.lon = data.results[0].geometry.location.lng;
        })
        fields.push(field);
        // fetch("/fields", {
        //   method: "PUT",
        //   headers: {"Content-Type": "application/json"},
        //   body: JSON.stringify(field)
        // }).then(console.log(field))
        
      })
      this.setState({fields: data})
    })
  }


  // updateField = () => {
  //   let fields = [...this.state.fields]
  //   console.log(fields)
  //   fields.map(f =>{
  //     fetch("/fields", {
  //       method: "PUT",
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify(f)
  //     })
  //   })
  // }

  viewMore = (id) =>{
    this.setState({view: "viewcoach"});
    let coach = this.state.coaches.find(c => c._id === id);
    this.setState({viewCoach: coach});
  }

  changeView = () =>{
    this.setState({view: "homepage"})
  }                               

  clear(){
    let fields = [...this.state.fields]
    fields.map(f=>{
      for (var key in f.availTimesM) {
        if (f.availTimesM.hasOwnProperty(key)) {
          f.availTimesM[key].isBooked = false;
          f.availTimesM[key].coachId = "";
          f.availTimesM[key].teamId = "";
        }
      }
      for (var key in f.availTimesT) {
        if (f.availTimesT.hasOwnProperty(key)) {
          f.availTimesT[key].isBooked = false;
          f.availTimesT[key].coachId = "";
          f.availTimesT[key].teamId = "";
        }
      }
      for (var key in f.availTimesW) {
        if (f.availTimesW.hasOwnProperty(key)) {
          f.availTimesW[key].isBooked = false;
          f.availTimesW[key].coachId = "";
          f.availTimesW[key].teamId = "";
        }
      }
      for (var key in f.availTimesTh) {
        if (f.availTimesTh.hasOwnProperty(key)) {
          f.availTimesTh[key].isBooked = false;
          f.availTimesTh[key].coachId = "";
          f.availTimesTh[key].teamId = "";
        }
      }
      fetch("/fields", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(f)
          })
    })
    // let coaches = [...this.state.coaches]
    // coaches.map(c=>{
    //   c.teams = [];
    //   fetch("/coaches", {
    //     method: "PUT",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(c)
    //   })
    // })
    // let teams = [...this.state.teams]
    // teams.map(t=>{
    //   t.coach = "";
    //   t.coachId = "";
    //   fetch("/teams", {
    //     method: "PUT",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(t)
    //   })
    // })
  }




  



  render(){
    return (
      <Router basename = {'/'}>
        <div className = "container-fluid">
          <div className = "row">
              <TopNav/>
          </div>
          <div className = "row d-flex">
            <div className = "col col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Route exact path='/' component={Home}/>
            <Route exact path='/coaches' component={ListCoaches}/>
            <Route path='/teams' render={props => <ListTeams {...props} coaches = {this.state.coaches}/>}/>
            <Route exact path='/fields' component={MapContainer}/>
            <Route path='/scheduler' render={props =><Scheduler {...props} fields = {this.state.fields} teams = {this.state.teams} coaches = {this.state.coaches}/>}/>
            </div>
          </div>
          
          <button onClick={()=>{this.clear()}}>clear</button>
        </div>
      </Router>
    ) 
  }
}
export default App;
