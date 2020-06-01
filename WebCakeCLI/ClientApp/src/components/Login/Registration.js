import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
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
                                        <h1 style={{textAlign: 'center' }}>ĐĂNG KÝ</h1>
                                        <form action="#">
                                            <div className="form-group">
                                                <label className="label">Tên đăng nhập</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" name="username" placeholder="username" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className="mdi mdi-check-circle-outline"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Tên đầy đủ</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" name=""/>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className="mdi mdi-check-circle-outline"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Mật khẩu</label>
                                                <div className="input-group">
                                                    <input type="password" className="form-control" name="password" placeholder="*********" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className="mdi mdi-check-circle-outline"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Nhập lại mật khẩu</label>
                                                <div className="input-group">
                                                    <input type="password" className="form-control" name="password" placeholder="*********" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className="mdi mdi-check-circle-outline"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Số điện thoại</label>
                                                <div className="input-group">
                                                    <input type="number" className="form-control" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className="mdi mdi-check-circle-outline"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Địa chỉ</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className="mdi mdi-check-circle-outline"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-secondary submit-btn btn-block">Đăng ký</button>
                                            </div>
                                            <div className="text-block text-center my-3" >
                                                <span className="text-small font-weight-semibold">A member ?</span>
                                                <Link href="register.html" className="text-black text-small" to="/login">Login</Link>
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
   
}

var mapDispathToProps = (dispatch, props) => {
   
}
export default connect(mapStateToProps, mapDispathToProps)(Registration);