import { combineReducers } from "redux";
import updateInput from "./updateInput";

const rootReducer = combineReducers({
    updateInput: updateInput
})

export default rootReducer