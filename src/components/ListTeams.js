import React, { Component } from 'react';
import Team from "./Team"

class ListTeams extends Component {
  state = {
    teams: []
  }

  componentDidMount() {
    fetch('/teams')
      .then(res => res.json())
      .then(data => this.setState({ teams: data }))
  }

  render() {
    let teamList = this.state.teams.map((t, index) =>
      <Team
        key={index}
        name={t.name}
      />  
    )
    return (
      <div className = "d-flex flex-row">
        {teamList}
      </div>
    )
  }
}

export default ListTeams;