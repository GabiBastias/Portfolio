import { ALL_BANDS } from "./actionTypes";
const backURL = import.meta.env.VITE_BACK_URL;

export const getAllFakeBands = () => {
    return async (dispatch) => {
        try {
           const response = await fetch(`${backURL}/fakeBands`)
            .then(res => res.json());
           return dispatch({
                type: ALL_BANDS,
                payload: response
           })
        } catch (error) {
            return { error: error.message };
        }
    }
}

