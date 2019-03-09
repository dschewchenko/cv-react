import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Store } from "redux";
import { connect } from "react-redux";
import {
  ExperienceState,
  Experience as ExperienceI
} from "../../store/reducers/experience";
import { AppState } from "../../store";
import "./Experience.scss";
import ExperienceItem from "./ExperienceItem";
import { fetchIfNeeded } from "../../store/actions/experience";

class Experience extends Component<ExperienceProps> {
  public componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIfNeeded());
  }

  private static renderItems(items: ExperienceI[]) {
    if (items.length) {
      return items.map(item => (
        <ExperienceItem experience={item} key={item.dateStart} />
      ));
    }

    return "";
  }

  public render() {
    const { experience } = this.props;
    const { isFetching, items } = experience;
    return (
      <div className="experience container">
        <h1>Work Experience</h1>
        {isFetching && items.length === 0 && <h2>Loading...</h2>}
        {!isFetching && items.length === 0 && <h2>Empty</h2>}
        <div className="experience__list">{Experience.renderItems(items)}</div>

        <Link to="/skills">Show skills</Link>
      </div>
    );
  }
}

interface ExperienceProps extends Store {
  experience: ExperienceState;
}

const mapStateToProps = (state: AppState) => ({ experience: state.experience });

export default connect(mapStateToProps)(Experience);
