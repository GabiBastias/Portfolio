import { ALL_BANDS, BANDS_BY_ID, CREATE_RANDOM_BAND, DELETE_BAND } from "./actionTypes";

const initialState = {
    allBandsCopy: [],
    allBands: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_BANDS:
            return {
                ...state,
                allBandsCopy: [...action.payload],
                allBands: [...action.payload]
            }
        case BANDS_BY_ID:
            return {
                ...state,
                allBands: action.payload
            }
        case CREATE_RANDOM_BAND:
            return{
                ...state,
                allBands: action.payload
            }
        case DELETE_BAND:
            return{
                ...state,
                allBands: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;