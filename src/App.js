import React, {Component} from 'react';
import TopNav from "./components/TopNav";
import ListCoaches from "./components/ListCoaches";
import EnterCoach from "./components/EnterCoach";
import ViewCoach from "./components/ViewCoach"
import "./css/App.css";


class App extends Component{

  state = {
    coaches: [],
    view: "homepage",
    viewCoach: {}
  }

  componentDidMount(){
    fetch('/coaches')
    .then(res => res.json())
    .then(data => this.setState({coaches: data}))
  }

  viewMore = (id) =>{
    this.setState({view: "viewcoach"});
    let coach = this.state.coaches.find(c => c._id == id);
    this.setState({viewCoach: coach});
    console.log("why is this happening?")
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
            <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <EnterCoach/>
              <button>View Coaches</button>
            </div>

            <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
