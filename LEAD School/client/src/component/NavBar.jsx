import React from 'react'

const NavBar = ({city}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <h5 className="navbar-brand">{city ? city : "City"}</h5>
               
            </div>
        </nav>
    )
}

export default NavBar