import React, { Component } from 'react';
import { actFetchLoginRequest } from '../../actions/login';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onHandleChange = (event) => {
      //  debugger;
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    Login() {
        this.props.fetchLogin(this.state);
    }

    render() {
        return (
            <div>
                <div className="container-scroller">
                    <div className="container-fluid page-body-wrapper full-page-wrapper auth-page">
                        <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
                            <div className="row w-100">
                                <div className="col-lg-4 mx-auto">
                                    <div className="auto-form-wrapper">
                                        <form action="#">
                                            <div className="form-group">
                                                <label className="label">Username</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" name="username" placeholder="username" onChange={this.onHandleChange} />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className="mdi mdi-check-circle-outline"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Password</label>
                                                <div className="input-group">
                                                    <input type="password" className="form-control" name="password" onChange={this.onHandleChange} placeholder="*********" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className="mdi mdi-check-circle-outline"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary submit-btn btn-block" onClick={() => this.Login()}>Login</button>
                                            </div>
                                            <div className="form-group d-flex justify-content-between">
                                                <div className="form-check form-check-flat mt-0">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" label="Keep me signed in"></input>
                                                    </label>
                                                </div>
                                                <a href="#" className="text-small forgot-password text-black">Forgot Password</a>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-block g-login">
                                                    <img className="mr-3" src="../../images/file-icons/icon-google.svg" alt="" />Log in with Google</button>
                                            </div>
                                            <div className="text-block text-center my-3">
                                                <span className="text-small font-weight-semibold">Not a member ?</span>
                                                <a href="register.html" className="text-black text-small">Create new account</a>
                                            </div>
                                        </form>
                                    </div>
                                    <ul className="auth-footer">
                                        <li>
                                            <a href="#">Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Help</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                    </ul>
                                    <p className="footer-text text-center">copyright © 2018 Bootstrapdash. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="js/vendor.bundle.base.js"></script>
                <script src="js/vendor.bundle.addons.js"></script>
                <script src="js/off-canvas.js"></script>
                <script src="js/misc.js"></script>
            </div>
        )
    }
}
var mapStateToProps = state => {
    return {
        login: state.login
    }
}

var mapDispathToProps = (dispatch, props) => {
    return {
        fetchLogin: (login) => {
            dispatch(actFetchLoginRequest(login));
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Login);