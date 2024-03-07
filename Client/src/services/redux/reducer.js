import { LANGUAJE } from "./actionTypes";

const initialState = {
    language: "Spanish"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LANGUAJE:
            return{
                ...state,
                language: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;