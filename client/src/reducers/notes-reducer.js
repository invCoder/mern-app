const intialState = {
    notes: [],
};

const noteReducer = (state= intialState, action) => {
    switch (action.type){
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };
            default:
                return state;

    }
};
export default noteReducer;