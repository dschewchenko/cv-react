import React, { Component } from "react";
import "./Skills.scss";
import { connect } from "react-redux";
import { Store } from "redux";
import { AppState } from "../../store";
import { fetchIfNeeded } from "../../store/actions/skills";
import { SkillsState } from "../../store/reducers/skills";
import SkillItem from "./SkillItem";

class Skills extends Component<SkillsProps> {
  public componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIfNeeded());
  }

  public render() {
    const { skills } = this.props;
    const { isFetching, items } = skills;
    return (
      <div className="skills container">
        <h1>Skills</h1>
        {isFetching && items.length === 0 && <h2>Loading...</h2>}
        {!isFetching && items.length === 0 && <h2>Empty</h2>}
        <div className="skills__list">
          {items.length &&
            items.map(item => <SkillItem skill={item} key={item.title} />)}
        </div>
      </div>
    );
  }
}

interface SkillsProps extends Store {
  skills: SkillsState;
}

const mapStateToProps = (state: AppState) => ({ skills: state.skills });

export default connect(mapStateToProps)(Skills);
