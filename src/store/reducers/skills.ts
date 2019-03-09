import { AnyAction } from "redux";
import { REQUEST_SKILLS, RECEIVE_SKILLS } from "../actions/skills";

const initialState: SkillsState = {
  isFetching: false,
  items: []
};

export default function SkillsReducer(
  state: SkillsState = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case REQUEST_SKILLS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_SKILLS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state;
  }
}

export interface SkillsState {
  isFetching: boolean;
  items: Skill[];
}

export interface Skill {
  title: string;
  description: string;
  stars: number;
}
