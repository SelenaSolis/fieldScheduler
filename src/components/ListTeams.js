import React from 'react';

function ListTeams(props){
    return(
        <div>
                <div>
                    <h5>{props.name}</h5> 
                    <button onClick = {()=>{props.viewMore(props.id)}}>View</button>
                </div>
        </div>
    )  
}

export default ListTeams;