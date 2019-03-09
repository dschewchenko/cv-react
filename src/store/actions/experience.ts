import { Dispatch } from "redux";
import axios from "axios";
import { Experience, ExperienceState } from "../reducers/experience";

export const REQUEST_EXPERIENCE = "REQUEST_EXPERIENCE";
export const RECEIVE_EXPERIENCE = "RECEIVE_EXPERIENCE";

function request() {
  return {
    type: REQUEST_EXPERIENCE
  };
}

function receive(items: Experience[]) {
  return {
    type: RECEIVE_EXPERIENCE,
    items
  };
}

function fetchSkills(): any {
  return (dispatch: Dispatch) => {
    dispatch(request());
    return axios
      .get(`${process.env.PUBLIC_URL}/experience.json`)
      .then(({ data }) => dispatch(receive(data)));
  };
}

function shouldFetch(experience: ExperienceState) {
  if (!experience) {
    return true;
  }

  if (experience.isFetching) {
    return false;
  }

  return !experience.items.length;
}

export function fetchIfNeeded(): any {
  return (dispatch: Dispatch, getState: () => any) => {
    const { experience } = getState();
    if (shouldFetch(experience)) {
      return dispatch(fetchSkills());
    }

    return false;
  };
}
