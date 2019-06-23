import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from './routes';
import {Provider} from "react-redux";
import configureStore from './redux/configureStore';
import MuiThemeProviderContainer from "./containers/MuiThemeProviderContainer";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <MuiThemeProviderContainer>
          <BrowserRouter>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })}
              {/* Redirect to the choose plan page when route doesn't match */}
              <Redirect to="/choose-plan" />
            </Switch>
          </BrowserRouter>
        </MuiThemeProviderContainer>
      </Provider>
    );
  }
}

export default App;
