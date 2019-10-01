import React from 'react';


function Team (props){

  function assignCoach() {
    let newCoach = document.getElementById(props.id).value
    let newCoachObj = props.coaches.find(c=>`${c.fName} ${c.lName}` === newCoach)
    let team = props.team
    console.log(team)
    team.coach = newCoach;
    team.coachId = newCoachObj._id
    fetch("/teams", {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(team)
    })
    let coachObj = Object.assign({}, newCoachObj)
    fetch("/coaches", {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(coachObj)
    })
  }

      
      // .then(()=>{
        // CoachObj = Object.assign({}, newCoachObj)
        // let teams = coachObj.teams;
        // let foundTeam = teams.find(t=>t.name === team.name);
        // if(foundTeam === -1){
        //   teams.push(team.name)
        // }
        // else{

        // }
      // })
    

  return(
    <div className="card" id="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.coach}</h6>
        <p className="card-text">SCHEDULE</p>
        <a href="#" className="card-link" data-toggle = "modal" data-target={`#editModal${props.id}`}>edit</a>
        <button type="button" className="btn btn-secondary" data-container="#card" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Schedule
        </button>
        <div className="modal fade" id={`editModal${props.id}`} tabIndex="-1" role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalTitle">EDIT</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {props.name}
                <div className = "form-group">
                  <label htmlFor="teamName">Team Name:</label>
                  <input type ="text" id = "teamName" value={props.name}></input>
                </div>
                <div className = "form-group">  
                  <label htmlFor="teamCoach">Coach:</label>
                  <select className="form-control" id = {`${props.id}`} defaultValue={props.coach}>
                    <option></option>
                      {props.coaches.map(c=>{
                        return <option value={`${c.fName} ${c.lName}`}>{c.fName} {c.lName}</option>
                      })}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick = {assignCoach}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;