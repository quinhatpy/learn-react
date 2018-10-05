import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router';
import ReduxToastr from 'react-redux-toastr';
import Home from './containers/Back/Home';
import Login from './containers/Back/Login';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
    render() {
        return (
            <Fragment>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="bottom-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick />
                <Switch>
                    <ProtectedRoute path="/admin" exact component={Home} />
                    <Route path="/admin/login" component={Login} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;
