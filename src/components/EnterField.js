import React, {Component} from 'react';

let emptyField = {
    name: "",
    field:"",
    units:0,
    availableTimeStartM:0,
    availableTimeEndM:0,
    availableTimeStartT:0,
    availableTimeEndT:0,
    availableTimeStartW:0,
    availableTimeEndW:0,
    availableTimeStartTh:0,
    availableTimeEndTh:0,
    lat:0,
    lon:0
}

class EnterField extends Component{
    state = {field: emptyField};

    handleSubmit = (e) =>{
        fetch('/fields', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(this.state.field)
        })
        this.setState({field: emptyField})
      }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, name: e.target.value}})
                        }} />
                        <br></br>
                        Units:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, units: e.target.value}})
                        }} />
                        <br></br>
                        Monday Start Time:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, availableTimeStartM: e.target.value}})
                        }} />
                        <br></br>
                        Monday End Time:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, availableTimeEndM: e.target.value}})
                        }} />
                        <br></br>
                        Tuesday Start Time:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, availableTimeStartT: e.target.value}})
                        }} />
                        <br></br>
                        Tuesday End Time:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, availableTimeEndT: e.target.value}})
                        }} />
                        <br></br>
                        Wednesday Start Time:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, availableTimeStartW: e.target.value}})
                        }} />
                        <br></br>
                        Wednesday End Time:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, availableTimeEndW: e.target.value}})
                        }} />
                        <br></br>
                        Thursday Start Time:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, availableTimeStartTh: e.target.value}})
                        }} />
                        <br></br>
                        Thursday End Time:
                        <input type="text" onChange={(e)=>{
                            this.setState({field: {...this.state.field, availableTimeEndTh: e.target.value}})
                        }} />
                        <br></br>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default EnterField;