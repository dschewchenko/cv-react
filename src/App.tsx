import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

import Profile from "./pages/profile/Profile";
import Experience from "./pages/experience/Experience";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Footer from "./footer/Footer";

export default class App extends Component {
  public render() {
    return (
      <Router>
        <div className="app">
          <main>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route path="/experience" component={Experience} />
              <Route path="/skills" component={Skills} />
              <Route path="/contact" component={Contact} />
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
