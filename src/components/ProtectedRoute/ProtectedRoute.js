import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = (props) => {
    const { component: Component, isAuthenticated, ...rest } = props;
    console.log('isAuthenticated ' +isAuthenticated);
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/admin/login',
                    state: { from: props.location }
                }} />
        )} />
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authMember.isAuthenticated
    }
}
export default connect(mapStateToProps)(ProtectedRoute);