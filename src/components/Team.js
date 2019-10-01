import React, { Component } from 'react';

class Team extends Component{
  constructor(props){
    super(props);
    this.state = {
      team: {}
    }
  }


  componentDidMount(){
    fetch(`/teams/${this.props._id}`)
      .then(res => res.json())
      .then(data => this.setState({ team: data }))
  }

  // function assignCoach(teamId) {
  //   let newCoach = document.getElementById(`${teamId}`).value
  //   let team = props.team
  //   console.log(team)
  //   team.coach = newCoach;
  //     fetch("/teams", {
  //       method: "PUT",
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify(team)
  //     })
  // }

  render(){
    return(
      <div className="card" id="card"style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.team.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.team.coach}</h6>
          <p className="card-text">SCHEDULE</p>
          <a href="#" className="card-link" data-toggle = "modal" data-target="#editModal">edit</a>
          <button type="button" className="btn btn-secondary" data-container="#card" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Schedule
          </button>




          <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="editModalTitle">EDIT</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {this.state.team.name}
          <div className = "form-group">
            <label htmlFor="teamName">Team Name:</label>
            <input type ="text" id = "teamName" value={this.state.team.name}></input>
          </div>
          <div className = "form-group">  
            <label htmlFor="teamCoach">Coach:</label>
            <select className="form-control" id = {`${this.state.team._id}`} defaultValue={this.state.team.coach}>
              <option></option>
                {this.props.coaches.map(c=>{
                  return <option value={`${c.fName} ${c.lName}`}>{c.fName} {c.lName}</option>
                })}
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
        </div>


        
      </div>
    </div>
  </div>





        </div>
      </div>
    )
  }
}

export default Team;