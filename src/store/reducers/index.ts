import { combineReducers } from "redux";
import SkillsReducer from "./skills";
import ExperienceReducer from "./experience";

const rootReducer = combineReducers({
  skills: SkillsReducer,
  experience: ExperienceReducer
});

export default rootReducer;
