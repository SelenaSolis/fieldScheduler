import React, {Component} from 'react';
import TopNav from "./components/TopNav";
import ListCoaches from "./components/ListCoaches";
import EnterCoach from "./components/EnterCoach";
import ViewCoach from "./components/ViewCoach"
import ListTeams from "./components/ListTeams"
import EnterTeam from "./components/EnterTeam"
import GoogleApiWrapper from "./map";
import "./css/App.css";


/* global google */

class App extends Component{

  state = {
    coaches: [],
    view: "homepage",
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

  render(){
    if(this.state.view === "homepage"){
      return (
        <div className = "container-fluid">
          <div className = "row">
            <div className = "col-xs-12 col-sm-4 col-md-2 col-lg-12">
              <TopNav/>
            </div>
            <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <EnterCoach/>
              <button>View Coaches</button>

              {this.state.coaches.map((c) =>
              <ListCoaches
                key = {c._id}
                fName = {c.fName}
                lName = {c.lName}
                id = {c._id}
                viewMore = {this.viewMore}
              />
            )}
            </div>
            <div id = "map">
              {/* <iframe width="600" height="450" frameborder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLwPMoJm1RIYRetVp1EtGm10&key=AIzaSyBsybA2i2zLi1_rzH4wN4TJIiZ3AmIW__Y" allowfullscreen></iframe> */}
              <GoogleApiWrapper
                fields = {this.state.fields}
              />
            </div>

            {/* <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6">
            
            </div> */}
            <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <EnterTeam/>
              {this.state.teams.map((t) => 
                <ListTeams
                  name = {t.name}
                />
                )}
            </div>
          </div>
        </div>
      )
    }
    else if(this.state.view === "viewcoach" && this.state.viewCoach){
      return(
        <ViewCoach
          coach = {this.state.viewCoach}
          changeView = {this.changeView}
        />
      )
    }
    else{
      return "loading"
    }
  }
}
export default App;
