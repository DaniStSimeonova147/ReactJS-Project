import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persitedStateSerialized = localStorage.getItem(key);
        if (persitedStateSerialized) {
            const persistedState = JSON.parse(persitedStateSerialized);

            return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState
    ];
};