import React from 'react';

function Coach(props){
  console.log(props)
  return(
    <div className="card container mr-0 ml-0" id="card" style={{width: "18rem"}}>
      <div className="card-body text-center" >
        <h5 className="card-title">{props.fName} {props.lName}</h5>
        <h6 className="card-subtitle mb-2 text-muted"></h6>
        <br></br>
        <p className="card-text">TEAMS:</p>
        {props.teams.map(t=>{
          return <p className="card-text">{t}</p>
        })}
        
        <div className = "row align-items-end">
          <div className = "col d-inline">
            <a href="#" className="card-link" data-toggle = "modal" data-target="#editModal">edit</a>
          </div>
          <div className = "col d-inline ml-2">
            <button type="button" className="btn btn-secondary" data-container="#card" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
              Schedule
            </button>
          </div>
        </div>
       
      </div>
    </div>
  )  
}

export default Coach;