import React, { Component } from "react";
import "./Experience.scss";
import { Experience } from "../../store/reducers/experience";

export default class ExperienceItem extends Component<ExperienceItemProps> {
  public render() {
    const { experience } = this.props;
    const { company, position, dateStart, dateEnd, description } = experience;
    const dateString = `${dateStart} - ${dateEnd}`;
    return (
      <div className="experience__list__item">
        <h3>{position}</h3>
        <h5>{dateString}</h5>
        <h4>{company}</h4>
        <ul>
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

interface ExperienceItemProps {
  experience: Experience;
}
