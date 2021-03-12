import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"

function Navbar({title}) {//rfc tab ile geldi
    
    return (
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
        <a href="/" className="navbar-brand">{title}</a>

        <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><Link to ="/" className="nav-link">Home</Link></li>
            <li className="nav-item active"><Link to ="/add" className="nav-link">Add User</Link></li>
            <li className="nav-item active"><Link to ="/github" className="nav-link">Project Files</Link></li>
        
        </ul>
        
        
        </nav>
    )
}

Navbar.types = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default Value Now"
}

export default  Navbar;
