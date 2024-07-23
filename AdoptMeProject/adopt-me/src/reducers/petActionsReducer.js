export const petActionsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PET':
            return action.payload;
        case 'CREATE_PET':
            return [...state, action.payload];
        case 'EDIT_PET':
            return state.map(pet => pet.id === action.payload.id ? action.payload : pet);
        case 'DELETE_PET':
            return state.filter(pet => pet.id !== action.payload);
        default:
            return state;
    }
};