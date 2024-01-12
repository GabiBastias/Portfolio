import { ALL_BANDS, ALL_GENRES, BANDS_BY_ID, CREATE_RANDOM_BAND, CREATE_RANDOM_BAND_BY_BODY, DELETE_BAND, LANGUAJE, PATCH_BAND, UPDATE_BAND } from "./actionTypes";

const initialState = {
    allBandsCopy: [],
    allBands: [],
    allGenres: [],
    language: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LANGUAJE:
            console.log(action.payload);
            return{
                ...state,
                language: action.payload
            }
        case ALL_BANDS:
            return {
                ...state,
                allBandsCopy: [...action.payload],
                allBands: [...action.payload]
            }
        case ALL_GENRES:
            return {
                ...state,
                allGenres: [...action.payload] 
            }
        case BANDS_BY_ID:
            return {
                ...state,
                allBands: action.payload
            }
        case CREATE_RANDOM_BAND:
            return {
                ...state,
                allBands: action.payload
            }
        case CREATE_RANDOM_BAND_BY_BODY:
            return {
                ...state,
                allBands: [...state.allBands, action.payload]
            }
        case UPDATE_BAND:
            return {
                ...state,
                allBands: [action.payload]
            }
        case PATCH_BAND:
            return {
                ...state,
                allBands: [action.payload]
            }
        case DELETE_BAND:
            return {
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