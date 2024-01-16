const intialState = {
    notes: [],
};

export const noteReducer = (state = intialState, action) => {
    switch (action.type){
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };
        case 'GET_NOTES':
            console.log("we have payload", action.payload);
            return {
                ...state,
                notes: action.payload.notes,
            };
        default:
            return state;
        };
};