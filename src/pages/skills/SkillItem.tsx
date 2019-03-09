import React, { Component } from "react";
import "./Skills.scss";
import { Skill } from "../../store/reducers/skills";

export default class SkillItem extends Component<SkillItemProps> {
  private static makeCompetency(stars: number) {
    return new Array(10)
      .fill(0)
      .map((_val, i) => (
        <li
          className={`competency__list__item ${
            i < stars ? "competency__list__item_filled" : ""
          }`}
          key={i}
        />
      ));
  }

  public render() {
    const { skill } = this.props;
    const { title, description, stars } = skill;
    return (
      <div className="skills__list__item">
        <h3>{title}</h3>
        <ul className="competency__list">{SkillItem.makeCompetency(stars)}</ul>
        <p>{description}</p>
      </div>
    );
  }
}

interface SkillItemProps {
  skill: Skill;
}
