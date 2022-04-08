import { combineReducers } from "redux";
import { keyBoardReducer } from "./keyBoard";

export default combineReducers({
    keyBoard: keyBoardReducer
    // popUp: popUpReducer
})