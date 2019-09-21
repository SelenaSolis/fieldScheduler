import React from 'react';

function ListCoaches(props){
    return(
        <div>
                <div>
                    <h5>{props.fName} {props.lName}</h5> 
                </div>
        </div>
    )  
}

export default ListCoaches;