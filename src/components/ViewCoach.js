import React from 'react';

function ListCoaches(props){
    return(
        <div>
                <div>
                    <h5>{props.coach.fName} {props.coach.lName}</h5> 
                    <button>View</button>
                </div>
                <button onClick = {() => {props.changeView()}}>back</button>
        </div>
    )  
}

export default ListCoaches;