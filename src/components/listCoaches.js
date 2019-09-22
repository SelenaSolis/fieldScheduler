import React from 'react';

function ListCoaches(props){
    return(
        <div>
                <div>
                    <h5>{props.fName} {props.lName}</h5> 
                    <button onClick = {()=>{props.viewMore(props.id)}}>View</button>
                </div>
        </div>
    )  
}

export default ListCoaches;