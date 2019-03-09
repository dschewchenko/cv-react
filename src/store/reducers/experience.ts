import { AnyAction } from "redux";
import { REQUEST_EXPERIENCE, RECEIVE_EXPERIENCE } from "../actions/experience";

const initialState: ExperienceState = {
  isFetching: false,
  items: []
};

export default function ExperienceReducer(
  state: ExperienceState = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case REQUEST_EXPERIENCE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_EXPERIENCE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state;
  }
}

export interface ExperienceState {
  isFetching: boolean;
  items: Experience[];
}

export interface Experience {
  company: string;
  position: string;
  dateStart: string;
  dateEnd: string;
  description: string[];
}
