export const SHOW_NAME_ACTION = "SHOW_NAME_ACTION";
export const showNameAction = {
    type: SHOW_NAME_ACTION
}

export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
})

