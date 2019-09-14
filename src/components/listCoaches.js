import React from 'react';

function ListCoaches(props){

    let coachList = props.coaches.map(c =>
            <h2>{c.fName} {c.lName}</h2>
        )
    return(
        <div>
            <button onClick = {props.fetchCoaches}>View Coaches</button>
            {coachList}
        </div>
    )
}

export default ListCoaches