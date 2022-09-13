import { useCallback } from "react";
import { store } from "../store";
import { showNameAction } from "../store/profile/actions";

export default function Profile() {
    const { showName, name } = store.getState().profile;
    const setShowName = useCallback(() => {
        dispatch(showNameAction);
    }, [dispatch]);
    return (
        <div>
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>

    );
}