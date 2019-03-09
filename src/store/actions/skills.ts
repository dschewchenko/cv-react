import { Dispatch } from "redux";
import axios from "axios";
import { Skill, SkillsState } from "../reducers/skills";

export const REQUEST_SKILLS = "REQUEST_SKILLS";
export const RECEIVE_SKILLS = "RECEIVE_SKILLS";

function request() {
  return {
    type: REQUEST_SKILLS
  };
}

function receive(items: Skill[]) {
  return {
    type: RECEIVE_SKILLS,
    items
  };
}

function fetchSkills(): any {
  return (dispatch: Dispatch) => {
    dispatch(request());
    return axios
      .get("/skills.json")
      .then(({ data }) => dispatch(receive(data)));
  };
}

function shouldFetch(skills: SkillsState) {
  if (!skills) {
    return true;
  }

  if (skills.isFetching) {
    return false;
  }

  return !skills.items.length;
}

export function fetchIfNeeded(): any {
  return (dispatch: Dispatch, getState: () => any) => {
    const { skills } = getState();
    if (shouldFetch(skills)) {
      return dispatch(fetchSkills());
    }

    return false;
  };
}
