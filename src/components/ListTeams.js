import React from 'react';

function ListTeams(props){
    return(
        <div>
                <div className = "d-inline">
                    <h5 className = "d-inline">{props.name}</h5>
                    <a href="#" className = "d-inline">
                        <span className="glyphicon glyphicon-pencil"></span>
                    </a> 
                    {/* <button onClick = {()=>{props.viewMore(props.id)}}>View</button> */}
                </div>
        </div>
    )  
}

export default ListTeams;