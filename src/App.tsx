import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

import Profile from "./pages/profile/Profile";
import Experience from "./pages/experience/Experience";
import Skills from "./pages/skills/Skills";
import Contacts from "./pages/contacts/Contacts";
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";

export default class App extends Component {
  public render() {
    return (
      <Router basename="/cv-react">
        <div className="app">
          <Navigation />
          <main>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/contacts" component={Contacts} />
              <Route
                render={() => (
                  <div className="not-found container">
                    <h1>Page Not Found</h1>
                    <p>
                      <Link to="/">Back to main page</Link>
                    </p>
                  </div>
                )}
              />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
