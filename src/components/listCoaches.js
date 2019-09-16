import React from 'react';

function ListCoaches(props){
    return(
        <div>
            <button>View Coaches</button>
            {props.coaches.map(c =>
                <div>
                    <h5>{c.fName} {c.lName}</h5> 
                    <button>View</button>
                </div>
            )}
        </div>
    )  
}

export default ListCoaches;