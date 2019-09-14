import React from 'react';


function TopNav(){
    return(
        <div>
            <nav className = "navbar">
                <div>
                    <a href='#'>USER</a>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle open" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopNav