import React, { Component } from 'react';

class NavbarAdmin extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md bg-dark" style={{height: '55px'}}>
                <ul className="navbar-nav">
                    <li className="NavbarBrand" style={{color: 'white', fontSize:'20px'}}>Admin</li>

                </ul>
            </nav>
        )
    }
}
export default NavbarAdmin;



