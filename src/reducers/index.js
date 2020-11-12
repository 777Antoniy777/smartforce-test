import {combineReducers} from "redux";
import repositories from "./repositories/repositories";
import user from "./user/user";

export default combineReducers({
  repositories,
  user,
});
