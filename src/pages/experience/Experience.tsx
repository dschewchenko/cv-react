import React, { Component } from "react";
import "./Experience.scss";
import { Link } from "react-router-dom";

export default class Experience extends Component {
  public render() {
    return (
      <div className="experience container">
        <Link to="/skills">Show skills</Link>
      </div>
    );
  }
}
