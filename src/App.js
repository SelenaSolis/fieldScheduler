import React, {Component} from 'react';
import TopNav from "./components/TopNav";
import ListCoaches from "./components/ListCoaches";
import EnterCoach from "./components/EnterCoach";
import "./css/App.css";


class App extends Component{

  state = {
    coaches: []
  }

  componentDidMount(){
    fetch('/coaches')
    .then(res => res.json())
    .then(data => this.setState({coaches: data}))
  }

  viewMore = (e, id) =>{

  }

  render(){
    return (
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-xs-12 col-sm-4 col-md-2 col-lg-12">
            <TopNav/>
          </div>
          <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <EnterCoach/>
          </div>

          <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ListCoaches
              coaches = {this.state.coaches}
              viewMore = {this.viewMore}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
