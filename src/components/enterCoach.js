import React, {Component} from 'react';

let emptyCoach = {
    fName: "",
    lName: "",
    teams:[],
    unavailableTimes: {},
    schedule: {}
}

class EnterCoaches extends Component{
    state = {coach: emptyCoach};

    handleSubmit = (e) =>{
        fetch('/coaches', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(this.state.coach)
        })
        this.setState({coach: emptyCoach})
      }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                    </label>
                        <input type="text" onChange={(e)=>{
                            this.setState({coach: {...this.state.coach, fName: e.target.value}})
                        }} />
                    <label>
                        Last Name:
                    </label>
                        <input type="text" onChange={(e)=>{
                            this.setState({coach: {...this.state.coach, lName: e.target.value}})
                        }} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default EnterCoaches;

