import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route
        {...rest}
        render={
            props => {
                return localStorage.getItem("admin") ?
                    (
                        <Component {...props} />
                    )
                    :
                    (
                        <Redirect
                            to={{
                                pathname: "/admin/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        }
    />
};

var mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, null)(PrivateRoute);