import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from './routes';
import './custom.css';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRouter';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Router>
        {/* <Home /> */}
        <div>

          <div>
            <Switch>
              {this.showContentMenu(routes)}
            </Switch>
          </div>

        </div>
      </Router>
    );
  }

  showContentMenu = (routes) => {
    var result = null;
      if (routes.length > 0) {
          result = routes.map((route, index) => {
              if (route.path.includes('admin') && !route.path.includes('login')) {
                  return (
                      <PrivateRoute
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.main} />);
              }
              else {
                  return (
                      <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.main} />);
              };
          });
      
    }
    return result;
  }
}
