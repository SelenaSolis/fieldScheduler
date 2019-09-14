import React from 'react';

function EnterCoaches(props){
    let newCoach = {};

    return(
        <div>
            <form onSubmit={props.handleSubmit(newCoach)}>
                <label>
                    First Name:
                    <input type="text" onChange={(e)=>{
                        newCoach.fName = e.target.value;
                    }} />
                    Last Name:
                    <input type="text" onChange={(e)=>{
                        newCoach.lName = e.target.value;
                    }} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EnterCoaches;

