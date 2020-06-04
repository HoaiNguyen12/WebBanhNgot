import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class NavbarAdmin extends Component {
    render() {
        
        return(
            <nav className="navbar navbar-expand-md bg-dark" style={{height: '55px'}}>
                <ul className="navbar-nav">
                    <NavLink className="NavbarBrand" to="/admin/login" style={{ color: 'white', fontSize: '20px' }}>{this.props.loginAdmin.fullName}</NavLink>

                </ul>
            </nav>
        )
    }
}

var mapStateToProps = state => {
    return {
        loginAdmin: state.loginAdmin
    }
}

export default connect(mapStateToProps, null)(NavbarAdmin);



