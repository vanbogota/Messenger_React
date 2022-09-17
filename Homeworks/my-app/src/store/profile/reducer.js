
import { SHOW_NAME_ACTION } from "./actions";
import { CHANGE_NAME } from "./actions";

const initialState = {
    showName: false,
    name: 'Default'
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME_ACTION:
            return {
                ...state,
                showName: !state.showName
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}

export default profileReducer

