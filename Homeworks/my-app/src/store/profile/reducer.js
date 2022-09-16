
import { SHOW_NAME_ACTION } from "./actions";

const initialState = {
    showName: false,
    name: 'Default'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME_ACTION:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}