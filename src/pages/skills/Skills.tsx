import React, { Component } from "react";
import { connect } from "react-redux";
import { Store } from "redux";
import { Link } from "react-router-dom";
import { AppState } from "../../store";
import { fetchIfNeeded } from "../../store/actions/skills";
import { SkillsState, Skill } from "../../store/reducers/skills";
import SkillItem from "./SkillItem";
import "./Skills.scss";

class Skills extends Component<SkillsProps> {
  public componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIfNeeded());
  }

  private static renderItems(items: Skill[]) {
    if (items.length) {
      return items.map(item => <SkillItem skill={item} key={item.title} />);
    }

    return "";
  }

  public render() {
    const { skills } = this.props;
    const { isFetching, items } = skills;
    return (
      <div className="skills container">
        <h1>Skills</h1>
        {isFetching && items.length === 0 && <h2>Loading...</h2>}
        {!isFetching && items.length === 0 && <h2>Empty</h2>}
        <div className="skills__list">{Skills.renderItems(items)}</div>

        <Link to="/contacts">Show contacts</Link>
      </div>
    );
  }
}

interface SkillsProps extends Store {
  skills: SkillsState;
}

const mapStateToProps = (state: AppState) => ({ skills: state.skills });

export default connect(mapStateToProps)(Skills);
