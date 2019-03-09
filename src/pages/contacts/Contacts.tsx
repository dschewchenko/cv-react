import React, { Component } from "react";
import "./Contacts.scss";

export default class Contacts extends Component {
  public render() {
    return (
      <div className="contacts container">
        <h1>Contacts</h1>

        <div className="contacts__list">
          <div className="contacts__list__item">
            <h3>Email</h3>
            <p>
              <a href="mailto:dschewchenko@gmail.com">dschewchenko@gmail.com</a>
            </p>
          </div>
          <div className="contacts__list__item">
            <h3>LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/dschewchenko">
                linkedin.com/in/dschewchenko
              </a>
            </p>
          </div>
          <div className="contacts__list__item">
            <h3>GitHub</h3>
            <p>
              <a href="https://github.com/dschewchenko">
                github.com/dschewchenko
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
