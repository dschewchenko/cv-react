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
        <p>
          I&apos;m Frontend developer with 6+ years of experience in IT
          industry. I&apos;m contributing a bit in open source. Have good
          experience in Backend development. I like to optimize frontend and
          develop fast applications, can achieve 100% in Google Page Speed
          Insights. I&apos;m married and have a beautiful daughter
        </p>
        <Link to="/experience">Show experience</Link>
      </div>
    );
  }
}
