import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            this.props.login.isAdmin == 1 ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

var mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, null)(PrivateRoute);