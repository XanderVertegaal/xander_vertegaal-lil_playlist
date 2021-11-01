import { combineReducers } from "redux";
import updateInput from "./updateInput";
import updateSongList from "./updateSongList";

const rootReducer = combineReducers({
    updateInput: updateInput,
    updateSongList: updateSongList
})

export default rootReducer