import React, { Component,  } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import "./App.css"
import 'antd/dist/antd.css';
import Dashboard from "./views/Dashboard";
import Login from "./views/login/Login"

const URL_LOGIN = new RegExp("/login", "i");

export function selectedLogin(pathname){
  return URL_LOGIN.test(pathname);
}

class App extends Component {
constructor(props){
  super(props)
this.state = {
  pathname: window.location.pathname
}}

updatePathname = () => {
  let oldPathname = this.state.pathname;
  if( oldPathname ===  window.location.pathname) {
    this.setState({
      pathname: window.location.pathname
    })
  }
}
  componentWillMount() {
    this.updatePathname()
  }
  componentWillUnmount() {
    this.updatePathname()
  }
  render() {

    const pathname = window.location.pathname;
    return (
        <Router>
        <div className="main--container">
          {!selectedLogin(pathname) &&
              <div className="nav-bar">
                <ul>
                <li><Link to={'/'}> ddd </Link></li>
                </ul>
                </div>
          }

          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
        </Router>
    );
  }
}

export default withRouter(App);



