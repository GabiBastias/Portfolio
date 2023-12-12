import { ALL_BANDS } from "./actionTypes";

const initialState = {
    allBands: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_BANDS:
            return {
                ...state,
                allBands: [...action.payload]
            }
    
        default:
            return state
    }
}

export default reducer;