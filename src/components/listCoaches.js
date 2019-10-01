import React, {Component} from 'react';
import Coach from "./Coach"

class ListCoaches extends Component{
  state = {
    coaches: []
  }

  componentDidMount(){
    fetch('/coaches')
    .then(res => res.json())
    .then(data => this.setState({coaches: data}))
  }
  render(){
    console.log(this.state.coaches)
    let coachList = this.state.coaches.map((c,index)=>
      <Coach
        key = {index}
        idx = {index}
        fName = {c.fName}
        lName = {c.lName}
        schedule = {c.schedule}
        teams = {c.teams}
      />
    )

    return(
      <div className>
        {coachList}
      </div>
    )
  }  
}

export default ListCoaches;