import React from 'react';

function Field(props){

  function findTms(dowObj){
    let startAv = 0;
    let startBooked = 0
    let coachId = "";
    let teamId = ""
    let timeBlockAv = "";
    let timeBlockBooked = "";
    let endAv = 0;
    let endBooked = 0;
    let dayOfWkBooked = [];
    let bookedBlockObj = {}
    let dayOfWkAv = [];
    let lastTm = Object.keys(dowObj)[Object.keys(dowObj).length-1]
    for (var time in dowObj) {
      if (Object.entries(dowObj).length === 0) {
        return false;
      }

      //not booked
      else if(!dowObj[time].isBooked){
        if(startAv === 0){
          startAv = time
          endAv = time
        }
        else{
          //increase available end time
          endAv = time
        }
        if(startBooked !== 0){
          //end booked time block and push to booked array
          let startBookedStr = String(startBooked-1200);
          let endBookedStr = String(endBooked)
          if(endBookedStr[2] === '4'){
            endBookedStr = String(endBooked -1145)
          }
          else{
            endBookedStr = String(endBooked - 1185)
          }
          timeBlockBooked = startBookedStr.slice(0,-2) + ":" + startBookedStr.slice(-2) + "-" + endBookedStr.slice(0,-2) + ":" + endBookedStr.slice(-2)
          bookedBlockObj = {
            timeBlockBooked: timeBlockBooked,
            coachId: coachId,
            teamId: teamId
          }
          
          dayOfWkBooked.push(bookedBlockObj)

          startBooked = 0;
        }
        if(time === lastTm){
            let startAvStr = String(startAv-1200);
            let endAvStr = String(endAv)
            if(endAvStr[2] === '4'){
              endAvStr = String(endAv - 1145)
            }
            else{
              endAvStr = String(endAv - 1185)
            }
            
            timeBlockAv = startAvStr.slice(0,-2) + ":" + startAvStr.slice(-2) + "-" + endAvStr.slice(0,-2) + ":" + endAvStr.slice(-2)
            dayOfWkAv.push(timeBlockAv);
            startAv = 0;
        }
      }
      // isBooked
      else{
        if(startBooked === 0){
          //initializing time block booked
          startBooked = time;
          endBooked = time;
          coachId = dowObj[time].coachId
          teamId = dowObj[time].teamId
        }
        else{
          //increasing end time to continue block
          endBooked = time;
        }
        if(startAv !== 0){
          let startAvStr = String(startAv-1200);
          let endAvStr = String(endAv)
          //if time is hour:45
          if(endAvStr[2] === '4'){
            endAvStr = String(endAv - 1145)
          }
          //else add 15 minutes convert to standard time (15-1200)
          else{
            endAvStr = String(endAv - 1185)
          }
          //create time string
          timeBlockAv = startAvStr.slice(0,-2) + ":" + startAvStr.slice(-2) + "-" + endAvStr.slice(0,-2) + ":" + endAvStr.slice(-2)

          //push to "available" array
          dayOfWkAv.push(timeBlockAv);
          startAv = 0;
        }
      }
    }
    let mappedDowAv = dayOfWkAv.map((block, index) =>{
      if(index === dayOfWkAv.length-1){
        return " " + block
      }
      else if(dayOfWkAv.length > 1){
        return " " + block + ","
      }
    })
    let mappedDowBooked = dayOfWkBooked.map((blockObj, index)=>{
        return <p> booked: {blockObj.timeBlockBooked} by {blockObj.coachId}-{blockObj.teamId}</p>
    })
    return [mappedDowAv, mappedDowBooked]
  } 

  return(
      <div>
          <h6>{props.field.name}</h6>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={`#collapse${props.id}`} aria-expanded="false" aria-controls="collapseExample">
            Available Times
          </button>
          <div className = "collapse" id = {`collapse${props.id}`}>
            <div className = "card card-body">
              <p><b>Monday:{findTms(props.field.availTimesM)[0]}</b></p>
              {findTms(props.field.availTimesM)[1]}
              <p><b>Tuesday:{findTms(props.field.availTimesT)[0]}</b></p>
              {findTms(props.field.availTimesT)[1]}
              <p><b>Wednesday:{findTms(props.field.availTimesW)[0]}</b></p>
              {findTms(props.field.availTimesW)[1]}
              <p><b>Thursday:{findTms(props.field.availTimesTh)[0]}</b></p>
              {findTms(props.field.availTimesTh)[1]}
            </div>
          </div>
      </div>
  )
}
export default Field;