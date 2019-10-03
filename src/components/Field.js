import React from 'react';

function Field(props){

  function findAvailableTms(dowObj){
    let startAv = 0;
    let startBooked = 0
    let timeBlockAv = "";
    let endAv = 0;
    // let dayOfWkBooked = []
    let dayOfWkAv = []
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
          endAv = time
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
        //end available time block
        //store available time block
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

        
          // if(time == lastTm){
          //   let startStr = String(start-1200);
          //   let endStr = String(end)
          //   if(endStr[2] === '4'){
          //     endStr = String(end - 1145)
          //   }
          //   else{
          //     endStr = String(end - 1185)
          //   }
            
          //   timeBlock = startStr + "-" + endStr
          //   dayOfWkFree.push(timeBlock);
          //   start = 0;
          // }
          startAv = 0;
          // else{
          //   let endStr = String(end);
          //   if(endStr[2] === '4'){
          //     endStr = String(end - 1145)
          //   }
          //   else{
          //     endStr = String(end - 1185)
          //   }
          //   timeBlock = startStr + '-' + endStr
          //   dayOfWkBooked.push(timeBlock);
          //   start = 0;
          // }
        }
        //to create occupied array
        //else if(start == 0)
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

    return mappedDowAv
  }
  



  return(
      <div>
          <h6>{props.field.name}</h6>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={`#collapse${props.id}`} aria-expanded="false" aria-controls="collapseExample">
            Available Times
          </button>
          <div className = "collapse" id = {`collapse${props.id}`}>
            <div className = "card card-body">
              <p>Monday:{findAvailableTms(props.field.availTimesM)}</p>
              <p>Tuesday:{findAvailableTms(props.field.availTimesT)}</p>
              <p>Wednesday:{findAvailableTms(props.field.availTimesW)}</p>
              <p>Thursday:{findAvailableTms(props.field.availTimesTh)}</p>
            </div>
          </div>
      </div>
  )
}
export default Field;