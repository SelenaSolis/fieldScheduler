import React from 'react';

function Coach(props){

  return(
    <div className = "d-flex text-align-center mx-auto">
      <h5>{props.fName} {props.lName}</h5>
      <div className = "collapse" id = {`moreInfo${props.idx}`}>
        <div className = "card card-body">
          <p>Teams {props.fName}</p>
        </div>
      </div>
      <button className = "btn btn-primary" type = "button" data-toggle="collapse" 
      data-target={`#moreInfo${props.idx}`} aria-expanded="false" aria-controls="collapseExample">View</button>
    </div>
  )  
}

export default Coach;