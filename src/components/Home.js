import React from 'react';

function Home(){
  return(
    <div className="row d-flex">
      <div className="col">
        <div className="card mt-5">
          <div className="card-body text-center">
            <h5 className="card-title text-center">Fields</h5>
            <p className= "card-text"></p>
            <a href="#" className="btn btn-primary">GO</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mt-5">
          <div className="card-body text-center">
            <h5 className="card-title text-center">Teams</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">GO</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mt-5">
          <div className="card-body text-center">
            <h5 className="card-title text-center">Coaches</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">GO</a>
          </div>
        </div>
      </div>
    </div>
  )  
}

export default Home;