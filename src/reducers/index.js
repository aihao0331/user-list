import { combineReducers } from "redux";
import users from "./users.js";
import flags from "./flags.js"

const reducers = combineReducers({
  users,
  flags
});

export default reducers;