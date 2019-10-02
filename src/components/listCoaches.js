import React, {Component} from 'react';
import Coach from "./Coach"

class ListCoaches extends Component{
  state = {
    coaches: [],
    teams:[]
  }

  componentDidMount(){
    fetch('/coaches')
    .then(res => res.json())
    .then(data => this.setState({coaches: data}))
    fetch('/teams')
    .then(res => res.json())
    .then(data => this.setState({teams: data}))
  }




  render(){
    let coachList = this.state.coaches.map((c,index)=>{
      console.log(c)
      let teams = [];
      // if(this.state.teams.length){
        this.state.teams.map(t=>{
          console.log(t)
          console.log(t.coachId)
          if(t.coachId === c._id){
            console.log(`Match: Coach id ${c._id} and team coach id match ${t.coachId}`);
            teams.push(t.name)
          }
          return teams
          // else{
          //   console.log(`Fail: Coach id ${c._id} and team coach id not match ${t.coachId}`);
          //   // continue;
          // }
        })
      // }
      return<Coach
        key = {index}
        idx = {index}
        fName = {c.fName}
        lName = {c.lName}
        schedule = {c.schedule}
        teams = {teams}
      />
    })

    return(
      <div className = "d-flex flex-col flex-wrap justify-content-center">
        {coachList}
      </div>
    )
  }  
}

export default ListCoaches;