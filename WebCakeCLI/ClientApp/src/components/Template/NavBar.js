import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid col-2 justify-content-center">

                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-profile">
                            <div className="nav-link">
                                <div className="user-wrapper">
                                    <div className="profile-image">
                                        <img src="../../images/faces/face1.jpg" alt="profile image" />
                                    </div>
                                    <div className="text-wrapper">
                                        <p className="profile-name">Richard V.Welsh</p>
                                        <div>
                                            <small className="designation text-muted">Manager</small>
                                            <span className="status-indicator online"></span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success btn-block">Hóa đơn
                <i className="mdi mdi-plus"></i>
                                </button>
                            </div>
                        </li>
                        <li className="nav-item" to=''>
                            <NavLink className="nav-link" to='' activeClassName='active'>
                                <i className="menu-icon mdi mdi-television"></i>
                                <span className="menu-title">Loại sản phẩm</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to=''>
                                <i className="menu-icon mdi mdi-television"></i>
                                <span className="menu-title">Sản phẩm</span>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to=''>
                                <i className="menu-icon mdi mdi-backup-restore"></i>
                                <span className="menu-title">Tài khoản</span>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                                <i className="menu-icon mdi mdi-restart"></i>
                                <span className="menu-title">User Pages</span>
                                <i className="menu-arrow"></i>
                            </a>
                            <div className="collapse" id="auth">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/samples/blank-page.html"> Blank Page </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/samples/login.html"> Login </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/samples/register.html"> Register </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/samples/error-404.html"> 404 </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/samples/error-500.html"> 500 </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>



            </div>
        )
    }
}

export default NavBar;
