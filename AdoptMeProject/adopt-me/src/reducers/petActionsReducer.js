export const petActionsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PET':
            return action.payload;
        case 'CREATE_PET':
            return [...state, action.payload];
        case 'EDIT_PET':
            return state.map(pet => pet._id === action.payload._id ? action.payload : pet);
        case 'DELETE_PET':
            return state.filter(pet => pet._id !== action.payload);
        default:
            return state;
    }
};