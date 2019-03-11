import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import throttle from "lodash/throttle";
import "./Navigation.scss";

export default class Navigation extends Component<{}, NavigationState> {
  public constructor(props: any) {
    super(props);
    this.state = { isScrolled: false };
    this.debouncedHandleScroll = throttle(this.handleScroll, 50).bind(this);
  }

  public componentDidMount() {
    this.handleScroll();
    window.addEventListener("scroll", this.debouncedHandleScroll, true);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.debouncedHandleScroll, true);
  }

  private debouncedHandleScroll: any;

  private handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({ isScrolled: scrollTop > 0 });
  }

  public render() {
    let className = "navigation";
    const { isScrolled } = this.state;
    if (isScrolled) {
      className += " navigation_scrolled";
    }
    return (
      <header className={className}>
        <div className="container">
          <NavLink exact to="/" className="navigation__link">
            Profile
          </NavLink>
          <NavLink to="/experience" className="navigation__link">
            Experience
          </NavLink>
          <NavLink to="/skills" className="navigation__link">
            Skills
          </NavLink>
          <NavLink to="/contacts" className="navigation__link">
            Contacts
          </NavLink>
        </div>
      </header>
    );
  }
}

interface NavigationState {
  isScrolled: boolean;
}
