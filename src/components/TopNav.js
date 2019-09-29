import React from 'react';
import { Link} from "react-router-dom";


function TopNav(){
  return(
    <div className = "col col-xs-12 col-sm-4 col-md-12 col-lg-12">
      <nav className = "navbar" style={{"background-color":"blue"}}>
          <Link to="/">
            <div>USER</div>
          </Link>
        <div className="dropdown pull-right">
          <button className="btn btn-secondary dropdown-toggle open" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to='/teams'>
              <div className="dropdown-item">Teams</div>
            </Link>
            <Link to='/coaches'>
              <div className="dropdown-item">Coaches</div>
            </Link>
            <Link to='/fields'>
              <div className="dropdown-item">Fields</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default TopNav