import React, { Component } from 'react';
import { actFetchLoginRequest } from '../../actions/login';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
        //console.log(this.state,'state');
        //const data = new FormData();
        //data.append('userName', this.state.username);
        //data.append('password', this.state.password);
        this.props.fetchLogin(this.state);
    }

    render() {
        return ( 
            <div>
                <div className="container-scroller" style={{fontSize:'13px'}}>
                    <div className="container-fluid page-body-wrapper full-page-wrapper auth-page">
                        <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
                            <div className="row w-100">
                                <div className="col-lg-4 mx-auto">
                                    <div className="auto-form-wrapper">
                                        <h1 style={{textAlign: 'center' }}>ĐĂNG NHẬP</h1>
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
                                                <button className="btn btn-secondary submit-btn btn-block" onClick={() => this.Login()}>Đăng nhập</button>
                                            </div>
                                            <div className="form-check-inline mb-2">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" value="" />Forgot password
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-link g-login w-100">
                                                    <img className="mr-3" src="../../images/file-icons/icon-google.svg" alt="" />Log in with Google</button>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-link g-login w-100">
                                                    <img className="mr-3" src="../../images/file-icons/icon-google.svg" alt="" />Log in with Facebook</button>
                                            </div>
                                            <div className="text-block text-center my-3" >
                                                <span className="text-small font-weight-semibold">Not a member ?</span>
                                                <Link href="register.html" className="text-black text-small" to="/registration">Create new account</Link>
                                            </div>
                                        </form>
                                    </div>
                                    
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