import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddUserRequest, actGetUserRequest, actUpdateUserRequest} from '../../../actions/user';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';


class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userName: '',
            fullName: '',
            password:'',
            userPhone: '',
            userAddress:'',
            isAdmin: 0,
            isUpdate: false
        };
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditUser(id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditUser){
            var { itemEditUser} = nextProps;
            this.setState({
                userId: itemEditUser.userId,
                userName: itemEditUser.userName,
                fullName: itemEditUser.fullName,
                password:itemEditUser.password,
                userPhone: itemEditUser.userPhone,
                userAddress: itemEditUser.userAddress,
                isAdmin: itemEditUser.isAdmin
            });
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        if(name==="isAdmin"){
            value==="true" ? value=1 : value=0
        }
        this.setState({
            [name]: value
        });
    }
    onSave = (e) => {
        console.log(this.state);
        e.preventDefault();
        var { userId,userName, fullName,userAddress, userPhone, password,isAdmin } = this.state;
        var user = {
                userId: userId,
                userName: userName,
                fullName: fullName,
                password: password,
                userPhone: userPhone,
                userAddress: userAddress,
                isAdmin: isAdmin
        }
        if(userId){
            this.props.onUpdateUser(user);
        }else {
            this.props.onAddUser(user);
        }
        window.open('/admin/orderList', '_self')
        
    }

    /*componentDidUpdate() {
        const { login } = this.props;
        if (Object.keys(login).length !== 0) {
            window.open('/admin/orderList', '_self')
        }
        else {
            if (this.state.isLogin) {
                Swal.fire({
                    title: "Đăng nhập sai",
                    text: "Vui lòng thử lại",
                    icon: "error",
                    timer: 1000,
                    showCancelButton: false,
                    showConfirmButton: false
                });
            }
        }
    }*/
    

    render(){
        var { userId,userName, fullName,userAddress, userPhone, password,isAdmin } = this.state;
        return(
            <div className="container p-5">
                <h1 style={{textAlign: 'center'}}>{userId !== '' ? 'Cập nhật người dùng' : 'Thêm mới người dùng'}</h1>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>User Name: </label>
                        <input type="text" className="form-control" name="userName" value={userName} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Full Name: </label>
                        <input type="text" className="form-control" name="fullName" value={fullName} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" name="password" value={password} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Phone: </label>
                        <input type="number" className="form-control" name="userPhone" value={userPhone} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Address: </label>
                        <input type="text" className="form-control" name="userAddress" value={userAddress} onChange={this.onChange}/>
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" style={{fontSize:'18px'}} name="isAdmin" value={isAdmin} onChange={this.onChange}/> Là quản trị viên
                        </label>
                    </div>
                    <Link className="btn btn-primary mr-2" to="/admin/userList">Quay Lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemEditUser: state.itemEditUser
    } 
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser: (user) => {
            dispatch(actAddUserRequest(user));
        },
        onEditUser: (id) => {
            dispatch(actGetUserRequest(id));
        },
        onUpdateUser: (user) => {
            dispatch(actUpdateUserRequest(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
