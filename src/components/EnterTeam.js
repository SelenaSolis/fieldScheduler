import React, {Component} from 'react';

let emptyTeam = {
    name: "",
    topTeam: "n",
    size:""
}

class EnterTeam extends Component{
    state = {team: emptyTeam};

    handleSubmit = (e) =>{
        fetch('/teams', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(this.state.team)
        })
        this.setState({team: emptyTeam})
      }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Team Name:
                        <input type="text" onChange={(e)=>{
                            this.setState({team: {...this.state.team, name: e.target.value}})
                        }} />
                        <br></br>
                        Size:
                        <div>
                            <input type="checkbox" id = "9v9" value = '9v9' onChange={(e)=>{
                                document.getElementById('11v11').checked = false;
                                this.setState({team: {...this.state.team, size: e.target.value}})
                            }} />
                            9v9
                        </div>
                        <div>
                            <input type="checkbox" id = "11v11" value = '11v11' onChange={(e)=>{
                                document.getElementById('9v9').checked = false;
                                this.setState({team: {...this.state.team, size: e.target.value}})  
                            }} />
                            11v11
                        </div>
                        Top Team: 
                        <div>
                            <input type="checkbox" onChange={(e)=>{
                                if(e.target.checked){
                                    this.setState({team: {...this.state.team, topTeam: "y"}})
                                }
                                else{
                                    this.setState({team: {...this.state.team, topTeam: "n"}})
                                }
                            }} />
                            y
                        </div>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default EnterTeam;

