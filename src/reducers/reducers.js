import { combineReducers } from "redux";
import { keyBoardReducer } from "./keyBoard";
import { popUpReducer } from './popUp'

export default combineReducers({
    keyBoard: keyBoardReducer
    // popUp: popUpReducer
})