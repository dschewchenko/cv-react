import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import ava from "./ava.jpg";

export default class Profile extends Component {
  public render() {
    return (
      <div className="profile container">
        <img className="profile__img" src={ava} alt="" />
        <h1>Dmytro Shevchenko</h1>
        <h2>Frontend Team Lead</h2>
        <Link to="/experience">Show experience</Link>
      </div>
    );
  }
}
