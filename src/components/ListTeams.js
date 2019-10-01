import React, { Component } from 'react';
import Team from "./Team"

class ListTeams extends Component {
  constructor(props){
    super(props);
    this.state = {
      teams: [],
    }
  }
  

  componentDidMount() {
    fetch('/teams')
      .then(res => res.json())
      .then(data => this.setState({ teams: data }))
  }

  teamUpdate(teamId){
    let team = this.state.teams.find(t=>t._id === teamId)
    this.setState({teamToUpd: team})
  }


  render() {
    let teamList = this.state.teams.map((t, index) =>
      <Team
        key={index}
        id={index}
        _id={t._id}
        team = {t}
        name={t.name}
        coach = {t.coach}
        coaches = {this.props.coaches}
        assignCoach = {this.assignCoach}
        onChangeCoach = {this.onChangeCoach}
      />
    )
    return (
      <div className = "d-flex flex-col flex-wrap justify-content-center">
        {teamList}
      </div>
    )
  }
}

export default ListTeams;