import React, {Component} from 'react';

class Scheduler extends Component{
  constructor(props){
    super(props);
    this.state = {
      teams: [],
      coaches:[],
      fields:[],
      youngTms:[],
      topTms:[],
      coachesOneTm:[],
      coachesTwoTms:[],
      coachesThreeTms:[],
      coachesFourTms:[]
    }
  }

  componentDidMount(){
    this.setState({teams: this.props.teams})
    this.setState({coaches: this.props.coaches})
    this.setState({fields: this.props.fields})
  }

  sortCoaches(){
    let coaches = this.props.coaches
    let teams = this.props.teams
    let coachesOneTm = [];
    let coachesTwoTms=[];
    let coachesThreeTms= [];
    let coachesFourTms=[];

    coaches.map((c,index)=>{
      let teamsArr = []
        teams.map(t=>{
          if(t.coachId === c._id){
            // console.log(`Match: Coach id ${c._id} and team coach id match ${t.coachId}`);
            teamsArr.push(t.name)
          }
          return teams
          // else{
          //   console.log(`Fail: Coach id ${c._id} and team coach id not match ${t.coachId}`);
          //   // continue;
          // }
        })
        // console.log(teams)
        c.teams = teamsArr;
        if(teamsArr.length == 1){
          coachesOneTm.push(c)
        }
        else if(teamsArr.length == 2){
          coachesTwoTms.push(c)
        }
        else if(teamsArr.length == 3){
          coachesThreeTms.push(c)
        }
        else if(teamsArr.length == 4){
          coachesFourTms.push(c)
        }
    })
    this.setState({coachesOneTm: coachesOneTm})
    this.setState({coachesTwoTms: coachesTwoTms})
    this.setState({coachesThreeTms: coachesThreeTms})
    this.setState({coachesFourTms: coachesFourTms})
  }

  sortTeams(){
    let teams = this.props.teams
    let topTms = [];
    let youngTms = [];
    teams.map(t=>{
      let strYr = t.name.slice(0,2)
      let numYr = Number(strYr)
      if(numYr >= 7){
        youngTms.push(t)
      }
      else if(t.topTeam === "y"){
        topTms.push(t)
      }
    })
    this.setState({youngTms: youngTms})
    this.setState({topTms: topTms})
  }




  schedule(){
    this.sortTeams();
    this.sortCoaches();
    
  }

  render(){




    return(
      <div>
        <button onClick ={()=>{this.schedule()}}>schedule</button>
      </div>
    )  
  }

}

export default Scheduler;